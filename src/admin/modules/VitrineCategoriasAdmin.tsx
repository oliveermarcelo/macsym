/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * A vitrine das categorias: foto, frase e quais aparecem na home.
 *
 * Esta tela nasceu de um defeito que ninguém tinha visto: a seção "Explore por
 * categoria" da home eram SEIS CARTÕES CRAVADOS no código — id, nome, frase e
 * foto fixos. Enquanto a loja tinha exatamente aquelas seis categorias,
 * funcionava. Quando o catálogo real entrou, esses ids deixaram de existir: os
 * cartões continuavam bonitos e levavam a uma lista vazia.
 *
 * O nome da categoria vem da carga do catálogo. O que se edita aqui é só o que
 * a loja tem a dizer sobre a própria vitrine: foto, frase, destaque na home e
 * em qual categoria geral cada uma fica.
 */

import React, { useMemo, useState } from 'react';
import {
  Image as ImageIcon, Home, Loader2, Trash2, Upload, GripVertical, CornerDownRight, FolderPlus,
} from 'lucide-react';

import { useAdmin } from '../AdminContext';
import { uploadImagem } from '../store';
import { Btn, Card, ConfirmDialog, inputCls } from '../ui';
import { safeImageSrc } from '../../utils/safeUrl';

/** Uma categoria como a lista crua do painel a entrega. */
type CategoriaCrua = NonNullable<ReturnType<typeof useAdmin>['state']['allCategories']>[number];

/** Uma subcategoria como o painel a entrega, com a seção e a contagem. */
type SubcategoriaCrua = NonNullable<ReturnType<typeof useAdmin>['state']['allSubcategories']>[number];

/** 2 MB: o servidor aceita até 3, e a folga evita recusa por poucos bytes. */
const TAMANHO_MAXIMO = 2 * 1024 * 1024;

/**
 * Sobe a foto escolhida e devolve a URL.
 *
 * A imagem vira URL ANTES de entrar na categoria: é o mesmo caminho do
 * produto, e pelo mesmo motivo — embutida no corpo, ela era cortada pelo
 * tamanho da coluna e salvava quebrada, com 200 na resposta e sem erro em
 * lugar nenhum.
 */
async function enviarFoto(arquivo: File): Promise<string> {
  if (arquivo.size > TAMANHO_MAXIMO) {
    throw new Error(`A imagem tem ${Math.round(arquivo.size / 1024)} KB; o máximo é 2 MB.`);
  }
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const leitor = new FileReader();
    leitor.onload = () => resolve(String(leitor.result));
    leitor.onerror = () => reject(new Error('Não consegui ler o arquivo.'));
    leitor.readAsDataURL(arquivo);
  });
  const { url } = await uploadImagem(dataUrl);
  return url;
}

/**
 * A linha de uma SUBCATEGORIA, dentro da seção dela.
 *
 * Tem os mesmos três controles da seção — foto, frase e destaque na home —
 * porque é a subcategoria que o cliente procura: o catálogo tem cinco seções e
 * sessenta subcategorias, e destacar só por seção oferecia cinco portas de
 * entrada para o catálogo inteiro.
 *
 * A contagem de produtos fica à vista porque é ela que diz se vale destacar:
 * subcategoria vazia na home é um cartão que leva a uma lista sem nada.
 */
