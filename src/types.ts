/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: string; // slug da seção, ex.: 'cameras-ptz', 'microfones'
  subcategory?: string; // slug da subcategoria principal, ex.: 'zoom-optico-20x'
  /**
   * TODAS as subcategorias a que o produto pertence, a principal inclusive.
   *
   * O catálogo de origem é many-to-many: a mesma câmera está em "Câmeras PTZ",
   * "Resolução 1080P", "Saída HDMI" e "Zoom óptico 20X" ao mesmo tempo.
   * `subcategory` continua sendo UMA — a que vira rótulo do cartão e trilha da
   * página —, mas o filtro da vitrine usa esta lista: sem ela, o produto
   * aparecia em uma subcategoria e as outras nasciam vazias.
   *
   * Ausente em produto que a carga antiga gravou; quem filtra cai em
   * `subcategory`, que é o catálogo de antes.
   */
  subcategories?: string[];
  categoryLabel: string; // rótulo exibido, ex.: 'Zoom Óptico 20x'
  description: string;
  longDescription?: string;
  price: number;
  oldPrice?: number; // original price when on sale (renders strikethrough + % off)
  /** Saldo em estoque. Pode ter fração: a loja vende por peso e por metro. */
  stock?: number;
  image: string;
  highlight?: boolean;
  tag?: string; // ex.: 'DESTAQUE', 'NOVIDADE'
  /**
   * Peso da peça em QUILOS — é o que a cotação de frete usa.
   *
   * Era texto livre fazendo dois papéis ao mesmo tempo: rótulo na vitrine e
   * peso para o frete. Como texto, ninguém lia "0,2kg" como número — nem quem
   * integra, nem o próprio cálculo de frete, que garimpava o valor no meio da
   * frase. O rótulo passou a ser `weightLabel`.
   */
  weight: number;
  /** Medida/formato exibido na vitrine, ex.: 'Base 15cm · cobre'. Só texto. */
  weightLabel?: string;
  /**
   * Fotos extras, além da capa (`image`), na ordem de exibição.
   *
   * A capa NÃO entra aqui: ela é usada sozinha na vitrine, no carrinho e no
   * e-mail de pedido. Repeti-la obrigaria cada um desses lugares a saber que o
   * primeiro item é especial, e alguém acabaria mostrando a mesma foto duas
   * vezes.
   */
  images?: string[];
  sku: string;
  /** Materiais e composição da peça. */
  ingredients?: string;
  /** false = fora da vitrine (exclusão suave). Só o painel recebe este campo. */
  active?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

// Mega-menu taxonomy
export interface SubCategory {
  id: string;
  name: string;
  /**
   * Verdadeiro quando este item do segundo nível é, ele próprio, uma
   * CATEGORIA agrupada — e não uma subcategoria.
   *
   * O catálogo tem categorias soltas ("Câmeras PTZ", "Webcams e 360°"); o
   * painel as pendura numa categoria geral sem mover produto nenhum. Filtrar
   * por uma delas é comparar com `product.category`, e não com
   * `product.subcategory`.
   */
  isCategory?: boolean;
  /**
   * Vitrine da subcategoria, editada em Painel → Vitrine das Categorias.
   *
   * Existe pelo mesmo motivo de `MenuCategory.home`, um nível abaixo: o
   * catálogo tem cinco seções e sessenta subcategorias, e é a subcategoria que
   * o cliente procura ("Zoom óptico 20X", "Lapela"). Destacar só por seção
   * dava cinco portas de entrada para um catálogo de sessenta.
   *
   * Categoria agrupada (`isCategory`) não traz estes campos: ela já se destaca
   * pela própria linha de categoria, e repetir daria dois cartões iguais.
   */
  image?: string;
  blurb?: string;
  home?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string; // lucide icon name
  featured?: boolean; // highlighted entry (e.g. Promoções, Novidades)
  /**
   * Vitrine da categoria, editada em Painel → Vitrine das Categorias.
   *
   * `home` decide quem aparece na seção "Explore por categoria". Ela era seis
   * cartões cravados no código, com ids que deixaram de existir quando o
   * catálogo de verdade entrou — os cartões levavam a uma lista vazia.
   */
  image?: string;
  blurb?: string;
  home?: boolean;
  position?: number;
  /** Criada no painel (categoria geral), e não vinda da carga do catálogo. */
  manual?: boolean;
  /** Categoria geral em que esta está pendurada, ou null. */
  groupId?: string | null;
  subcategories: SubCategory[];
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: string;
}