function LinhaDaSubcategoria({ sub }: { sub: SubcategoriaCrua; key?: React.Key }) {
  const { updateSubcategoryShowcase } = useAdmin();
  const [frase, setFrase] = useState(sub.blurb);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState('');

  const gravar = (patch: { image?: string; blurb?: string; home?: boolean }) => {
    setErro('');
    void updateSubcategoryShowcase(sub.parentId, sub.id, patch).catch((e: unknown) => {
      setErro(e instanceof Error ? e.message : 'Não foi possível salvar.');
    });
  };

  const escolherFoto = async (arquivo: File | undefined) => {
    if (arquivo === undefined) return;
    setEnviando(true);
    setErro('');
    try {
      await updateSubcategoryShowcase(sub.parentId, sub.id, { image: await enviarFoto(arquivo) });
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Falha ao enviar a imagem.');
    } finally {
      setEnviando(false);
    }
  };

  const temFoto = sub.image !== '';

  return (
    <div className="flex gap-3 p-3 bg-white rounded-xl border border-gray-100 items-start">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-lg bg-gray-50 border border-gray-150 overflow-hidden flex items-center justify-center relative">
          {enviando ? (
            <Loader2 size={16} className="animate-spin text-gray-400" />
          ) : temFoto ? (
            <>
              <ImageIcon size={16} className="text-gray-300 absolute" />
              <img
                src={safeImageSrc(sub.image)}
                alt={sub.name}
                className="w-full h-full object-cover relative"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </>
          ) : (
            <ImageIcon size={16} className="text-gray-300" />
          )}
        </div>
        <div className="flex gap-1 mt-1.5">
          <label className="flex-1 cursor-pointer text-[10px] font-semibold text-center py-1 rounded border border-gray-200 text-gray-600 hover:bg-gray-50">
            <Upload size={10} className="inline mr-0.5" />
            {temFoto ? 'Trocar' : 'Enviar'}
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/avif"
              className="hidden"
              onChange={(e) => void escolherFoto(e.target.files?.[0])}
            />
          </label>
          {temFoto && (
            <button
              onClick={() => gravar({ image: '' })}
              title="Tirar a foto"
              className="px-1.5 py-1 rounded border border-gray-200 text-gray-400 hover:text-brand-red hover:bg-gray-50"
            >
              <Trash2 size={11} />
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 min-w-0 space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <CornerDownRight size={12} className="text-gray-300 flex-shrink-0" aria-hidden="true" />
            <p className="font-semibold text-sm text-gray-800 truncate">{sub.name}</p>
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${
                sub.productCount === 0
                  ? 'text-brand-red bg-brand-red/10'
                  : 'text-gray-500 bg-gray-100'
              }`}
              title="Produtos ativos nesta subcategoria"
            >
              {sub.productCount} produto(s)
            </span>
          </div>
          <label className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-600 flex-shrink-0 cursor-pointer">
            <input
              type="checkbox"
              checked={sub.home}
              onChange={(e) => gravar({ home: e.target.checked })}
              className="accent-primary-blue w-3.5 h-3.5"
            />
            <Home size={12} className={sub.home ? 'text-primary-blue' : 'text-gray-300'} />
            Mostrar na home
          </label>
        </div>

        <input
          value={frase}
          onChange={(e) => setFrase(e.target.value)}
          onBlur={() => { if (frase !== sub.blurb) gravar({ blurb: frase }); }}
          maxLength={160}
          placeholder="Frase curta — ex.: Enquadra o palestrante sozinho"
          className={`${inputCls} text-xs py-1.5`}
        />

        {erro !== '' && <p className="text-[11px] text-brand-red">{erro}</p>}
      </div>
    </div>
  );
}

function LinhaDaCategoria({ categoria, grupos, membros, onApagar }: {
  categoria: CategoriaCrua;
  /** Categorias que podem receber outras dentro. */
  grupos: CategoriaCrua[];
  /** Quantas categorias estão dentro desta. */
  membros: number;
  onApagar: (c: CategoriaCrua) => void;
  key?: React.Key;
}) {
  const { updateCategoryShowcase } = useAdmin();
  const [frase, setFrase] = useState(categoria.blurb ?? '');
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState('');

  const gravar = (patch: Parameters<typeof updateCategoryShowcase>[1]) => {
    setErro('');
    void updateCategoryShowcase(categoria.id, patch).catch((e: unknown) => {
      setErro(e instanceof Error ? e.message : 'Não foi possível salvar.');
    });
  };

  const escolherFoto = async (arquivo: File | undefined) => {
    if (arquivo === undefined) return;
    setEnviando(true);
    setErro('');
    try {
      await updateCategoryShowcase(categoria.id, { image: await enviarFoto(arquivo) });
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Falha ao enviar a imagem.');
    } finally {
      setEnviando(false);
    }
  };

  const temFoto = (categoria.image ?? '') !== '';

  return (
    <div className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 items-start">
      <GripVertical size={16} className="text-gray-300 mt-8 flex-shrink-0" aria-hidden="true" />

      {/* Foto */}
      <div className="flex-shrink-0">
        <div className="w-28 h-28 rounded-xl bg-gray-50 border border-gray-150 overflow-hidden flex items-center justify-center relative">
          {enviando ? (
            <Loader2 size={20} className="animate-spin text-gray-400" />
          ) : temFoto ? (
            <>
              {/*
                O ícone fica ATRÁS da foto. Se o arquivo não carregar — apagado
                do disco depois de cadastrado —, a miniatura some e sobra o
                ícone, em vez do retângulo quebrado que faria parecer defeito
                da tela.
              */}
              <ImageIcon size={22} className="text-gray-300 absolute" />
              <img
                src={safeImageSrc(categoria.image ?? '')}
                alt={categoria.name}
                className="w-full h-full object-cover relative"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </>
          ) : (
            <ImageIcon size={22} className="text-gray-300" />
          )}
        </div>
        <div className="flex gap-1.5 mt-2">
          <label className="flex-1 cursor-pointer text-[11px] font-semibold text-center py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
            <Upload size={11} className="inline mr-1" />
            {temFoto ? 'Trocar' : 'Enviar'}
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/avif"
              className="hidden"
              onChange={(e) => void escolherFoto(e.target.files?.[0])}
            />
          </label>
          {temFoto && (
            <button
              onClick={() => gravar({ image: '' })}
              title="Tirar a foto"
              className="px-2 py-1.5 rounded-lg border border-gray-200 text-gray-400 hover:text-brand-red hover:bg-gray-50"
            >
              <Trash2 size={12} />
            </button>
          )}
        </div>
      </div>

      {/* Nome, frase e destaque */}
      <div className="flex-1 min-w-0 space-y-2.5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <p className="font-bold text-gray-800 truncate">{categoria.name}</p>
            {categoria.manual && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary-blue bg-primary-blue/10 px-1.5 py-0.5 rounded flex-shrink-0">
                criada aqui
              </span>
            )}
            {/*
              Apagar só aparece para as criadas aqui. Categoria vinda da carga
              do catálogo voltaria na próxima carga, e o botão teria prometido o
              que não se cumpre.
            */}
            {categoria.manual && (
              <button
                onClick={() => onApagar(categoria)}
                title="Apagar esta categoria geral"
                className="p-1 rounded text-gray-300 hover:text-brand-red flex-shrink-0"
              >
                <Trash2 size={13} />
              </button>
            )}
          </div>
          {/*
            "Mostrar na home" é por categoria, e não uma lista fixa de seis:
            com dezenas de categorias no catálogo, quem escolhe quais merecem a
            home é quem conhece a loja.
          */}
          <label className="flex items-center gap-2 text-xs font-semibold text-gray-600 flex-shrink-0 cursor-pointer">
            <input
              type="checkbox"
              checked={categoria.home ?? false}
              onChange={(e) => gravar({ home: e.target.checked })}
              className="accent-primary-blue w-4 h-4"
            />
            <Home size={13} className={categoria.home ? 'text-primary-blue' : 'text-gray-300'} />
            Mostrar na home
          </label>
        </div>

        <input
          value={frase}
          onChange={(e) => setFrase(e.target.value)}
          onBlur={() => { if (frase !== (categoria.blurb ?? '')) gravar({ blurb: frase }); }}
          maxLength={160}
          placeholder="Frase curta — ex.: Zoom óptico de 3x a 20x, 4K e PoE"
          className={inputCls}
        />

        {/*
          O seletor de categoria geral é o coração desta tela.

          O catálogo traz "Câmeras PTZ", "Webcams e 360°" e "Mesas
          Controladoras" soltas, no mesmo nível. Aqui a loja pode pendurar as
          três numa "Áudio e Vídeo" — e nenhum produto se move: cada um
          continua na categoria em que foi cadastrado, e é a navegação que
          passa a somar os filhos.
        */}
        {membros === 0 && (
          <label className="flex items-center gap-2 text-xs text-gray-600">
            <CornerDownRight size={13} className="text-gray-400 flex-shrink-0" />
            Dentro de
            <select
              value={categoria.groupId ?? ''}
              onChange={(e) => gravar({ groupId: e.target.value })}
              className="text-xs border border-gray-200 rounded-lg py-1.5 px-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue/20 max-w-[220px]"
            >
              <option value="">— nenhuma (fica no topo) —</option>
              {grupos
                .filter((g) => g.id !== categoria.id)
                .map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
            </select>
          </label>
        )}

        <p className="text-[11px] text-gray-400">
          {membros > 0
            ? `Categoria geral · ${membros} categoria(s) dentro`
            : categoria.groupId
              ? `Dentro de “${grupos.find((g) => g.id === categoria.groupId)?.name ?? '?'}”`
              : 'No primeiro nível'}
          {' · '}
          {temFoto ? 'com foto' : 'sem foto — a home mostra um fundo liso'}
        </p>

        {erro !== '' && <p className="text-xs text-brand-red">{erro}</p>}
      </div>
    </div>
  );
}

export default function VitrineCategoriasAdmin() {
  const { state, createCategory, deleteCategory } = useAdmin();
  const [busca, setBusca] = useState('');
  const [novoNome, setNovoNome] = useState('');
  const [criando, setCriando] = useState(false);
  const [apagando, setApagando] = useState<CategoriaCrua | null>(null);
  const [erro, setErro] = useState('');

  /*
   * A lista CRUA, e não o `menu`.
   *
   * O menu já vem agrupado: as categorias penduradas dentro de outra não
   * aparecem no topo. Esta tela precisa de todas, senão a única forma de
   * desagrupar alguma seria mexendo no banco.
   */
  const todas = useMemo(
    () => (state.allCategories ?? []).filter((c) => !c.featured),
    [state.allCategories],
  );

  /** Quantas categorias estão dentro de cada uma. */
  const contagem = useMemo(() => {
    const m = new Map<string, number>();
    for (const c of todas) {
      if (c.groupId) m.set(c.groupId, (m.get(c.groupId) ?? 0) + 1);
    }
    return m;
  }, [todas]);

  /*
   * Quem pode receber outras dentro: só quem está no primeiro nível.
   *
   * Um grupo dentro de um grupo seria um nível a mais que a vitrine não
   * desenha, e os filhos sumiriam do menu sem aviso.
   */
  const grupos = useMemo(() => todas.filter((c) => c.groupId === null), [todas]);

  /*
   * As subcategorias por seção, já filtradas pela busca.
   *
   * Com a busca preenchida, uma subcategoria que casa aparece MESMO que a
   * seção dela não case: procurar "lapela" tem de achar a subcategoria, e não
   * devolver tela vazia porque nenhuma seção se chama assim. Por isso a busca
   * de seções, mais abaixo, também aceita a seção que tem filha casando.
   */
  const subsPorSecao = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    const m = new Map<string, SubcategoriaCrua[]>();
    for (const sub of state.allSubcategories ?? []) {
      if (termo !== '' && !sub.name.toLowerCase().includes(termo)) continue;
      const lista = m.get(sub.parentId);
      if (lista) lista.push(sub);
      else m.set(sub.parentId, [sub]);
    }
    return m;
  }, [state.allSubcategories, busca]);

  const visiveis = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    if (termo !== '') {
      return todas.filter(
        (c) => c.name.toLowerCase().includes(termo) || (subsPorSecao.get(c.id)?.length ?? 0) > 0,
      );
    }
    /*
     * Sem busca, a lista sai na ORDEM DA ÁRVORE: cada categoria geral seguida
     * das que estão dentro dela. Uma lista alfabética separaria a geral das
     * suas oito filhas, e conferir o agrupamento viraria caça ao tesouro.
     */
    const ordenada: CategoriaCrua[] = [];
    for (const c of todas.filter((x) => x.groupId === null)) {
      ordenada.push(c);
      ordenada.push(...todas.filter((x) => x.groupId === c.id));
    }
    // Órfãs (grupo apagado) entram no fim, para nada sumir da tela.
    for (const c of todas) if (!ordenada.includes(c)) ordenada.push(c);
    return ordenada;
  }, [todas, busca, subsPorSecao]);

  // Os dois contadores somam seção e subcategoria porque a home mostra as duas.
  const subs = useMemo(() => state.allSubcategories ?? [], [state.allSubcategories]);
  const naHome = todas.filter((c) => c.home).length + subs.filter((x) => x.home).length;
  const semFoto = todas.filter((c) => c.home && c.image === '').length
    + subs.filter((x) => x.home && x.image === '').length;

  const criar = async () => {
    const nome = novoNome.trim();
    if (nome === '') return;
    setCriando(true);
    setErro('');
    try {
      await createCategory(nome);
      setNovoNome('');
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Não foi possível criar.');
    } finally {
      setCriando(false);
    }
  };

  return (
    <div className="space-y-4">
      <Card className="p-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h2 className="font-bold text-gray-800">Vitrine das categorias</h2>
            <p className="text-sm text-gray-500 mt-1 max-w-2xl leading-relaxed">
              A foto e a frase que aparecem na seção <strong>“Explore por categoria”</strong> da
              página inicial, e como as categorias se organizam no menu. As
              <strong> subcategorias</strong> aparecem sob a seção delas e podem ir para a home do
              mesmo jeito — é nelas que está o que o cliente procura
              (“Zoom óptico 20X”, “Lapela”).
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-2xl font-extrabold text-primary-blue">{naHome}</p>
            <p className="text-[11px] text-gray-500 uppercase tracking-wider">na home</p>
          </div>
        </div>

        {/*
          Criar categoria geral.

          O catálogo traz "Câmeras PTZ", "Webcams e 360°" e "Mesas
          Controladoras" soltas, todas no mesmo nível — não existe uma "Áudio e
          Vídeo" para o cliente clicar. Esta é a forma de a loja criar a sua.
        */}
        <div className="mt-5 p-4 bg-gray-50 rounded-xl border border-gray-150">
          <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">
            Criar categoria geral
          </p>
          <p className="text-[11px] text-gray-500 mt-1 leading-relaxed max-w-2xl">
            Para juntar várias categorias sob um nome só — por exemplo, uma
            <strong> Áudio e Vídeo</strong> reunindo “Câmeras PTZ”, “Webcams e 360°” e
            “Mesas Controladoras”. Depois de criar, escolha em cada uma delas o campo
            <strong> Dentro de</strong>. Nenhum produto muda de lugar.
          </p>
          <div className="flex gap-2 mt-3 max-w-md">
            <input
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') void criar(); }}
              placeholder="Nome da categoria geral — ex.: Áudio e Vídeo"
              maxLength={120}
              className={inputCls}
            />
            <Btn onClick={() => void criar()} disabled={criando || novoNome.trim() === ''}>
              <FolderPlus size={14} className="mr-1.5" />
              Criar
            </Btn>
          </div>
          {erro !== '' && <p className="text-xs text-brand-red mt-2">{erro}</p>}
        </div>

        {semFoto > 0 && (
          <p className="mt-4 text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
            {semFoto === 1
              ? '1 item está marcado para a home e ainda não tem foto.'
              : `${semFoto} itens estão marcados para a home e ainda não têm foto.`}
            {' '}Sem foto, o cartão aparece com um fundo liso.
          </p>
        )}

        {naHome === 0 && (
          <p className="mt-4 text-xs text-gray-500 bg-gray-50 border border-gray-150 rounded-lg px-3 py-2">
            Nada marcado: a seção “Explore por categoria” não aparece na home.
          </p>
        )}

        <input
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar categoria"
          className={`${inputCls} mt-4 max-w-sm`}
        />
      </Card>

      <div className="space-y-3">
        {visiveis.map((c) => (
          <div key={c.id} className={c.groupId ? 'ml-6 sm:ml-10' : ''}>
            <LinhaDaCategoria
              categoria={c}
              grupos={grupos}
              membros={contagem.get(c.id) ?? 0}
              onApagar={setApagando}
            />
            {/*
              As subcategorias vêm logo abaixo da seção delas, recuadas.
              Numa lista à parte, ninguém saberia a que seção cada "Resolução
              4K" pertence — o catálogo repete esse nome em mais de uma.
            */}
            {(subsPorSecao.get(c.id) ?? []).length > 0 && (
              <div className="mt-2 ml-6 sm:ml-10 space-y-2">
                {(subsPorSecao.get(c.id) ?? []).map((sub) => (
                  <LinhaDaSubcategoria key={`${sub.parentId}/${sub.id}`} sub={sub} />
                ))}
              </div>
            )}
          </div>
        ))}
        {visiveis.length === 0 && (
          <Card className="p-10 text-center text-sm text-gray-400">
            Nenhuma categoria encontrada.
          </Card>
        )}
      </div>

      {apagando && (
        <ConfirmDialog
          title="Apagar categoria geral"
          message={
            `“${apagando.name}” será apagada.\n\n`
            + 'As categorias que estavam dentro dela voltam para o primeiro nível, e nenhum '
            + 'produto muda de lugar — agrupar nunca moveu produto, e desagrupar também não.'
          }
          confirmLabel="Apagar"
          onCancel={() => setApagando(null)}
          onConfirm={() => {
            void deleteCategory(apagando.id).catch((e: unknown) => {
              setErro(e instanceof Error ? e.message : 'Não foi possível apagar.');
            });
            setApagando(null);
          }}
        />
      )}
    </div>
  );
}
