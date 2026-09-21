/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * SEMENTE do catálogo — não é lida pela loja em tempo de execução.
 *
 * A vitrine e o painel consomem o banco (`GET /api/catalog`). Este arquivo
 * alimenta a carga inicial: `npm run seed:catalogo` transforma estes arrays em
 * `server/db/catalog.json`, que o `npm run migrar` importa.
 *
 * GERADO por `node scripts/importar-woocommerce.mjs` a partir de https://camerasdevideo.com.br
 * em 2026-09-21. Editar à mão aqui só faz sentido
 * antes da primeira carga: depois dela, quem manda é o painel.
 */

import { Product, Category, ValueProp, MenuCategory } from './types';

export const CATEGORIES: Category[] = [
  {
    id: "all",
    name: "Início",
    description: "Catálogo completo"
  },
  {
    id: "mesa-controladora",
    name: "Mesas Controladoras",
    description: "Controladoras IP e analógicas com joystick para operar câmeras PTZ"
  },
  {
    id: "webcam",
    name: "Webcams e 360°",
    description: "Webcams e câmeras de captação panorâmica para mesa de reunião"
  },
  {
    id: "cameras-ptz",
    name: "Câmeras PTZ",
    description: "Câmeras com zoom óptico, saída USB, HDMI, SDI e IP para videoconferência"
  },
  {
    id: "microfones",
    name: "Microfones",
    description: "Lapela, mesa, shotgun e captação 360° — com e sem fio"
  },
  {
    id: "acessorios",
    name: "Acessórios",
    description: "Suportes, cabos, lâmpadas e o que completa a instalação"
  }
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "destaques",
    name: "Destaques",
    icon: "Star",
    featured: true,
    subcategories: []
  },
  {
    id: "mesa-controladora",
    name: "Mesas Controladoras",
    icon: "Gamepad2",
    home: true,
    blurb: "Controladoras IP e analógicas com joystick para operar câmeras PTZ",
    subcategories: [
      {
        id: "ip",
        name: "Controladoras IP"
      },
      {
        id: "audio-mixer",
        name: "Mixers de Áudio"
      }
    ]
  },
  {
    id: "webcam",
    name: "Webcams e 360°",
    icon: "Webcam",
    home: true,
    blurb: "Webcams e câmeras de captação panorâmica para mesa de reunião",
    subcategories: [
      {
        id: "camera-360-graus",
        name: "Câmeras 360°"
      },
      {
        id: "al-face-tracking",
        name: "Rastreamento de Face"
      }
    ]
  },
  {
    id: "cameras-ptz",
    name: "Câmeras PTZ",
    icon: "Video",
    home: true,
    blurb: "Câmeras com zoom óptico, saída USB, HDMI, SDI e IP para videoconferência",
    subcategories: [
      {
        id: "zoom-optico-3x",
        name: "Zoom Óptico 3x"
      },
      {
        id: "zoom-optico-10x",
        name: "Zoom Óptico 10x"
      },
      {
        id: "zoom-optico-12x-cameras",
        name: "Zoom Óptico 12x"
      },
      {
        id: "zoom-optico-20x",
        name: "Zoom Óptico 20x"
      },
      {
        id: "resolucao-4k",
        name: "Resolução 4K"
      }
    ]
  },
  {
    id: "microfones",
    name: "Microfones",
    icon: "Mic",
    home: true,
    blurb: "Lapela, mesa, shotgun e captação 360° — com e sem fio",
    subcategories: [
      {
        id: "lapela-1-microfone",
        name: "Lapela"
      },
      {
        id: "lapela-2-microfone",
        name: "Lapela Dupla"
      },
      {
        id: "microfone-de-mesa",
        name: "De Mesa"
      },
      {
        id: "sem-fio",
        name: "Sem Fio"
      },
      {
        id: "com-fio",
        name: "Com Fio"
      },
      {
        id: "uhf",
        name: "UHF"
      },
      {
        id: "boya",
        name: "Linha BOYA"
      }
    ]
  },
  {
    id: "acessorios",
    name: "Acessórios",
    icon: "Cable",
    home: true,
    blurb: "Suportes, cabos, lâmpadas e o que completa a instalação",
    subcategories: [
      {
        id: "suporte",
        name: "Suportes"
      },
      {
        id: "lampada",
        name: "Lâmpadas"
      }
    ]
  },
  {
    id: "novidades",
    name: "Novidades",
    icon: "Sparkles",
    featured: true,
    subcategories: []
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "wc-17034",
    name: "Mesa de Corte de Vídeo 4 canais HDMI modelo LivePro L1",
    category: "mesa-controladora",
    categoryLabel: "Mesas Controladoras",
    description: "A mesa de corte LIVEPRO L1 é um mini switch de transmissão ao vivo multi-formato projetado como uma solução acessível para operação direta ou remota de um único usuário. Da marca FellWorld, ele suporta até quatro fontes",
    longDescription: "A mesa de corte LIVEPRO L1 é um mini switch de transmissão ao vivo multi-formato projetado como uma solução acessível para operação direta ou remota de um único usuário. Da marca FellWorld, ele suporta até quatro fontes HDMI 1080p60, incluindo câmeras e sistemas de jogos, bem como laptops e desktops compatíveis, onde você pode acessar slides do PowerPoint, videoclipes e páginas da web. Especificações Entrada Conectores de entrada de vídeo: 4 x HDMI Formatos de entrada de vídeo: HDMI 1080p: 24/30/50/60 fps 1080i: 50/60 fps 1360 x 768: 60 fps SXVGA 1280 x 1024: 60 fps 1280 x 768: 60 fps 720p: 50/60 fps XGA (1024 x 768): 60 fps Conectores de entrada de áudio: 1 x 1/8″ / 3,5 mm TRS estéreo Saída Conectores de saída de vídeo: 1 x HDMI Formatos da saída de vídeo: HDMI 1080p: 24/30/50/60 fps 1080i: 50/60 fps 1360 x 768: 60 fps SXGA 1280 x 1024: 60 fps 1280 x 768: 60 fp 720p: 50/60 fps XGA 1024 x 768: 60 fps Conectores de saída de áudio: 1 x 1/8″ / 3,5 mm TRS estéreo Saída Multiview: Multiview de 6 Vias Conectividade Outras E/S: 1 x USB Tipo-A Exibição Tamanho da tela: 2″ Hardware Compatibilidade do SO: Mac OS Windows Android Alimentação Conector de alimentação: 1 x (12 VDC a 1,5 A) Consumo de energia: 18 W Ambiental Temperatura de operação: -30 a 50°C Umidade de armazenamento: 10 a 85% Geral Peso: 0,5 kg Informações da embalagem Peso da caixa: 1,0 kg Dimensões da caixa (CxLxA): 26,5 x 13,5 x 8 cm",
    price: 1990,
    image: "/produtos/wc-17034-4ad78a.jpeg",
    images: [
      "/produtos/wc-17034-cda70c.jpg",
      "/produtos/wc-17034-ffa15b.jpg",
      "/produtos/wc-17034-479926.jpg",
      "/produtos/wc-17034-852cb4.jpg",
      "/produtos/wc-17034-3ca32f.jpeg"
    ],
    sku: "MCS-17034",
    weight: 0.5,
    weightLabel: "26,5 × 13,5 × 8 cm",
    active: true,
    highlight: true,
    tag: "NOVIDADE"
  },
  {
    id: "wc-17022",
    name: "Suportes De Parede P/ Câmeras Ptz Com Parafusos E Buchas",
    category: "acessorios",
    categoryLabel: "Suportes",
    description: "Suporte de parede para câmeras PTZ de videoconferência com PARAFUSOS e BUCHAS para montagem. Fabricada em chapa de aço de 3mm com pintura eletrostática preta suporta câmeras com peso igual ou inferior a 5 Kg Esta oferta…",
    longDescription: "Suporte de parede para câmeras PTZ de videoconferência com PARAFUSOS e BUCHAS para montagem. Fabricada em chapa de aço de 3mm com pintura eletrostática preta suporta câmeras com peso igual ou inferior a 5 Kg Esta oferta inclui: * 1 Suporte para câmera PTZ em aço * 4 Parafusos para bucha de parede * 4 Arruelas * 4 Buchas de Nylon Fischer UX 6mm * 4 Protetores Batente Gota De Silicone Adesivo 13×8,0mm * 1 Manipulo Botão Termoplástico Rosca 1/4 × 15mm Dimensões: Largura : 150 mm Altura: 132 mm Profundidade : 188 mm Oblongo para fixação da câmera : 55 x 7 mm Peso do suporte : 1Kge : 1Kg Garantia do vendedor: 12 meses",
    price: 180.4,
    image: "/produtos/wc-17022-cb38d3.webp",
    images: [
      "/produtos/wc-17022-ac52a9.webp",
      "/produtos/wc-17022-ed4117.webp",
      "/produtos/wc-17022-80b704.webp",
      "/produtos/wc-17022-f515f6.webp",
      "/produtos/wc-16098-2d5174.webp"
    ],
    sku: "MCS-17022",
    weight: 1,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: false,
    subcategory: "suporte"
  },
  {
    id: "wc-17020",
    name: "Câmera PTZ 4K Zoom 12x USB – Videoconferência Profissional",
    category: "cameras-ptz",
    subcategory: "zoom-optico-12x-cameras",
    categoryLabel: "Zoom Óptico 12x",
    description: "1/2.8” 4K CMOS, 8.46MP; 4K super resolution lens, max 30x optical zoom, max HFOV: 81°, max support 4KP60; Support HDMI, USB, Ethernet interface, support POE; High precision, smooth rotation, quiet PTZ; Supports multiple",
    longDescription: "1/2.8” 4K CMOS, 8.46MP; 4K super resolution lens, max 12x optical zoom, max HFOV: 81°, max support 4KP60; Support HDMI, USB, Ethernet interface, support POE; High precision, smooth rotation, quiet PTZ; Supports multiple control protocol and interface, support daisy chain Focal f=3.4mm ~ 40.3mm Iris F1.8 ~ F3.6 Optical Zoom 12x HFOV 81° ~ 7.6",
    price: 9449,
    image: "/produtos/wc-17020-9d800f.png",
    images: [
      "/produtos/wc-17020-ab3b52.jpg",
      "/produtos/wc-17020-6d2d6a.png"
    ],
    sku: "MCS-17020",
    weight: 2,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: true,
    tag: "NOVIDADE"
  },
  {
    id: "wc-17018",
    name: "Câmera PTZ Zoom 10x Wireless – Videoconferência Wi-Fi",
    category: "cameras-ptz",
    subcategory: "zoom-optico-10x",
    categoryLabel: "Zoom Óptico 10x",
    description: "Câmera De Videoconferência Wireless Modelo: MTE-NV400 Zoom de 10x com resolução 4k Câmera PTZ Design elegante e inteligente Conectividade Plug & Play USB3.0 Qualidade de imagem cristalina Movimento PTZ preciso, suave e",
    longDescription: "A série de câmeras USB 3.0 foi construída para fornecer excelente qualidade de imagem. 10 vezes mais rápido que o USB 2.0: você notará a diferença imediatamente. É fácil conectar-se com PC ou Mac via USB3.0 para videoconferência. Motor sem escovasBuilt-in brushless motor DC com tecnologia de velocidade variável, que fazem pan / tilt características extremamente silencioso PTZ, super velocidade, predefinições de alta precisão, controle de malha fechada etc.Ângulo de visão panorâmico Com 10x de zoom óptico, esta câmera permite que você se concentre no que é importante. E com zoom rápido e de velocidade lenta, você controla com precisão o que é capturado. Padrão de compressão de áudio/vídeo múltiplo Suporte a compressão de vídeo H.264/H.265 e resolução 3840×2160 com compressão de taxa de quadros de até 30fps. Controle Remoto RS-232 As configurações da câmera e as funções de controle PTZ podem ser executadas remotamente em qualquer local e em altas velocidades de comunicação através da interface RS-232. Número do Produto MTE-NV400 Sensor de Imagem Varredura progressiva de 1/1.2.8″, Sony IMX415 CMOS Pixel efetivo 8 mega pixel (16:9) 4K Resolução Horizontal 1080P30/25, 720P30/25 Padrão de sinal NTSC/PAL Zoom 10x lente zoom óptico 10x zoom digial Luminância mínima Cor: 0.01 lux (F1.5, AGC ON) 0.001 lux com IR Ângulo Horizontal Perto do fim 55.5°~Far-end 3.0° Ganhe controle Automático Foco Automático Balanço de branco Automático Relação SN R ≥50dB Velocidade do obturador 1/2 – 1/20.000 anos Posição predefinida O controle remoto IR suporta 9 predefinições, Protocolo PELCO suporta 256 predefinições Faixa de movimento Pan/Tilt Pan: 175 ° (velocidade máxima 80 ° / S), Inclinação: 35 ° ~ 55 ° (velocidade máxima 60 ° / S) Terminal de controle USB3.0, RS-232, RS485 Protocolo de Controle VISCA, PELCO-D, PELCO-P (RS-232, RS485) Saída de vídeo USB3.0 Formato de compressão de vídeo YUV, MJPG, H.264 H265 Redução de Ruído 2D/3D Temperatura de trabalho -10°C-~50°C Temperatura de armazen…",
    price: 3445,
    image: "/produtos/wc-17018-d8d0df.jpg",
    images: [
      "/produtos/wc-17018-d58876.webp",
      "/produtos/wc-17018-dc95ac.jpg"
    ],
    sku: "MCS-17018",
    weight: 2,
    weightLabel: "35 × 25 × 25 cm",
    active: true,
    highlight: true,
    tag: "NOVIDADE"
  },
  {
    id: "wc-17016",
    name: "Câmera de Conferência 360° – Captação Panorâmica",
    category: "webcam",
    subcategory: "camera-360-graus",
    categoryLabel: "Câmeras 360°",
    description: "Câmera Angular De Videoconferência Inteligente Captura E Rastreamento 360 Graus Câmera All-in-one portátil e de design compacto, portátil.· Sensor 4K UHD CMos Cobertura omnidirecional de 360° com distorção mínima A câme",
    longDescription: "Câmera All-in-one portátil e de design compacto, portátil. Sensor CMOS UHD 4K Cobertura omnidirecional de 360° com mínima distorção A câmera se ajusta automaticamente para manter os participantes centralizados em poucos segundos Rastreamento automático de IA Suporte 4 modos de exibição diferentes Imagem cristalina com resoluções de até 4K@ 30Hz Built-in 4 X lentes, cada câmera com 5 Mega Pixel, entregar-lhe imagens de vídeo vívidas. Cobertura omnidirecional de 360° com mínima distorção. Seu 360 ° omni-direcional & até 5 metros de raio, capacidade de captação de voz significa que você pode hospedar até 10 participantes. Adote a avançada tecnologia de algoritmo inteligente que reconhece e destaca os alto-falantes ativos. (Um quadro verde mostra o alto-falante ativo) . A câmera se ajusta automaticamente para manter os participantes centralizados em poucos segundos. lterne facilmente os modos de exibição para diferentes cenários de apresentação tocando no botão de modo. 1. Modo de Discussão 2. Modo de formação de feixe 3. Modo panorâmico 4. Modo Split Compatível com a maioria dos Tripés. Compatível com softwares convencionais como Skype, Microsoft Teams, Google Meet, Cisco, Zoom, BlueJeans, Amazon Chime, GoToMeeting, etc.",
    price: 3129,
    oldPrice: 3662,
    image: "/produtos/wc-17016-aa0240.jpg",
    images: [
      "/produtos/wc-17016-b6e07f.jpg",
      "/produtos/wc-17016-c7a742.webp",
      "/produtos/wc-17016-717758.jpg"
    ],
    sku: "MCS-17016",
    weight: 2,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: true,
    tag: "NOVIDADE"
  },
  {
    id: "wc-17012",
    name: "Mesa Controladora IP-Analógica",
    category: "mesa-controladora",
    categoryLabel: "Mesas Controladoras",
    description: "CkB-06 é um controlador de teclado IP com joystick quadridimensional e design ergonômico. sinta-se confortável. Controle de câmera nos modos IP e analógico. Protocolos completos VISCA, ONVIF, PELCO-P/D Suporte POE.",
    longDescription: "White Balance: Button, Auto, Indoor, Outdoor, One Push, Manual Exposure: Button, Auto, Manual, Shutter Priority, Iris Priority Shortcut Button: Bright Adjustment, Exposure Gain, BLC Focus Model Selection,OSD Shortcut Knob: RB Gain,Iris,Pan/TlIt Speed(1-8 Steps) Zoom speed(1-8 Steps) Protocol: Full VISCA,PELCO-D/P,ONVIF Outout: RS422,RS232,RS485,RJ45 Joystick: 4D joystick Screen: TFT LCD320×240 Power Consumption: ≤5W Power: DC12V-2A Work Temperature: -10°C~+55°C/14°F~13110°F Work Humidity: 20%~80%(non-condensation) Dimensions (LxWxH): 321.6mm×179.2mm×105.7mm Weight: 1.63KG",
    price: 1859,
    oldPrice: 2493,
    image: "/produtos/wc-17012-878e45.png",
    images: [
      "/produtos/wc-17012-88f3d5.png"
    ],
    sku: "MCS-17012",
    weight: 4,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-16729",
    name: "Camera PTZ MTE-NV3W Zoom 3x | 1080P",
    category: "acessorios",
    categoryLabel: "Acessórios",
    description: "Compatibilidade Universal: Compatível com Zoom, Skype for Business, Microsoft Lync (Teams), Voovmeeting, CISCO WebEx e outros softwares de conferência. Saída USB 3.0: O zoom ótico de 3X, a resolução 1080P e a USB 3.0 pe",
    longDescription: "mage Sensor: 1/2.8″ SONY CMOS Effective Pixels: 2.38MP, 16:9 Lens: f=F1.96-3.84mm Zoom: 3x optical zoom Video Interfaces: USB3.0 Pan/Tilt Rotation: ±175°, -90°~+90° Horizontal Angle: 103.89°(W)-42.12°(T) Vertical Angle: 67.14°(W)-24.87°(T) Diagonal Angle: 113.81°(W)-47.56°(T) Backlight Compensation: Support Video Format: 1080p@60/50/30/25fps, 720p@60/50/30/25fps, 840*480@30fps, 320*240P@30fps SNR: ≥50dB Focus: Auto / Manual Digital Noise Reduction: 2D & 3D Noise Reduction Exposure: Auto / Manual Video Compression Format: H.264, H.265, MJPG, YUY2 Control Protocol: VISCA/Pelco-D/Pelco-P, Baud Rate 9600/4800/38400/2400 Control Interface: RS232 (input only), RS485, USB3.0 (UVC1.1) Dimension (W*H*D): 171.8*192.8*171.6mm/260*217*197mm (before / after packing) N.W. / G.W.: 1.43kg/2.096kg Accessory: 1xCamera; 1xUSB Cable; 1xPower Adapter; 1xWall Mount; 1xManual",
    price: 0,
    image: "",
    images: [],
    sku: "MCS-16729",
    weight: 2,
    weightLabel: "35 × 25 × 25 cm",
    active: false,
    highlight: false
  },
  {
    id: "wc-16731",
    name: "Camera PTZ MTE-VHD10N Zoom 10x | HD1080P",
    category: "acessorios",
    categoryLabel: "Acessórios",
    description: "",
    price: 0,
    image: "",
    images: [],
    sku: "MCS-16731",
    weight: 2,
    weightLabel: "35 × 25 × 25 cm",
    active: false,
    highlight: false
  },
  {
    id: "wc-16718",
    name: "Camera PTZ MTE-G320U3 20x",
    category: "cameras-ptz",
    subcategory: "zoom-optico-20x",
    categoryLabel: "Zoom Óptico 20x",
    description: "Ângulo Ultra Amplo Alta Precisão, Rotação Suave, PTZ Silenciosa Equipada com um sensor de imagem CMOS profissional de 2 milhões de píxeis e uma plataforma de chip profissional SoC de baixo consumo e alto desempenho para",
    longDescription: "Interface Suporta HDMI, 3G-SDI, LAN, USB3.0. Sensor de Imagem: 1/2.8″ CMOS, 2.14MP Distância Focal: 4.7~94mm (para a versão de 20x) / 3.9~46.8mm (para a versão de 12x) Iris: F1.6~3.5 (para a versão de 20x) / F1.6~2.8 (para a versão de 12x) HFOV: 59.5°~2.9° (para a versão de 20x) / 72.5°~6.3° (para a versão de 12x) Zoom Ótico: 20X Foco: Automático, Manual Velocidade do Obturador: 1/50~1/10,000s AGC: Automático, Manual Sistema de Focagem: Automático, Manual, Gatilho PTZ, Gatilho de Um Toque Balanço de Branco: Automático, Manual, Rastreamento Automático, Um Toque, Temperatura de Cor Estática WDR: Suporte SNR: ≥50dB Exposição: Automático, Manual, Prioridade de Obturador, Prioridade de Iris, Prioridade de Brilho",
    price: 2690,
    image: "/produtos/wc-16718-8ed402.webp",
    images: [
      "/produtos/wc-16718-f72e85.webp",
      "/produtos/wc-16718-6fd4ba.webp",
      "/produtos/wc-16718-311738.webp",
      "/produtos/wc-16718-b768fb.webp"
    ],
    sku: "MCS-16718",
    weight: 3,
    weightLabel: "35 × 25 × 35 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-16713",
    name: "Camera PTZ MTE-A2001NV4 Zoom 12x | Full HD",
    category: "cameras-ptz",
    subcategory: "zoom-optico-12x-cameras",
    categoryLabel: "Zoom Óptico 12x",
    description: "Alta Definição e Sem Distorção Oferece vídeo super HD para a sua aplicação de gravação de palestras. A câmara consegue reconhecer e enquadrar os participantes mesmo que eles estejam de costas para a câmara.",
    longDescription: "Tamanho do Sensor: 1/2.8 polegada Píxeis: 2.14 MP Distância Focal: 3.9~46.8 mm Iris: F1.6~2.8 HFOV: 72.5°~6.3° Zoom Ótico: 12x Interface Suporta HDMI, 3G-SDI, LAN, USB 3.0, LINE IN.",
    price: 5669,
    image: "/produtos/wc-16713-333144.webp",
    images: [
      "/produtos/wc-16713-dd1ad7.webp",
      "/produtos/wc-16713-38519b.webp",
      "/produtos/wc-16713-534c91.webp",
      "/produtos/wc-16713-fc41f8.webp",
      "/produtos/wc-16713-77f9d4.webp",
      "/produtos/wc-16713-b9fe75.webp",
      "/produtos/wc-16713-73d146.webp"
    ],
    sku: "MCS-16713",
    weight: 3,
    weightLabel: "35 × 25 × 35 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-16708",
    name: "Camera PTZ MTE-G500H 4k, Zoom 12x",
    category: "cameras-ptz",
    subcategory: "zoom-optico-12x-cameras",
    categoryLabel: "Zoom Óptico 12x",
    description: "Conectividade: A interface completa suporta HDMI, LAN e USB 2.0, permitindo uma integração fácil e flexível com a sua configuração de gravação ou transmissão ao vivo. Zoom Ótico 12x: A câmara consegue aproximar-se da aç",
    longDescription: "Sensor de imagem: 1/2.8″ CMOS, 8.46MP Focal: f=3.4mm ~ 40.3mm Iris: F1.8 ~ F3.6 Zoom Ótico: 12x HFOV: 81° ~ 7.6° Controle de Exposição: Automático, Manual, Prioridade de Obturador, Prioridade de Iris, Prioridade de Brilho Foco: Automático, Manual Balanço de Branco: Automático, Manual SNR: ≥50dB BLC/WDR: Suporte",
    price: 5669,
    image: "/produtos/wc-16708-e3e035.webp",
    images: [
      "/produtos/wc-16708-1aeccc.webp",
      "/produtos/wc-16708-e7c48e.webp",
      "/produtos/wc-16708-cc4231.webp",
      "/produtos/wc-16708-1499d2.webp"
    ],
    sku: "MCS-16708",
    weight: 4,
    weightLabel: "40 × 25 × 25 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-16098",
    name: "Suporte De Parede Para Câmeras Ptz",
    category: "acessorios",
    categoryLabel: "Suportes",
    description: "Esta oferta não inclui parafusos nem buchas para fixação. Aconselhamos utilizar buchas de 8mm e parafusos correspondentes. Fabricada em chapa de aço de 3mm com pintura eletrostática preta suporta câmeras com peso igual…",
    longDescription: "Esta oferta não inclui parafusos nem buchas para fixação. Aconselhamos utilizar buchas de 8mm e parafusos correspondentes. Fabricada em chapa de aço de 3mm com pintura eletrostática preta suporta câmeras com peso igual ou inferior a 5 Kg Dimensões: Largura : 150 mm Altura: 132 mm Profundidade : 188 mm Oblongo para fixação da câmera : 55 x 7 mm Peso do suporte : 1Kg Garantia do vendedor: 12 meses",
    price: 169.9,
    image: "/produtos/wc-16098-2d5174.webp",
    images: [
      "/produtos/wc-17022-ed4117.webp",
      "/produtos/wc-17022-80b704.webp",
      "/produtos/wc-17022-f515f6.webp",
      "/produtos/wc-16098-2d5174.webp",
      "/produtos/wc-17022-ac52a9.webp"
    ],
    sku: "MCS-16098",
    weight: 1,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: false,
    subcategory: "suporte"
  },
  {
    id: "wc-16097",
    name: "Câmera PTZ com Zoom Óptico 10x | Full HD 1080p 60fps – Videoconferência",
    category: "cameras-ptz",
    subcategory: "zoom-optico-10x",
    categoryLabel: "Zoom Óptico 10x",
    description: "MTE-VL10N-NDI PTZ Câmera De Conferência HD1080P Zoom De 60fps 10x NDI PTZ Conference Camera HD1080P 60fps 10x Zoom USB3.0 IP Live Streaming Camera HDMI POE for Church Worship Education OBS VMix Red Dot Design Winner 10x",
    longDescription: "Zoom óptico de 10x Saída de vídeo USB3.0 HDMI RJ45 Design elegante e inteligente Conectividade USB Plug & Play 1080p@60fps Imagem de vídeo Predefinição: 10 via configuração remota IR (255 via RS232) 61° Amplo campo de visão sem distorção de vídeo 1/2.8 polegadas de alta qualidade, 2.38MP (16:9) sensor CMOS Suporte H.264, H.265, MJPG, YUY2, NV12 formato de compressão de vídeo e LAN POE Suporte RTSP, RTMP, ONVIF, GB/T28181 protocolo de rede",
    price: 3061,
    image: "/produtos/wc-16097-1d2dfa.jpg",
    images: [
      "/produtos/wc-16097-9a4608.jpg",
      "/produtos/wc-16097-8f3087.jpg"
    ],
    sku: "MCS-16097",
    weight: 4,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-16059",
    name: "Mesa Controladora | 4D Display LCD",
    category: "mesa-controladora",
    categoryLabel: "Mesas Controladoras",
    description: "Place of Origin: Guangdong, China Brand Name: Macsym Model Number: MTE-CPTZ-2000 Protocol: pel-d/p Joystick Function: 4D Connection:Wiring Display:LCD Sound:ON/OFF Power Supply: DC12V 1A",
    longDescription: "Place of Origin: Guangdong, China Brand Name: Macsym Model Number: MTE-CPTZ-2000 Protocol: pel-d/p Joystick Function: 4D Connection:Wiring Display:LCD Sound:ON/OFF Power Supply: DC12V 1A",
    price: 859,
    oldPrice: 1151,
    image: "/produtos/wc-16059-ab006e.jpg",
    images: [
      "/produtos/wc-16059-6f4614.jpg"
    ],
    sku: "MCS-16059",
    weight: 1,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-16058",
    name: "Mesa Controladora | 2D Mini Smart",
    category: "mesa-controladora",
    categoryLabel: "Mesas Controladoras",
    description: "Place of Origin: Guangdong, China Brand Name: Macsym Model Number: CPTZ-1000 Product Name: RMD2 MINI PTZ Keyboard Controller Protocol:Pelco-d, Pelco-d Application: Ptz Camera Control Material: Metal Power Supply: DC 12V",
    longDescription: "Place of Origin: Guangdong, China Brand Name: Macsym Model Number: CPTZ-1000 Product Name: RMD2 MINI PTZ Keyboard Controller Protocol:Pelco-d, Pelco-d Application: Ptz Camera Control Material: Metal Power Supply: DC 12V±10% Power consumption: 5W max Display: LCD",
    price: 439,
    oldPrice: 583,
    image: "/produtos/wc-16058-e21152.png",
    images: [
      "/produtos/wc-16058-4d9ddb.jpg"
    ],
    sku: "MCS-16058",
    weight: 1,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-16057",
    name: "Mesa Controladora | Joystick-4D",
    category: "mesa-controladora",
    subcategory: "ip",
    categoryLabel: "Controladoras IP",
    description: "Mesa controladora IP Joystick 4d Brand Name: Macsym Model Number: YRB-11DA Product Name: PTZ Video Conference Camera Controller Application: CCTV Surveillance Security System Material: Aluminum Alloy Color: Gray Certifi",
    longDescription: "Brand Name: Macsym Model Number: YRB-11DA Product Name: PTZ Video Conference Camera Controller Application: CCTV Surveillance Security System Material: Aluminum Alloy Color: Gray Certificate:CE ROHS FCC Protocol: Full VISCA, PECLO D/P Input voltage: DC12V-2A Interfaces: LAN, RS422, RS485, RS232",
    price: 2579,
    oldPrice: 3466,
    image: "/produtos/wc-16057-e41e2f.jpg",
    images: [
      "/produtos/wc-16057-76d88a.jpg"
    ],
    sku: "MCS-16057",
    weight: 4,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-16039",
    name: "Mesa Controladora IP – LCD 7 polegadas Colorido",
    category: "mesa-controladora",
    subcategory: "ip",
    categoryLabel: "Controladoras IP",
    description: "Mesa controladora IP Com display Colorido 7 Polegadas Marca: Macsym Número do modelo = V2-I Protocolo = pel-p/d, VISCA Decodificação de vídeo = H.264/H.265 Controlar endereço IP = 2048 câmeras com exibição de imagem",
    longDescription: "Marca: Macsym Número do modelo = V2-I Protocolo = pel-p/d, VISCA Decodificação de vídeo = H.264/H.265 Controlar endereço IP = 2048 câmeras com exibição de imagem Ethernet = Uma porta Ethernet, IEEE 802.11b/g/n Função Joystick = 4D Conexão = Cablagem Exposição = LCD colorido Fonte de alimentação = DC12V 2A Temperatura de Trabalho = 0°C-55°C Tamanho do pacote 49*26.5*17cm",
    price: 4159,
    oldPrice: 5589,
    image: "/produtos/wc-16039-615923.jpg",
    images: [
      "/produtos/wc-16039-dccb1f.jpg",
      "/produtos/wc-16039-adf155.jpg",
      "/produtos/wc-16039-c29298.jpg"
    ],
    sku: "MCS-16039",
    weight: 4,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-16038",
    name: "Câmera PTZ com Zoom 20X | USB",
    category: "cameras-ptz",
    subcategory: "zoom-optico-20x",
    categoryLabel: "Zoom Óptico 20x",
    description: "A câmera PTZ USB3.0 da série AMC está equipada com um sensor de imagem CMOS profissional de alta qualidade de 2 milhões de pixels e uma plataforma de chip profissional SoC de baixo consumo de alto desempenho para produz",
    longDescription: "A câmera PTZ USB3.0 da série AMC está equipada com um sensor de imagem CMOS profissional de alta qualidade de 2 milhões de pixels e uma plataforma de chip profissional SoC de baixo consumo de alto desempenho para produzir de forma contínua e estável 1080P60 sem compressão de alta definição. 2.14MP CMOS sensor de imagem exibindo claramente todos os detalhes da imagem USB3.0 PTZ câmera adota 1/2.8 “polegadas 2.14MP sensor de imagem CMOS com resolução de até 1920 * 1080 a 60 quadros por segundo, exibindo claramente todos os detalhes da imagem, saída de vídeo suave sem demora. 1/2.8″ CMOS, 2.14MP; 20x/12x optical zoom, up to 1080P60 video output; HDMI, 3G-SDI, Ethernet and USB 3.0 outputs; Support standard UVC/UAC protocol; Support YUY2 uncompressed video formats; RS232 In & RS232 Out, support daisy chain; H.265/H.264 video compression, up to 1080P60 video output; Dual stream; NDI (optional)",
    price: 2799,
    oldPrice: 3855,
    image: "/produtos/wc-16038-1a62e8.png",
    images: [
      "/produtos/wc-16038-a0a8e2.jpg",
      "/produtos/wc-16038-847ed4.png"
    ],
    sku: "MCS-16038",
    weight: 2,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-16037",
    name: "Câmera PTZ com Zoom 20X",
    category: "cameras-ptz",
    subcategory: "zoom-optico-20x",
    categoryLabel: "Zoom Óptico 20x",
    description: "A câmera PTZ USB3.0 da série AMC está equipada com um sensor de imagem CMOS profissional de alta qualidade de 2 milhões de pixels e uma plataforma de chip profissional SoC de baixo consumo de alto desempenho para produz",
    longDescription: "Professional High Quality A câmera PTZ USB3.0 da série AMC está equipada com um sensor de imagem CMOS profissional de alta qualidade de 2 milhões de pixels e uma plataforma de chip profissional SoC de baixo consumo de alto desempenho para produzir de forma contínua e estável 1080P60 sem compressão de alta definição. 2.14MP CMOS sensor de imagem exibindo claramente todos os detalhes da imagem USB3.0 PTZ câmera adota 1/2.8 \"polegadas 2.14MP sensor de imagem CMOS com resolução de até 1920 * 1080 a 60 quadros por segundo, exibindo claramente todos os detalhes da imagem, saída de vídeo suave sem demora. 1/2.8″ CMOS, 2.14MP; 20x/12x optical zoom, up to 1080P60 video output; HDMI, 3G-SDI, Ethernet and USB 3.0 outputs; Support standard UVC/UAC protocol; Support YUY2 uncompressed video formats; RS232 In & RS232 Out, support daisy chain; H.265/H.264 video compression, up to 1080P60 video output; Dual stream; NDI (optional)",
    price: 3624.29,
    image: "/produtos/wc-16037-a51f94.png",
    images: [
      "/produtos/wc-16038-847ed4.png",
      "/produtos/wc-16038-a0a8e2.jpg"
    ],
    sku: "MCS-16037",
    weight: 2,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15991",
    name: "Câmera PTZ MTE Zoom 12x USB – Webcam para Videoconferência",
    category: "cameras-ptz",
    subcategory: "zoom-optico-12x-cameras",
    categoryLabel: "Zoom Óptico 12x",
    description: "Webcam De Videoconferência USB Com Zoom De 12X Saída RJ45, USB, HDMI e SDI e microfone em zoom óptico de 12X + zoom digital de 12X Tipo de 1/2.9\" Exmor CMOS 2.38 mega pixel HD1080P FOV 72.5° (1980×1080) Pan: 0-350 ° Inc",
    longDescription: "Webcam de videoconferência USB com zoom de 12X para reunião Especificação principal: Saída RJ45, USB, HDMI e SDI e entrada de microfone 12X zoom óptico + 12X zoom digital 1/2.9\" tipo Exmor CMOS 2.38 mega pixel 72.5° FOV HD1080P (1980×1080) Pan: 0-350° Inclinação: -90°~+90° RS-232, RS-485, controle remoto IR Número do Produto MTE-VHD12N Sensor de Imagem 1/2.9 polegadas HD CMOS Pixel efetivo 2.38 mega pixel(16:9) Resolução Horizontal 1080P 30/25, 1080I60/50, 720P60/50 Padrão de sinal NTSC/PAL Zoom Zoom óptico de 12x+Zoom digital de 12x Distância focal F = 3,85-46,2 milímetros Ângulo Horizontal 72.5° Ganhe controle Auto/manual Foco Auto/manual Razão SNR ≥50dB Velocidade do obturador 1/1 seg a 1/10000s (22 passos) Posição predefinida O controle remoto IR suporta 10 predefinições O Protocolo PELCO suporta 255 predefinições Faixa de movimento Pan/Tilt Panorâmica: 350°(padrão: 20°/s), Inclinação: 180°( padrão: 20°/s) Terminal de controle RS-232, RS-485 Protocolo de Controle VISCA, PELCO-D, PELCO-P (RS-232, RS-485) Saída de vídeo RJ45, USB, HDMI, SDI Redução de Ruído 2D/3D Temperatura de trabalho -10°C-~50°C Temperatura de armazenamento -20 °C ~ 60 °C Taxa de transmissão 9600/38400bps Decodificador Incorporado Conjunto de endereços 1~64 Instalação Suporte desktop, tripé, montagem na parede e montagem no teto Fonte de alimentação DC12V/ 2A Consumo de energia 12 W Peso líquido/peso bruto 1.7kg/3.5kg Dimensão (LXWXH) 260*175*180 milímetro /296*225*218mm (antes / depois da embalagem)",
    price: 3679,
    oldPrice: 4355,
    image: "/produtos/wc-15991-cb29d2.webp",
    images: [
      "/produtos/wc-15991-34e689.webp",
      "/produtos/wc-15991-0f3a0a.webp",
      "/produtos/wc-15991-703ece.jpg",
      "/produtos/wc-15991-dee5ed.jpg",
      "/produtos/wc-15991-0e9526.jpg"
    ],
    sku: "MCS-15991",
    weight: 2,
    weightLabel: "35 × 25 × 25 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15926",
    name: "MTE-NA200",
    category: "microfones",
    categoryLabel: "Microfones",
    description: "MTE-NA200 Com Full Duplex Para Sistema De Conferência Raio de captação: 4m 360 graus Captação de voz Microfone omnidirecional de alta sensibilidade Interface de áudio de 3,5 mm Cancelamento de eco adaptativo e rastreame",
    longDescription: "Parâmetros técnicos de voz Cancelamento de eco acústico (AEC): &gt;65dB Cancelamento do comprimento do eco: ≥500ms Compressão de ruído bidirecional (NC): &lt;25dB Tecnologia de localização automática de direção do microfone inteligente (EMI) Controle de ganho automático (AGC) Parâmetros de áudio Resposta de frequência do microfone: 100Hz-22KHz Resposta de frequência do alto-falante: 100Hz-22KHz Volume do alto-falante: 95dB no máximo Microfone de som – captador de diâmetro: 4 m, 360 graus gama completa Interface USB, interface RJ45 Fonte de alimentação Fonte de alimentação USB (5V/500m) Ambiente de computador Windows,Mac OSX,Android Ambiente operacional Ambiente operacional: 0 ~ 40 graus C, umidade de trabalho: 20 ~ 85% (sem geada) Tamanho 141 x 141x42mm/192x192x90mm (antes/depois da embalagem) Peso 260g/500g (peso líquido/bruto)",
    price: 1572,
    image: "/produtos/wc-15926-18aca7.png",
    images: [
      "/produtos/wc-15926-238a77.webp"
    ],
    sku: "MCS-15926",
    weight: 1,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15925",
    name: "Câmera PTZ Wireless Zoom 10x USB / 5.8G – Saída de Vídeo",
    category: "cameras-ptz",
    subcategory: "zoom-optico-10x",
    categoryLabel: "Zoom Óptico 10x",
    description: "A câmera MTE-NV10W Pan/Tilt/Zoom (PTZ) é obtida com uma saída de vídeo USB 2.0 / 5.8G Wifi com 2,38 mega pixels e resolução de saída Full HD 1080p e imagens de alta dinâmica a 30fps. Com ângulo de disparo, alta velocida",
    longDescription: "A câmera MTE-NV10W Pan/Tilt/Zoom (PTZ) é obtida com uma saída de vídeo USB 2.0 / 5.8G Wifi com 2,38 mega pixels e resolução de saída Full HD 1080p e imagens de alta dinâmica a 30fps. Com ângulo de disparo, alta velocidade, posicionamento silencioso e preciso com operação PTZ suave. 255 predefinições, controle remoto Saída de vídeo USB / 5.8G Wifi Banda de frequência: 5G-distância: 10 metros Suporte RTST e suporte de rede completa VISCA comandos de protocolo de controle. Design fino e inteligente Plug & Play USB/5.8G Conectividade Wi-Fi Qualidade de imagem HD1080P cristalina Movimento PTZ preciso, suave e silencioso Predefinições: configuração remota IR 10via (255 via RS232) 54,7° Amplo campo de visão sem distorção de vídeo 1/2.8 polegadas de alta qualidade, 2.38MP (16:9) sensor CMOS Qualidade superior com material de lente de vidro completo Suporta montagem no teto, montagem na parede e montagem em tripé (pode ser montado de cabeça para baixo) 2D e 3D NR para a melhor qualidade de vídeo em diferentes condições de iluminação Suporta protocolos Visca, Pelco-P e Pelco-D, controle de câmera RS232/RS485 Compatível com a maioria dos principais softwares e plataformas de videoconferência.",
    price: 1879,
    oldPrice: 2173,
    image: "/produtos/wc-15925-880b69.png",
    images: [
      "/produtos/wc-15925-33baa7.jpg"
    ],
    sku: "MCS-15925",
    weight: 2,
    weightLabel: "35 × 25 × 25 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15900",
    name: "Câmera PTZ Wireless Zoom 3x USB / 5.8G – Saída de Vídeo",
    category: "cameras-ptz",
    subcategory: "zoom-optico-3x",
    categoryLabel: "Zoom Óptico 3x",
    description: "CÂMERA PTZ: CÂMERA, REMOTO, MANUAL, CABO USB (3M), SUPORTE, ADAPTADOR DE ENERGIA, Dongle Wi-Fi. Especificação: UVC 1,1 Zoom de 128 graus grande angular para reuniões de negócios Transmissão ao vivo da educação da igreja",
    longDescription: "CÂMERA PTZ: CÂMERA, REMOTO, MANUAL, CABO USB (3M), SUPORTE, ADAPTADOR DE ENERGIA, Dongle Wi-Fi. Especificação: UVC 1,1 Zoom de 128 graus grande angular para reuniões de negócios Transmissão ao vivo da educação da igreja Zoom óptico de 3x Design elegante e inteligente Plug & Play Conectividade USB & 5.8G Wifi Banda de frequência: 5G-distância: 10 metros Qualidade de imagem HD1080P cristalina Movimento PTZ preciso, suave e silencioso Predefinições: 10 via configuração remota IR (255 via RS232) Qualidade superior com material de lente de vidro completo Campo de visão de 103,69° de largura sem distorção de vídeo 1/2.8 polegadas de alta qualidade, 2.38 MEGA PIXEL (16:9) sensor CMOS Suporte de montagem no teto, montagem na parede e montagem em tripé (montável reverso) 2D e 3D NR para melhor qualidade de vídeo em diferentes condições de iluminação Suporte Visca, Pelco-P, e protocolo Pelco-D, RS232/RS485 controle de câmera Compatível com a maioria dos principais softwares e plataformas de videoconferência.",
    price: 1982,
    image: "/produtos/wc-15925-880b69.png",
    images: [
      "/produtos/wc-15925-33baa7.jpg"
    ],
    sku: "MCS-15900",
    weight: 2,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15899",
    name: "Câmera PTZ – Resolução Ultra HD 4K para Conferências",
    category: "cameras-ptz",
    subcategory: "resolucao-4k",
    categoryLabel: "Resolução 4K",
    description: "Modelo: MTE-VHD4K controle automático da câmera 1/2.5 \"CMOS Sensor (SONY IMX274) 4k (3840X2160) Ultra HD resolução de vídeo Predefinição: 9 via configuração remota IR (255 via RS232) Equipado com controle remoto IR, fác",
    longDescription: "TEVO-VHD4K vem com um sistema de imagem Ultra-HD, Rally oferece vídeo brilhantemente nítido, cores excepcionais e precisão óptica excepcional em resoluções de até 4K. Esta câmera adota 1/2.5 \"CMOS (SONY IMX274), 8.29 pixel mage eficaz, 138 ° campo de visão super-amplo, para enfatizar rostos e renderizar tons de pele de aparência natural, mesmo em condições de luz fraca ou retroiluminada. VHD4K se encontra com o aplicativo para gravação e streaming Ultra HD, videoconferência e transmissão que suporta câmeras USB.",
    price: 1729,
    oldPrice: 1982,
    image: "/produtos/wc-15899-79d9bb.jpg",
    images: [
      "/produtos/wc-15899-999018.webp"
    ],
    sku: "MCS-15899",
    weight: 2,
    weightLabel: "35 × 25 × 25 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15852",
    name: "Cabo P2",
    category: "acessorios",
    categoryLabel: "Acessórios",
    description: "Cabo P2",
    longDescription: "Cabo P2",
    price: 2.35,
    image: "",
    images: [],
    sku: "CAB-AUD-P2",
    weight: 1,
    weightLabel: "30 × 30 × 30 cm",
    active: false,
    highlight: false
  },
  {
    id: "wc-15851",
    name: "Mini Câmera de Segurança IP Wi-Fi HD Tunya – Sensor de Movimento Automático",
    category: "cameras-ptz",
    categoryLabel: "Câmeras PTZ",
    description: "Tipo de câmera: IP Com visão noturna: Sim Com microfone: Sim",
    longDescription: "Aviso sobre Mini Câmera Robótica Wi-Fi 2.4GHz Tenha segurança e tecnologia com esta câmera inteligente! Equipada com detecção de movimento, giro horizontal de 345° e vertical de 85°, áudio bidirecional (alto-falante e microfone embutidos) e operação prática pelo aplicativo Tuya, disponível para iOS e Android. Características principais: Resolução Full HD 1080p: Imagens nítidas e de alta qualidade. Giro inteligente: A câmera detecta e segue o movimento automaticamente, eliminando a necessidade de ajustes manuais no app. Armazenamento expansível: Compatível com cartões Micro SD de até 128GB (não incluso). Áudio bidirecional: Permite ouvir e falar com pessoas no ambiente monitorado. Visão noturna infravermelho: Alcance de até 10 metros para monitoramento mesmo no escuro. Gravação em nuvem: Disponível como serviço adicional pelo app (não gratuito). Alarme sonoro: Emite alerta ao identificar movimento. Benefícios: Com o sensor de movimento, a câmera registra automaticamente qualquer atividade na área monitorada. Insira um cartão SD (opcional) para armazenar as gravações ou use o controle remoto pelo app Tuya para acessar a câmera a qualquer momento. Conteúdo da embalagem: 1 Mini Câmera IP Wi-Fi 1 Fonte de alimentação 1 Manual de instruções 1 Suporte para parede/teto com buchas e parafusos Garantia: 12 meses pelo vendedor. Essa câmera é a escolha ideal para quem busca monitoramento inteligente, acessível e eficiente para casa ou escritório!",
    price: 273,
    oldPrice: 341.25,
    image: "/produtos/wc-15851-3fba6a.webp",
    images: [
      "/produtos/wc-15851-e611c2.webp",
      "/produtos/wc-15851-11df1b.webp",
      "/produtos/wc-15851-e7fc2b.webp",
      "/produtos/wc-15851-f21496.webp",
      "/produtos/wc-15851-12ebdf.webp",
      "/produtos/wc-15851-5f16ce.webp",
      "/produtos/wc-15851-cce3ca.webp"
    ],
    sku: "12",
    weight: 1,
    weightLabel: "25 × 16 × 15 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15822",
    name: "Webcam Full Hd 2k Detecção De Face Com Microfone Câmera",
    category: "webcam",
    subcategory: "al-face-tracking",
    categoryLabel: "Rastreamento de Face",
    description: "Resolução máxima de vídeo: 2560×1440 Tipo de resolução máxima de vídeo: 2K Resolução de imagem da câmera: 4 Mpx Com microfone: Sim Interfaces: USB Funções: Detecção de face, Auto foco, Auto brilho É adequada para videoc",
    longDescription: "A Macsym Áudio e Vídeo apresenta a câmera profissional modelo MTE-CM1000 com resolução 2K (2560×1440 pixels) superior ao Full HD 1080P, conexão USB 2.0, com microfone embutido e Detecção Facial por Inteligência Artificial (AI) ideal para reuniões de negócios realizadas por meio de videoconferência. BENEFÍCIOS: * Design \"Tudo em Um\" Portátil (Câmera, Microfone e Alto-Flante) * Resolução de Imagem de 2K (2560 x 1440 pixels – 4 Mpix) e captura em 60 Frames Por Segundo * Transmite vídeo em 2K, 1080P e 720P * Tecnologia de detecção de face por Inteligência Artificial (IA) * Sensor 1/3 CMOS (GC4663), 2.88mm grande angular * Raio de captura de áudio de 5 metros em 360 graus com redução de ruído e cancelamento de eco * Conectividade USB Plug & Play * Angulo de visão horizontal de 89 graus e de visão vertical de 30 graus * 4 Microfones digitais de silício e 1 Alto-Falante de 50x50mm embutidos INDICADA PARA QUEM PROCURA REALIZAR REUNIÕES COM EXCENTE QUALIDADE DE IMAGEM. Como a MTE-CM1000 é reconhecida automaticamente pelo sistema operacional ela é compatível com os principais softwares e plataformas de videoconferência: * Zoom * Polycom * Microsoft Lync * CISCO WebEx * Skype para negócios Compatível o OBS Studio (Open Broadcaster Software) para livestreaming e gravação de vídeo. Garantia do vendedor: 12 meses",
    price: 989,
    oldPrice: 2373,
    image: "/produtos/wc-15822-598114.webp",
    images: [
      "/produtos/wc-15822-7b8f15.webp",
      "/produtos/wc-15822-63d341.webp",
      "/produtos/wc-15822-e310d4.webp",
      "/produtos/wc-15822-ce310e.webp",
      "/produtos/wc-15822-aaed37.webp",
      "/produtos/wc-15822-c1d2fc.webp"
    ],
    sku: "MCS-15822",
    weight: 3,
    weightLabel: "35 × 33 × 26 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15821",
    name: "Câmera-Tracking-ISMART",
    category: "cameras-ptz",
    subcategory: "zoom-optico-12x-cameras",
    categoryLabel: "Zoom Óptico 12x",
    description: "Câmera de rastreamento de palestrante UHD A lente de foco automático rápido da câmera da série LTC6 combina com algoritmo de inteligência de profundidade para obter posicionamento e rastreamento eficientes de professore",
    longDescription: "Camera Image Sensor: 1/2.8″CMOS, 8.46MP Focal Lens: 3.4mm~40.3mm Iris: F1.8~F3.6 FOV Horizontal: 81°~7.6° Zoom: Optical: 12X, Digital: 12X Focus: Auto, Manual White Balance: Auto/Manual Exposure: Auto/Manual SN Ratio: ≥55dB DNR: 2D/3D BLC:Support PTZ Pan Angle: -130° ~ +130°; 0.2° ~ 80°/s Tilt Angle: -30° ~ +90°; 0.2° ~ 60°/s Image Flip: Support Preset Number: 64 Interface HDMI: 1×HDMI 2.0;Support 4KP60/P50/P30/P25, 1080P60/P50/P30/P25, 1080I60/I50,720P60/P50 Network: RJ45 (10M/100M/1000M), POE(Optional)；1.Support 4KP60/P50/P30/P25, 1080P30/P25, 720P30/P25, 360P30/P25；2.Image compression H.264/H.265 USB: 1×USB2.0;1.Support UVC 1.1；2.Image compression H.264/MJPEG; support 4KP30/P25, 1080P30/P25,720P30/P25, 360P30/P25 3G-SDI(Optional): 1×3G-SDI; support 1080P60/P50/P30/P25, 1080I60/I50,720P60/P50 HD-BaseT(Optional): 1×HD- BaseT; support 4KP30/P25, 1080P60/P50/P30/P25, 1080I60/I50,720P60/P50 Audio Input: 1×Line In, 3.5mm Control Interface: 1×RS-232 In, 1×RS-232 Out DIP Switch: Rotating DIP switch to set video format Power: DC12V General Protocols: VISCA Power Consumption: &lt;18W Operating Environment: Temperature: 0°C ~ +40°C, Relative Humidity: 10%RH ~ 90 %RH Storage Environment: Temperature: -20℃ ~ +60°C, Relative Humidity: 10%RH ~ 95 %RH Dimensions (L×W×H): 245mm×145mm×165mm Weight: 1.8KG",
    price: 9199,
    oldPrice: 12974.85,
    image: "/produtos/wc-17020-9d800f.png",
    images: [
      "/produtos/wc-15821-566236.png",
      "/produtos/wc-15821-8f2ff1.png",
      "/produtos/wc-15821-13cd6f.png",
      "/produtos/wc-15821-9bbbef.png"
    ],
    sku: "MCS-15821",
    weight: 4,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15820",
    name: "Câmera PTZ – 1080P60, Zoom 12x, Auto-Enquadramento, Rastreamento de Voz",
    category: "cameras-ptz",
    subcategory: "zoom-optico-12x-cameras",
    categoryLabel: "Zoom Óptico 12x",
    description: "Até 1080P60 Atenda a várias necessidades de videoconferência O G200TH adota algoritmo inteligente avançado, enquadramento automático, rastreamento de fala e saída de imagens 1080P para atender a várias necessidades de v",
    longDescription: "Camera Image Sensor: 1/2.8” CMOS, 2.14MP Focal Lens: 3.9mm~46.8mm Iris: F1.6~F2.8 FOV Horizontal: 72.5°~6.3° Zoom: Optical: 12X, Digital: 12X Focus: Auto, Manual, PTZ Push, One Push Shutter Speed: 1/25 ~ 1/10,000s AGC: Auto/Manual White Balance: Auto, Indoor, Outdoor, One Push, Manual, Auto Tracking Exposure: Auto, Manual, Shutter Priority, Iris Priority SN Ratio: ≥50dB BLC: Support Full View Camera Image Sensor: 1/2.5” 4K CMOS Sensor, 8.57MP Lens: 2.8mm focal length , 4X digital zoom FOV: 98° DNR: 2D/3D Video Adjustment: Support EPTZ PTZ Pan: -90° ~ +90°, 0.1° ~ 100°/ s Tilt: -30° ~ +90°, 0.1° ~ 80°/s Preset Number: 64 Network Max Image Size: 1080P60 Video Compression: H.264/H.265/MJPEG Audio Compression: AAC Protocols: HTTP/RTSP/RTMP/RTP/TCP/UDP/ONVIF Multi-Stream: Support 1×close-up view, 1×full view, 1×switched between view Interface SDI: 1×3G-SDI, Video Format: 1080P60/50/30/25, 720P60/50 HDMI: 1×HDMI, Video Format: Same as SDI USB: 1×USB2.0, support UVC/UAC Audio Input: 2×3.5mm Line In , including 1 channel AEC reference audio input Network Interface: 10M/100M RJ45 General Control Protocol: VISCA Address: 1 – 6 Power: DC12V Power Consumption: &lt;20W Operating Environment: Temperature: 0°C ~ +40°C, Relative Humidity: 10%RH ~ 90 %RH Storage Environment: Temperature: -20℃ ~ +60°C, Relative Humidity: 10%RH ~ 95 %RH Dimensions (L×W×H): 245mm×145mm×165mm Weight: &lt;2kg",
    price: 8549,
    oldPrice: 14959.35,
    image: "/produtos/wc-15820-7390cd.png",
    images: [
      "/produtos/wc-15820-f1a8ac.png",
      "/produtos/wc-15820-1a1681.png",
      "/produtos/wc-15820-08b38f.png",
      "/produtos/wc-15820-52551f.png",
      "/produtos/wc-15820-596b66.png",
      "/produtos/wc-15820-70f7c4.png",
      "/produtos/wc-15820-8606eb.png"
    ],
    sku: "MCS-15820",
    weight: 4,
    weightLabel: "40 × 25 × 25 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15794",
    name: "Câmera PTZ – Rastreamento de Falante Automático, Full HD 1080P60, Zoom 12X, Duas Lentes",
    category: "cameras-ptz",
    subcategory: "zoom-optico-12x-cameras",
    categoryLabel: "Zoom Óptico 12x",
    description: "Câmera de rastreamento de alto-falante O G200T adota algoritmo inteligente avançado, enquadramento automático, rastreamento de fala e saída de imagens 1080P para atender a várias necessidades de videoconferência. Dual L",
    longDescription: "Câmera Image Sensor: 1/2.8” CMOS, 2.14MP Focal Lens: 3.9mm~46.8mm Iris: F1.6~F2.8 FOV Horizontal: 72.5°~6.3° Zoom: Optical: 12X, Digital: 12X Focus Auto, Manual, PTZ Trigger, One Push Shutter Speed 1/1 ~ 1/10,000s AGC Auto/Manual White Balance Auto, Indoor, Outdoor, One Push, Manual, Auto Tracking Exposure Auto, Manual, Shutter Priority, Iris Priority SN Ratio ≥50dB BLC Support Signal Format (SDI) 1080P60/50/30/25, 720P60/50 Full View Camera Image Sensor: 1/2.8” CMOS, 2.14MP Lens: Manual focus Focal: 2.4mm FOV: Horizontal 88°, Vertical 52° PTZ Pan: -90° ~ +90°, 0.2° ~ 100°/s Tilt: -30° ~ +90°, 0.2° ~ 100°/s Preset Number: 64 Control Interface: RS-232",
    price: 12999,
    oldPrice: 22896.3,
    image: "/produtos/wc-15794-600afa.png",
    images: [
      "/produtos/wc-15794-620c34.png",
      "/produtos/wc-15794-68a441.png",
      "/produtos/wc-15794-537252.png",
      "/produtos/wc-15794-29a2c4.png"
    ],
    sku: "MCS-15794",
    weight: 4,
    weightLabel: "35 × 33 × 26 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15793",
    name: "Câmera IP PTZ – Rastreamento de Face, Zoom 20X, Full HD 1080P, iSmart",
    category: "cameras-ptz",
    subcategory: "zoom-optico-20x",
    categoryLabel: "Zoom Óptico 20x",
    description: "Câmera de rastreamento HD 1080P da série LTC adota algoritmo avançado de rastreamento de face, para rastrear com precisão e continuamente, produzir imagens de vídeo nítidas e atender às necessidades de várias cenas.",
    longDescription: "Camera Image Sensor: 1/2.8” CMOS, 2.14MP Focal Lens: f=4.7mm~94.0mm Iris: F1.6~F3.5 FOV Horizontal: 59.5°~2.9° Zoom: Optical: 20X, Digital: 8X Focus: Auto, Manual, PTZ Trigger, One Push Trigger Shutter Speed: 1/1 ~ 1/10,000s AGC: Auto/Manual White Balance: Auto, Outdoor, One Push, Manual, Auto Tracking Exposure: Auto, Manual, Shutter Priority, Iris Priority SN Ratio: ≥50dB Full View Camera Image Sensor: 1/2.8” CMOS, 2.14MP White Balance: Auto Exposure: Auto Focus: Manual Focal Distance: 2.4mm FOV: Horizontal:88°, Vertical:54° PTZ Pan: -170° ~ +170°, 0.1° ~ 120°/s Tilt: -30° ~ +90°, 0.1° ~ 90°/s Preset Number: 64 Control Interface: RS-232 In, RS-232 Out Network Interface: 10M/100M RJ45, POE(Optional) Control Protocol: VISCA HD Video Video Output: 3G-SDI, HDMI, USB3.0 Video Format: 1080P60/P50/P30/P25/P59.94/P29.97, 720P60/P50/P59.94 Network Max Image Size: 1080P60 Video Compression: H.264/H.265 Audio Compresssion: AAC Network Protocol: ONVIF, RTSP, RTMP, NDI, SRT Dual Stream: Yes General Power Supply: DC12V Power Consumption: &lt;15W Operating Environment: Temperature: 0°C ~ +40°C, Relative Humidity: 10%RH ~ 90 %RH Storage Environment: Temperature: -20℃ ~ +60°C, Relative Humidity: 10%RH ~ 95 %RH Dimensions (L×W×H): 243mm×157mm×163mm Weight: 1.2KG",
    price: 9922.5,
    image: "/produtos/wc-15793-c9b7e4.png",
    images: [
      "/produtos/wc-15793-c9b7e4.png",
      "/produtos/wc-15793-33e42a.png",
      "/produtos/wc-15793-d07752.png",
      "/produtos/wc-15793-9ef0f2.png",
      "/produtos/wc-15793-d133bf.png"
    ],
    sku: "MCS-15793",
    weight: 3,
    weightLabel: "35 × 33 × 26 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15792",
    name: "Câmera IP PTZ 4K – Zoom Óptico 12X, Lente Grande Angular 82° iSmart",
    category: "cameras-ptz",
    subcategory: "zoom-optico-12x-cameras",
    categoryLabel: "Zoom Óptico 12x",
    description: "Alta definição e bom desempenho em tempo real Lente grande angular 4K, zoom óptico de 12X, campo de visão máximo de 82°; Fluxo duplo, suporta qualidade de imagem em vários níveis HD PTZ Camera, 12x Optical Zoom, Etherne",
    longDescription: "Camera Image Sensor: 1/1.8” CMOS, 8.41MP Focal Lens: 4.2mm~50.4mm Iris: F1.8~F2.8 FOV Horizontal: 82.6°~8° Focus: Auto, Manual, PTZ Trigger, One Push Shutter Speed: 1/25 ~ 1/10,000s AGC: Auto/Manual White Balance: Auto, Indoor, Outdoor, One Push, Auto Tracking, Sodium, Fluorescent Exposure: Auto, Manual, Shutter Priority, Iris Priority BLC: Support SN Ratio: ≥50dB DNR: 2D/3D WDR: Support PTZ Pan: -170°~+170°, 0.1°~120°/ S Tilt: -30°~+90°, 0.1°~80°/ S Preset Number: 256 OSD: Yes Video Format Video Output: 4KP30/25, 1080P60/50/30/25, 1080I60/50, 720P60/50 Network Max Image Size: 4KP30 Video Compression: H.265/H.264 Audio Compression: AAC Protocols: HTTP/RTMP/RTSP/TCP/UDP/ONVIF Dual Stream: Yes Interface Video Output: HDMI, 3G-SDI, HDBaseT(optional) Audio Input: 1×Line In Network Interface: 10M/100/1000M, NDI, POE(optional) Control Interface: RS-232 In , RS-232 Out , RS-485 General Protocols: VISCA (support daisy chain), PELCO-P, PELCO-D Power: DC12V Power Consumption: &lt;20W Operating Environment: Temperature: 0°C ~ +40°C, Relative Humidity: 10%RH ~ 90 %RH Storage Environment: Temperature: -20℃ ~ +60°C, Relative Humidity: 10%RH ~ 95 %RH Dimensions (L×W×H): 251mm×145mm×194mm Weight: 2.2KG",
    price: 5939,
    oldPrice: 10380.3,
    image: "/produtos/wc-15792-51c744.png",
    images: [
      "/produtos/wc-15792-fd17a9.png",
      "/produtos/wc-15792-ebb147.png",
      "/produtos/wc-15792-a68752.png"
    ],
    sku: "MCS-15792",
    weight: 4,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15769",
    name: "Câmera PTZ – 12X Zoom Óptico, Full HD 1080P60, iSmart",
    category: "cameras-ptz",
    subcategory: "zoom-optico-12x-cameras",
    categoryLabel: "Zoom Óptico 12x",
    description: "Câmera HD PTZ A AMC-E serious é uma câmera de conferência HD que suporta saída de imagem de até 1080P60. Equipado com função de exposição inteligente, sob luz complexa, a câmera produz imagens coloridas verdadeiras. HD",
    longDescription: "Camera Image Sensor: 1/2.8” CMOS, 2.14MP Focal Length: 3.9~46.8mm FOV:72.5°~6.3° Optical Zoom: 12X Exposure: Auto, Manual, Shutter Priority, Iris Priority White Balance: Auto, Indoor, Outdoor, One Push, Manual, Auto Tracking, Manual WDR: Support BLC: Support DNR: 2D/3D SN Ratio: ≥50dB PTZ Pan: -170° ~ +170°, 0.1° ~ 120°/S Tilt: -30° ~ +90°, 0.1° ~ 80°/S Preset Number: 256 OSD: Yes Image Flip: Yes Network Max Image Size: 1080P60 Image Compression: H.264/H.265 Audio Compression: AAC Protocols: ONVIF, RTSP, RTMP, TCP, UDP Dual Stream: Support Interface Video Output: 1×HDMI, 1×3G- Audio: 1×Line In Network Interface: 10M/100/1000M RJ45, POE(optional) Control Interface: 1×RS-232 In, 1×RS-232 Out General Control Protocol: VISCA（support daisy chain）/ PELCO-P/ PELCO-D Address: 1~7 Power: DC12V Power Consumption: &lt;18W Operating Environment: Temperature: 0°C ~ +40°C, Relative Humidity: 10%RH ~ 90 %RH Storage Environment: Temperature: -20℃ ~ +60°C, Relative Humidity: 10%RH ~ 95 %RH Dimensions (L×W×H): 245mm×145mm×163mm Weight: 1.4kg",
    price: 1949,
    oldPrice: 2479,
    image: "/produtos/wc-15769-d09ecb.png",
    images: [
      "/produtos/wc-15769-263074.png",
      "/produtos/wc-15769-018b43.png",
      "/produtos/wc-15769-53ebcb.png",
      "/produtos/wc-15769-3dc8e6.png",
      "/produtos/wc-15769-431627.png",
      "/produtos/wc-15769-4c0da2.png",
      "/produtos/wc-15769-d9e40c.png"
    ],
    sku: "MCS-15769",
    weight: 4,
    weightLabel: "35 × 33 × 26 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15768",
    name: "Câmera PTZ 20X Zoom Óptico, Full HD 1080P60, iSmart",
    category: "cameras-ptz",
    subcategory: "zoom-optico-20x",
    categoryLabel: "Zoom Óptico 20x",
    description: "Câmera HD PTZ A AMC-E serious é uma câmera de conferência HD que suporta saída de imagem de até 1080P60. Equipado com função de exposição inteligente, sob luz complexa, a câmera produz imagens coloridas verdadeiras. HD",
    longDescription: "Camera Image Sensor: 1/2.8” CMOS, 2.14MP Focal Length: 4.7~94.0mm FOV? 59.5°°~2.9° Optical Zoom: 20X Focus: Auto, Manual, PTZ Trigger, One Push Trigger Exposure: Auto, Manual, Shutter Priority, Iris Priority White Balance: Auto, Indoor, Outdoor, One Push, Manual, Auto Tracking, Manual WDR: Support BLC: Support DNR: 2D/3D SN Ratio: ≥50dB PTZ Pan: -170° ~ +170°, 0.1° ~ 120°/S Tilt: -30° ~ +90°, 0.1° ~ 80°/S Preset Number: 256 OSD: Yes Image Flip: Yes Network Max Image Size: 1080P60 Image Compression: H.264/H.265 Audio Compression: AAC Protocols: ONVIF, RTSP, RTMP, TCP, UDP Dual Stream: Support Interface Video Output: 1×HDMI, 1×3G- Audio: 1×Line In Network Interface: 10M/100/1000M RJ45, POE(optional) Control Interface: 1×RS-232 In, 1×RS-232 Out General Control Protocol: VISCA（support daisy chain）/ PELCO-P/ PELCO-D Address: 1~7 Power: DC12V Power Consumption: &lt;18W Operating Environment: Temperature: 0°C ~ +40°C, Relative Humidity: 10%RH ~ 90 %RH Storage Environment:Temperature: -20℃ ~ +60°C, Relative Humidity: 10%RH ~ 95 %RH Dimensions (L×W×H):245mm×145mm×163mm Weight: 1.4kg",
    price: 1739,
    oldPrice: 2199,
    image: "/produtos/wc-15768-a438ab.png",
    images: [
      "/produtos/wc-15768-105561.png",
      "/produtos/wc-15768-2244d6.png",
      "/produtos/wc-15768-3eb31b.png",
      "/produtos/wc-15768-e793af.png"
    ],
    sku: "MCS-15768",
    weight: 4,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15767",
    name: "Câmera PTZ Profissional – 20X Zoom Óptico, Full HD 1080P60 iSmart",
    category: "cameras-ptz",
    subcategory: "zoom-optico-20x",
    categoryLabel: "Zoom Óptico 20x",
    description: "Alta definição e bom desempenho em tempo real A câmera PTZ de transmissão profissional da série AMC, adota lentes HD de alta qualidade e produz imagens HD 1080p. HD PTZ Camera, 20x Optical Zoom, Ethernet, SDI, HDMI, USB",
    longDescription: "Camera Image Sensor: 1/2.8” CMOS, 2.14MP Focal Lens: 4.7mm~94.0mm Iris: F1.6~F3.5 FOV Horizontal: 59.5°~2.9° Zoom: Optical: 20X, Digital: 12X Focus: Auto, Manual, PTZ Trigger, One Push Shutter Speed: 1/1 ~ 1/10,000s AGC: Auto/Manual White Balance: Auto, Indoor, Outdoor, One Push, Manual, Auto Tracking, Sodium, Fluorescent Exposure: Auto, Manual, Shutter Priority, Iris Priority, Smart WDR: Support BLC: Support DNR: 2D/3D SN Ratio: ≥50dB PTZ Pan: -170° ~ +170°, 0.1° ~ 120°/S Tilt: -30° ~ +90°, 0.1° ~ 80°/s Preset Number: 256 OSD: Yes Image Flip: Yes SDI Output Video Format: 1080I60/I50, 1080P60/P50/P30/P25, 720P60/P50 Network Max Image Size: 1080P60 Video Compression: H.265/H.264 Audio Compression: AAC Protocols: ONVIF/RTSP/RTMP/HTTP/TCP/UDP Dual Stream: Support Interface Video Output: 1×HDMI, 1×3G-SDI, 1×USB2.0, 1×Ethernet Audio: 1×Line In Network Interface: 10M/100/1000M RJ45, NDI, POE(optional) Control Interface: 1×RS-485, 1×RS-232 In , 1×RS-232 Out General Protocols: VISCA (support daisy chain), PELCO-P, PELCO-D Address: 0~63 Power: DC12V Power Consumption: &lt;20W Operating Environment: Temperature: 0°C ~ +40°C, Relative Humidity: 10%RH ~ 90 %RH Storage Environment: Temperature: -20℃ ~ +60°C, Relative Humidity: 10%RH ~ 95 %RH Dimensions (L×W×H): 243mm×145mm×163mm Weight: 1.2KG",
    price: 3680,
    oldPrice: 4679,
    image: "/produtos/wc-15767-e4c850.png",
    images: [
      "/produtos/wc-15767-7647e9.png",
      "/produtos/wc-15767-580bee.png",
      "/produtos/wc-15767-de7ea2.png",
      "/produtos/wc-15767-261b81.png"
    ],
    sku: "MCS-15767",
    weight: 4,
    weightLabel: "35 × 33 × 36 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15746",
    name: "Câmera PTZ Profissional – 12X Zoom Óptico, Full HD 1080P, iSmart",
    category: "cameras-ptz",
    subcategory: "zoom-optico-12x-cameras",
    categoryLabel: "Zoom Óptico 12x",
    description: "Câmera PTZ de interface completa A série AMC-E é uma câmera PTZ de interface completa, que usa lentes de alta definição e tecnologia de codificação avançada para produzir imagens de vídeo sem distorção de alta definição",
    longDescription: "optical zoom: 12X focus system: Automatic, manual, PTZ trigger, one-key trigger Minimum illumination: 0,5Lux Shutter speed: 1/1s~1/10,000s gain: automatic / manual white balance:Automatic, indoor, outdoor, one-button trigger, manual, automatic tracking, sodium lamp, fluorescent lamp exposure control: Auto, Manual, Shutter Priority, Aperture Priority, Smart SNR: ≥50dB digital noise reduction: 2D/3D BLC: support wide dynamic range: support PTZ function horizontal rotation: -170°~+170°;0.1°~120°/s vertical rotation: -30°~+90°;0.1°~80°/s Number of preset points: 256 menu: support Image flip function: support video output SDI output: 1080P60/P50/P30/P25, 1080I60/I50, 720P60/P50 resolution: Support up to 1080P60 video compression: H.265/H.264 audio compression: CSA Network protocol: HTTP, TCP, UDP, RTSP, RTMP, ONVIF dual stream: support interface video output: 1 channel 3G-SDI interface, 1 channel DVI-D interface audio port: 1 way LINHA IN, 1 way LINE OUT Network Interface: 10M/100M adaptive Ethernet interface, POE is optional USB interface: 1 way USB WIFI interface: 2.4G/5G WIFI (optional) local storage: TF card, up to 64G control interface: 1 way RS-232 IN, 1 way RS-232 OUT, 1 way RS-485 The infrared signal is transmitted through 1 channel infrared signal transparent transmission output interface general specification control protocol: VISCA and supports daisy chain / PELCO-P / PELCO-D address range: 0~63 power supply: DC12V power consumption: &lt;20W working environment: Working temperature: 0°C ~ + 40°C; Working humidity: 10%RH ~ 90%RH storage environment: Storage temperature: -20°C ~ +60°C; storage humidity: 10%RH ~ 95%RH Dimensions (length x width x height): 243mm×145mm×163mm body weight: 1,2kg",
    price: 3249,
    oldPrice: 3442,
    image: "/produtos/wc-15746-4f7558.webp",
    images: [
      "/produtos/wc-15746-9fcccf.png",
      "/produtos/wc-15746-30bddd.png",
      "/produtos/wc-15746-73a9b9.png",
      "/produtos/wc-15746-0e9052.png",
      "/produtos/wc-15746-e9b698.png",
      "/produtos/wc-15746-ff4173.png",
      "/produtos/wc-15746-969606.png"
    ],
    sku: "MCS-15746",
    weight: 4,
    weightLabel: "35 × 33 × 26 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15745",
    name: "Câmera PTZ Profissional – 20X Zoom Óptico, Full HD 1080P60, iSmart",
    category: "cameras-ptz",
    subcategory: "zoom-optico-20x",
    categoryLabel: "Zoom Óptico 20x",
    description: "Alta definição e bom desempenho em tempo real A câmera PTZ de transmissão profissional da série AMC, adota lentes HD de alta qualidade e produz imagens HD 1080p. HD PTZ, 20x Optical Zoom, Ethernet, SDI, HDMI, USB, Up to",
    longDescription: "AMC-NE220NV3 Camera Image Sensor: 1/2.8” CMOS, 2.14MP Focal Lens: 4.7mm~94.0mm Iris: F1.6~F3.5 FOV Horizontal: 59.5°~2.9° Zoom: Optical 20X, Digital: 12X Focus: Auto, Manual, PTZ Trigger, One Push Shutter Speed: 1/1 ~ 1/10,000s AGC: Auto/Manual White Balance: Auto, Indoor, Outdoor, One Push, Manual, Auto Tracking, Sodium, Fluorescent Exposure: Auto, Manual, Shutter Priority, Iris Priority, Smart WDR: Support BLC: Support DNR: 2D/3D SN Ratio: ≥50dB PTZ Pan: -170° ~ +170°, 0.1° ~ 120°/S Tilt: -30° ~ +90°, 0.1° ~ 80°/s Preset Number: 256 OSD: Yes Image Flip: Yes SDI Output Video Format 1080I60/I50, 1080P60/P50/P30/P25, 720P60/P50 Network Max Image Size: 1080P60 Video Compression: H.265/H.264 Audio Compression: AAC Protocols: ONVIF/RTSP/RTMP/HTTP/TCP/UDP Dual Stream: Support Interface Video Output: 1×HDMI, 1×3G-SDI, 1×USB2.0, 1×Ethernet Audio: 1×Line In Network Interface: 10M/100/1000M RJ45, NDI, POE(optional) Control Interface: 1×RS-485, 1×RS-232 In , 1×RS-232 Out General Protocols: VISCA (support daisy chain), PELCO-P, PELCO-D Address: 0~63 Power: DC12V Power Consumption: &lt;20W Operating Environment Temperature: 0°C ~ +40°C, Relative Humidity: 10%RH ~ 90 %RH Storage Environment Temperature: -20℃ ~ +60°C, Relative Humidity: 10%RH ~ 95 %RH Dimensions (L×W×H) 243mm×145mm×163mm Weight 1.2KG",
    price: 2979,
    oldPrice: 3099,
    image: "/produtos/wc-15745-f6b1db.png",
    images: [
      "/produtos/wc-15745-da7617.png",
      "/produtos/wc-15745-57b055.png",
      "/produtos/wc-15745-a5d1f9.png",
      "/produtos/wc-15745-cf2f97.png",
      "/produtos/wc-15745-51b010.png",
      "/produtos/wc-15745-c28279.png"
    ],
    sku: "MCS-15745",
    weight: 3,
    weightLabel: "35 × 25 × 35 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15744",
    name: "Mesa Controladora-Compacta-CKB-02V2",
    category: "mesa-controladora",
    categoryLabel: "Mesas Controladoras",
    description: "Joystick quadridimensional, design ergonômico Sinta-se confortável e suporte a proteção por senha de dois níveis Suporte a múltiplas taxas de transmissão e protocolos de controle Ele pode controlar 256 dispositivos com",
    price: 2262.75,
    image: "/produtos/wc-15744-7b5e62.png",
    images: [
      "/produtos/wc-15744-3f7e82.png",
      "/produtos/wc-15744-c1cbc5.png"
    ],
    sku: "MCS-15744",
    weight: 3,
    weightLabel: "25 × 16 × 15 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15695",
    name: "Microfone shotgun condensador supercardióide BY-MM1+ | [ BOYA ]",
    category: "microfones",
    subcategory: "boya",
    categoryLabel: "Linha BOYA",
    description: "Compatível com smartphones, tablets, DSLRs, filmadora de consumo, PCs e muito mais. Microfone shotgun condensador supercardióide. Ideal para Vlogging, aplicativos de vídeo, aplicativos de gravação de áudio, Transmissão",
    longDescription: "Compatível com vários dispositivos O BY-MM1+ é um microfone plug-and-play supercardioide ideal para Vlogging, aplicativos de vídeo, aplicativos de gravação de áudio, transmissão ao vivo, YouTube, vídeos de mídia social e muito mais. Possui um cabo TRRS para TRS de 3,5 mm e um cabo TRRS para TRRS de 3,5 mm que torna possível trabalhar com smartphones, tablets, DSLRs, filmadoras de consumo, PCs e muito mais. Som de alta qualidade e portátil sem esforço O BY-MM1+ apresenta um corpo de alumínio compacto e robusto, mas ainda possui um peso incrível (60g). É a maneira perfeita de gravar um ótimo som em qualquer lugar, porque é tão compacto e leve que você pode levá-lo a qualquer lugar, seja usando aplicativos de vídeo ou aplicativos de gravação de áudio, transmissão ao vivo, gravação de uma apresentação ao vivo ou bate-papo online. Tudo o que você precisa fazer é tirá-lo do bolso e conectá-lo, e você terá um som dinâmico com qualidade de transmissão que leva seu conteúdo para o próximo nível. Design Inteligente e Fácil de Começar O BY-MM1+ foi projetado com uma saída de fone de ouvido de 3,5 mm, é bastante conveniente para os usuários monitorar o processo de gravação de som (no modelo de smartphone). A montagem de choque destacável no kit fornece uma construção confiável e sólida, eliminando efetivamente o ruído de vibrações e manuseio da câmera. O BY-MM1+ é extremamente fácil de usar, basta conectá-lo e iniciar o aplicativo de vídeo, áudio ou streaming de sua escolha e começar a gravar. É uma maneira extremamente acessível e simples de fornecer ao seu conteúdo um nível profissional de qualidade de som e nunca precisará de baterias ou carregamento",
    price: 163.8,
    image: "/produtos/wc-15695-2dfe90.jpg",
    images: [
      "/produtos/wc-15695-2c3808.jpg",
      "/produtos/wc-15695-144fe5.jpg",
      "/produtos/wc-15695-da2ffd.jpg",
      "/produtos/wc-15695-892098.jpg",
      "/produtos/wc-15695-2b818b.jpg"
    ],
    sku: "MCS-15695",
    weight: 1,
    weightLabel: "25 × 16 × 15 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15694",
    name: "Microfone condensador supercardióide -BY-BM2021 [ BOYA ]",
    category: "microfones",
    subcategory: "com-fio",
    categoryLabel: "Com Fio",
    description: "Microfone condensador super cardioide. Compatível com smartphones, câmeras DSLR, filmadoras, PC etc. Construção em ABS reforçado. Plug and play, sem necessidade de bateria. Peso leve compacto apenas 63g. Inclui um cabo",
    longDescription: "O BOYA BY-BM2021, um microfone shotgun de vídeo supercardioide, oferece desempenho de som muito melhor do que os microfones embutidos de smartphones, tablets, câmeras e filmadoras. Exclusivo padrão polar supercardióide capta melhor som Com o padrão supercardioide, sua área de captação estreita se concentra diretamente na frente do microfone e reduz outros sons ao redor. Mais forte, mas mais leve com construção em ABS reforçado Construção ABS reforçada adotada, BOYA BY-BM2021 pesa apenas 63g, sempre mantendo sua configuração superleve, tornando-a ideal para filmagem manual. Nenhuma bateria necessária, usando livremente a qualquer momento Sem interruptores ou configurações complicadas, o BOYA BY-BM2021 é alimentado principalmente por câmeras, filmadoras, smartphones, para operar sem bateria. Compatível com vários dispositivos Com cabo conector de áudio TRRS e TRS incluído, BOYA BY-BM2021 é compatível com a maioria dos smartphones, tablets, DSLRs, filmadoras que possuem um conector de microfone de 3,5 mm.",
    price: 213,
    image: "/produtos/wc-15694-d7f35e.jpg",
    images: [
      "/produtos/wc-15694-3233b2.jpg",
      "/produtos/wc-15694-101b9a.jpg",
      "/produtos/wc-15694-51696d.jpg",
      "/produtos/wc-15694-4fc86a.jpg",
      "/produtos/wc-15694-513c72.jpg",
      "/produtos/wc-15694-926320.jpg",
      "/produtos/wc-15694-0312d6.jpg"
    ],
    sku: "MCS-15694",
    weight: 1,
    weightLabel: "25 × 16 × 15 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15693",
    name: "Microfone cardióide dinâmico BY-DM500 [ BOYA ]",
    category: "microfones",
    subcategory: "com-fio",
    categoryLabel: "Com Fio",
    description: "Ideal para transmissão, podcasting e gravação em estúdio Entregue som de qualidade profissional Padrão polar cardioide Construção robusta toda em metal Não há necessidade de baterias adicionais ou alimentação fantasma Ó",
    longDescription: "O BOYA BY-DM500 é um microfone dinâmico que oferece som com qualidade de transmissão para gravação de voz e instrumento, ideal para transmissão, podcasting, dublagem, gravação em estúdio e muito mais. O BY-DM500 apresenta a combinação de um cartucho dinâmico e padrão de captação cardióide. Ele oferece som de transmissão quente e assertivo e rejeita o ruído de fundo indesejado para gravações perfeitas. Com uma ampla resposta de frequência (20–20.000 Hz), o BY-DM500 captura mais detalhes do som vocal e do som dos instrumentos, podendo fornecer um som rico e equilibrado para os usuários. O pára-brisas de espuma removível e aprimorado e o filtro pop interno podem minimizar plosivas, ideal para aplicações de microfone próximo, ele torna suas gravações vocais em outro nível. Todo o corpo de metal garante uma construção sólida e pode resistir a interferências de sinal. O BY-DM500 é incrivelmente fácil de usar. Possui um suporte de montagem ajustável, basta prender o microfone em um suporte de microfone ou braço boom (não incluso na embalagem) através do orifício rosqueado na parte inferior, conectar o microfone a uma unidade externa com um cabo XLR (não incluso na embalagem). a caixa de embalagem), então tudo está pronto para começar. Por ser um microfone dinâmico, você não precisa de baterias ou phantom power de 48V para suportar o microfone.",
    price: 707.7,
    image: "/produtos/wc-15693-914273.jpg",
    images: [
      "/produtos/wc-15693-559e5b.jpg",
      "/produtos/wc-15693-806607.jpg",
      "/produtos/wc-15693-6413e6.jpg",
      "/produtos/wc-15693-bae5d9.jpg",
      "/produtos/wc-15693-b39c28.jpg",
      "/produtos/wc-15693-f9a034.jpg",
      "/produtos/wc-15693-713b5b.jpg"
    ],
    sku: "MCS-15693",
    weight: 2,
    weightLabel: "30 × 20 × 21 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15692",
    name: "Microfone condensador BOYA | BY-CM3-TIPO-C",
    category: "microfones",
    subcategory: "microfone-de-mesa",
    categoryLabel: "De Mesa",
    description: "Ideal para streaming, podcasting, vocais, gravação de instrumentos Compatível com a maioria dos dispositivos Android, tablets com conector USB-C e computadores Mac/Windows Libere seu espaço em um tamanho compacto (90,5",
    longDescription: "O BOYA BY-CM3 é um microfone condensador USB para fornecer áudio cristalino e natural. Devido ao padrão polar cardióide, o BY-CM3 pode capturar o som diretamente no microfone enquanto rejeita o ruído fora do eixo e minimiza o tom da sala de forma eficaz. É ideal para streaming, podcasting, vocais, gravação de instrumentos e muito mais. O BY-CM3 apresenta a combinação de ampla resposta de frequência de 20-20KHz e resolução de 24bit/48KHz. Ele captura mais detalhes de suas vozes e instrumentos, o que torna suas gravações de outro nível. Os usuários podem ajustar facilmente o ganho por meio do botão de controle, adaptando o sinal de áudio de saída aos seus dispositivos. O suporte do microfone permite inclinação de 15 graus em todas as direções, ajustando o microfone em um ângulo adequado e garantindo o melhor efeito de captação de som. Com o cabo de carregamento incluído, é muito fácil começar. Basta conectar e você está pronto para começar a trabalhar.",
    price: 283.5,
    image: "/produtos/wc-15692-dc4703.jpg",
    images: [
      "/produtos/wc-15692-bbe78e.jpg",
      "/produtos/wc-15692-ed1b1c.jpg",
      "/produtos/wc-15692-f3aa51.jpg",
      "/produtos/wc-15692-2f2143.jpg",
      "/produtos/wc-15692-8f486e.jpg",
      "/produtos/wc-15692-e9148b.jpg",
      "/produtos/wc-15692-0ecffb.jpg"
    ],
    sku: "MCS-15692",
    weight: 2,
    weightLabel: "30 × 20 × 21 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15691",
    name: "Mixer de áudio dinâmico/condensador BY-AM1 [ BOYA ]",
    category: "mesa-controladora",
    subcategory: "audio-mixer",
    categoryLabel: "Mixers de Áudio",
    description: "Mixer de áudio de canal duplo para dinâmico/condensador Microfones XLR, nível de linha ou sinais de instrumentos. Compatível com computadores, laptops, alto-falantes. Monitoramento de fone de ouvido sem latência (inclui",
    longDescription: "O BY-AM1, um mixer de áudio de canal duplo, fornece uma solução compacta de mixagem de áudio para dispositivos de entrada de linha de 6,35 mm ou qualquer microfone XLR (como BY-M1000/BY-BY-BM58), que permite montar e controlar dispositivos de entrada e transmitir o sinal de saída para o seu computador. Múltiplas entradas integradas que enriquecem seu áudio Graças às entradas combinadas de 6,35 mm/XLR integradas, o BY-AM1 pode facilmente aceitar sinal diretamente de microfones XLR ou instrumentos elétricos, como guitarra e baixo, etc. Taxas de amostragem mais amplas para sua necessidade profissional O BY-AM1 pode suportar taxas de amostragem de áudio de 44,1k-192kHz sem comprometer o som, ao conectar-se a microfones XLR e dispositivos de entrada de instrumentos. Monitoramento de fone de ouvido sem latência Com conector de monitoramento de fone de ouvido de 6,35 mm e adaptador de áudio fornecido de 6,35 mm para 3,5 mm, o BY-AM1 permite que você ouça seu sinal de entrada através do fone de ouvido sem qualquer eco ou latência que o distraia. Forneça phantom power de 48V via entrada XLR O BY-AM1 pode fornecer alimentação fantasma de 48V para microfone passivo XLR. O parafuso de montagem embutido de 1/4″ na base pode ser anexado ao tripé e outros",
    price: 707.7,
    image: "/produtos/wc-15691-0215b8.jpg",
    images: [
      "/produtos/wc-15691-2beecb.jpg",
      "/produtos/wc-15691-5e3faa.jpg",
      "/produtos/wc-15691-19f4c6.jpg",
      "/produtos/wc-15691-d9ed23.jpg",
      "/produtos/wc-15691-6161d9.jpg"
    ],
    sku: "MCS-15691",
    weight: 1,
    weightLabel: "27 × 21 × 23 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15667",
    name: "Microfone de Mesa Condensador BY-PM700-TIPO-C | [BOYA]",
    category: "microfones",
    subcategory: "microfone-de-mesa",
    categoryLabel: "De Mesa",
    description: "O BOYA BY-PM700 é um microfone condensador USB e compatível com Windows, computadores Mac e smartphone com um conector Type-C. Padrões comutáveis e design de cápsula tripla atendem facilmente a todas as suas necessidade",
    longDescription: "O BOYA BY-PM700 é um microfone condensador USB e compatível com Windows, computadores Mac e smartphone com um conector Type-C. Padrões comutáveis e design de cápsula tripla atendem facilmente a todas as suas necessidades Com padrões polares comutáveis e design de cápsula tripla, o BOYA BY-PM700 fornece padrões de captação cardióide, bidirecional, omnidirecional e estéreo para permitem que você escolha qualquer padrão mais apropriado para sua situação específica. Extremamente fácil de usar com um botão multifuncional integrado Com um botão multifuncional integrado e uma saída de fone de ouvido de 1/8″ (3,5 mm), o BOYA BY-PM700 torna sua experiência de uso mais fácil e conveniente. Com o botão de controle, ele pode facilmente realizar a função mudo, monitoramento de fone de ouvido, bem como controle preciso do volume de gravação. Design de construção todo em metal durável Com cápsula tripla e design de construção totalmente em metal durável, o BOYA BY-PM700 inclui um suporte de mesa que pode ajustar o microfone em vários modos desejados. ângulos, também a funcionalidade de dobrar o microfone para baixo para armazenamento e transporte. Não apenas um microfone USB de mesa A ampla resposta de frequência e a resolução de 24 bits/48 kHz tornam o BOYA BY-PM700 adequado para várias situações, como gravação, entrevistas, chamadas em conferência, vocais, instrumentos, podcasting, streaming e muito mais.",
    price: 653.1,
    image: "/produtos/wc-15667-4491e2.jpg",
    images: [
      "/produtos/wc-15667-0198ce.jpg",
      "/produtos/wc-15667-f775c6.jpg",
      "/produtos/wc-15667-56652d.jpg",
      "/produtos/wc-15667-2fd995.jpg",
      "/produtos/wc-15667-f8627d.jpg",
      "/produtos/wc-15667-0ffb0d.jpg",
      "/produtos/wc-15667-459c2d.jpg"
    ],
    sku: "MCS-15667",
    weight: 2,
    weightLabel: "30 × 20 × 21 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15666",
    name: "Microfone de Mesa Condensador Cardióide | BY-PM500-TIPO-C [ BOYA ]",
    category: "microfones",
    subcategory: "microfone-de-mesa",
    categoryLabel: "De Mesa",
    description: "Compatível com Windows, computadores Mac e a maioria Dispositivos tipo C. Ideal para gravação em estúdio doméstico, podcasting, chamadas de videoconferência, voz, gravação de instrumentos. Resposta suave e de amplo espe",
    longDescription: "O microfone condensador BOYA BY-PM500 USB apresenta padrões de captação cardióide e omnidirecional com taxas de amostragem de alta resolução de 24 bits/48 kHz. Built-in com fone de ouvido de 3,5 mm permite que você monitore a gravação sem qualquer latência. Também é integrado com um botão de controle compartilhado para fone de ouvido volume de monitoramento e gravação, oferecendo aos usuários acesso muito fácil para descobrir as configurações corretas. O suporte de mesa incluído permite vários ângulos dos microfones, o microfone pode ser completamente dobrado no suporte de mesa para armazenamento e transporte. Conteúdo do pacote Microfone BY-PM500 Cabo tipo C para USB-A de 3 m (9,8′) Cabo tipo C para tipo C de 2 m (6,5′) Suporte de mesa durável",
    price: 490.35,
    image: "/produtos/wc-15666-5d6c20.jpg",
    images: [
      "/produtos/wc-15666-a79db9.jpg",
      "/produtos/wc-15666-bbf270.jpg",
      "/produtos/wc-15666-884343.jpg",
      "/produtos/wc-15666-5b06b1.jpg",
      "/produtos/wc-15666-db508d.jpg",
      "/produtos/wc-15666-dee20c.jpg"
    ],
    sku: "MCS-15666",
    weight: 2,
    weightLabel: "30 × 20 × 21 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15665",
    name: "Microfone sem fio Lapela BY-XM6-K2 [ BOYA ]",
    category: "microfones",
    subcategory: "sem-fio",
    categoryLabel: "Sem Fio",
    description: "Ideal para vlog de duas pessoas, Vídeo do YouTube, transmissão ao vivo, entrevista, gravação, etc. Compatível com DSLR, mirrorless câmera, smartphone e computador. Tecnologia de transmissão de sinal sem fio de 2,4 GHz.",
    longDescription: "O BOYA BY-XM6-K2, um sistema de microfone sem fio de salto de frequência adaptável de 2,4 GHz, consiste em dois transmissores, um receptor e um estojo de carregamento. É uma captura de som perfeita, enquanto oferece solução para vlog de duas pessoas, vídeo do YouTube, transmissão ao vivo, entrevista, gravação, etc. Tecnologia Avançada para Transmissão de Sinal Estável O BY-XM6 K2 adota a avançada tecnologia de transmissão de sinal sem fio Adaptive Frequency Hopping (AFH), que pode fazer com que o microfone evite as partes de frequência de salto perturbadas automaticamente para realizar uma transmissão de sinal estável na faixa de até 100 m (328 pés), sem obstáculos. Captura e entrega de áudio profissional Apresentando uma cápsula de alta qualidade, circuito de processamento de sinal com relação sinal-ruído acima de 84dB, bem como uma taxa de distorção inferior a 0,1%, o microfone captura enquanto isso oferece áudio de alta qualidade, claro e com baixo ruído. Kit de microfone sem fio ultra versátil e fácil de usar Com display OLED vívido e fácil de ler nos transmissores e receptores, os usuários podem ajustar a transmissão do sinal com precisão. Além disso, o transmissor também é projetado com um microfone omnidirecional embutido, para que os usuários possam prender o transmissor no colarinho para captar sons, enquanto também podem conectar um microfone de lapela no conector MIC IN do transmissor para capturar o som. Além disso, este kit de microfone está equipado com um cabo de áudio TRS-TRS de 3,5 mm e um cabo de áudio TRS-TRRS de 3,5 mm. Portanto, pode funcionar bem com sua câmera DSLR ou mirrorless, smartphone ou computador, etc. O BY-XM6 K2 vem equipado com um estojo de carregamento portátil e poderoso, o que o torna facilmente transportado ao ar livre. Com a poderosa bateria integrada, o estojo de carregamento permite que o receptor e os transmissores sejam totalmente carregados ao mesmo tempo, sem a necessidade de qualquer cabo. Além disso, o indicador de ene…",
    price: 1415.4,
    image: "/produtos/wc-15665-1c77c7.jpg",
    images: [
      "/produtos/wc-15665-f8d5ac.jpg",
      "/produtos/wc-15665-3e0068.jpg",
      "/produtos/wc-15665-91f632.jpg",
      "/produtos/wc-15665-ed64a1.jpg",
      "/produtos/wc-15665-7bfcb9.jpg",
      "/produtos/wc-15665-57f2ed.jpg",
      "/produtos/wc-15665-d9754d.jpg"
    ],
    sku: "MCS-15665",
    weight: 1,
    weightLabel: "16 × 16 × 19 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15664",
    name: "Sistema Microfone Lapela Sem Fio Portátil BY-XM6-K1-UHF- [BOYA]",
    category: "microfones",
    subcategory: "sem-fio",
    categoryLabel: "Sem Fio",
    description: "Ideal para vlog individual, vídeo do YouTube, transmissão ao vivo, entrevista, gravação, etc. Compatível com DSLR, câmera mirrorless, smartphone e computador. Tecnologia de transmissão de sinal sem fio de 2,4 GHz. Siste",
    longDescription: "O BOYA BY-XM6-K1, um sistema de microfone sem fio de salto de frequência adaptável de 2,4 GHz, consiste em um transmissor, um receptor e um estojo de carregamento. É uma captura de som perfeita, enquanto oferece solução para vlog individual, vídeo do YouTube, transmissão ao vivo, entrevista, gravação, etc. Tecnologia Avançada para Transmissão de Sinal Estável O BY-XM6 K1 adota a avançada tecnologia de transmissão de sinal sem fio Adaptive Frequency Hopping (AFH), que pode fazer com que o microfone evite as partes de frequência de salto perturbadas automaticamente para realizar uma transmissão de sinal estável na faixa de até 100 m (328 pés), sem obstáculos. Captura e entrega de áudio profissional Apresentando uma cápsula de alta qualidade, circuito de processamento de sinal com relação sinal-ruído acima de 84dB, bem como uma taxa de distorção inferior a 0,1%, o microfone captura enquanto isso oferece áudio de alta qualidade, claro e com baixo ruído. Kit de microfone sem fio ultra versátil e fácil de usar Com visor OLED vívido e fácil de ler no transmissor e no receptor, os usuários podem ajustar a transmissão do sinal com precisão. Além disso, o transmissor também é projetado com um microfone omnidirecional embutido, para que os usuários possam prender o transmissor no colarinho para captar sons, enquanto também podem conectar um microfone de lapela no conector MIC IN do transmissor para capturar o som. Além disso, este kit de microfone está equipado com um cabo de áudio TRS-TRS de 3,5 mm e um cabo de áudio TRS-TRRS de 3,5 mm. Portanto, pode funcionar bem com sua câmera DSLR ou mirrorless, smartphone ou computador, etc. O BY-XM6 K1 vem equipado com um estojo de carregamento portátil e poderoso, o que o torna facilmente transportado ao ar livre. Com a poderosa bateria integrada, o estojo de carregamento permite que o receptor e o transmissor sejam totalmente carregados ao mesmo tempo, sem a necessidade de qualquer cabo. Além disso, o indicador de energia no estojo d…",
    price: 1061.55,
    image: "/produtos/wc-15664-ad2bf1.jpg",
    images: [
      "/produtos/wc-15664-894959.jpg",
      "/produtos/wc-15664-7a7a0d.jpg",
      "/produtos/wc-15664-d28809.jpg",
      "/produtos/wc-15664-cbb418.jpg",
      "/produtos/wc-15664-800a3c.jpg",
      "/produtos/wc-15664-a878ed.jpg"
    ],
    sku: "MCS-15664",
    weight: 1,
    weightLabel: "16 × 16 × 19 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15662",
    name: "Sistema de Microfone Sem Fio BY-WM8 PRO-K3 [BOYA]",
    category: "microfones",
    subcategory: "uhf",
    categoryLabel: "UHF",
    description: "Receptor sem fio de canal duplo adequado para Câmera, filmadora, etc. 48 canais UHF selecionáveis. Ideal para capturar entrevistas, diálogo de filme, gravação de campo, transmissão de TV, coleta de notícias e vlogging,",
    longDescription: "O BOYA BY-WM8 Pro K3 consiste em um transmissor de mão e um receptor bodypack. É ideal para capturar entrevistas, gravações de campo, transmissão de TV, ENG, etc. Recursos profissionais e configurações simples O BY-WM8 Pro K3 utiliza a banda UHF (Ultra-High Frequency), que ajudará os usuários a evitar a maioria das interferências. E seus 48 canais independentes permitem que os usuários usem até 8 kits simultaneamente em uma sala. Enquanto isso, seu alcance operacional é de até 100m (328ft sem obstáculos), dando aos usuários mais comodidade ao usar. Com configurações simples, você só precisa ligá-lo, escolher o canal certo e começar. Visor LCD de fácil leitura Tanto os transmissores como os receptores estão equipados com um visor LCD de fácil leitura. Assim, você pode obter informações importantes dos visores e fazer ajustes rápidos para captar o som de maneira ideal. E o LCD será bloqueado automaticamente em 30 segundos para evitar a operação incorreta acidental.",
    price: 1088.55,
    image: "/produtos/wc-15662-d9649b.jpg",
    images: [
      "/produtos/wc-15662-e11344.jpg",
      "/produtos/wc-15662-d9b33c.jpg",
      "/produtos/wc-15662-97c42e.jpg",
      "/produtos/wc-15662-117f32.jpg",
      "/produtos/wc-15662-c0d057.jpg",
      "/produtos/wc-15662-b046ef.jpg",
      "/produtos/wc-15662-125d97.jpg"
    ],
    sku: "MCS-15662",
    weight: 2,
    weightLabel: "35 × 17 × 26 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15661",
    name: "Sistema Microfone Lapela BY-WM8 PRO-K2 [BOYA]",
    category: "microfones",
    subcategory: "sem-fio",
    categoryLabel: "Sem Fio",
    description: "Inclui dois transmissores e um receptor. Receptor sem fio de canal duplo adequado para câmeras, filmadoras etc Ideal para capturar entrevistas, diálogos de filmes, gravações de campo, transmissão de TV, coleta de notíci",
    longDescription: "Excelente sistema de microfone sem fio UHF para fontes de som duplas BY-WM8 Pro-K2 vem com dois transmissores e um receptor no kit. Todo o sistema é perfeito para DSLRs, Mirrorless, Pro Video e todos os tipos de câmeras ou gravadores de áudio portáteis com entrada de microfone de 3,5 mm ou XLR. É ideal para capturar entrevistas, diálogos de filmes, gravações de campo, transmissão de TV, coleta de notícias, vlogging, vídeos do YouTube e muito mais. Recursos profissionais, etapas simples O BY-WM8 Pro K2 utiliza o espectro UHF (Ultra High Frequency), que ajuda a evitar interferências. Existem 48 canais disponíveis, o que permite aos usuários executar vários conjuntos de sistemas BY-WM8 Pro ao mesmo tempo sem problemas. E a faixa de operação pode chegar a 100m (sem obstáculos). O sistema é super fácil de usar e funciona imediatamente. Basta conectar o microfone, ligar a alimentação e pronto. Visores LCD de fácil leitura Os visores LCD de fácil leitura no transmissor e no receptor permitem que você faça ajustes rápidos nos menus intuitivos nos ambientes mais claros ou escuros. A função de bloqueio automático do LCD evita o toque acidental durante a fotografia profissional ou uso normal.",
    price: 1306.2,
    image: "/produtos/wc-15661-56a92b.jpg",
    images: [
      "/produtos/wc-15661-6523ab.jpg",
      "/produtos/wc-15661-59d579.jpg",
      "/produtos/wc-15661-141488.jpg",
      "/produtos/wc-15661-59c650.jpg",
      "/produtos/wc-15661-b29b7b.jpg",
      "/produtos/wc-15661-5d62bd.jpg",
      "/produtos/wc-15661-5b4c46.jpg"
    ],
    sku: "MCS-15661",
    weight: 2,
    weightLabel: "35 × 25 × 17 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15660",
    name: "Microfone-BY-WM8 PRO-K1-UHF-WIRELESS-BOYA881",
    category: "microfones",
    subcategory: "sem-fio",
    categoryLabel: "Sem Fio",
    description: "Adequado para receptor sem fio de canal duplo para câmera, filmadora etc 48 canais UHF selecionáveis. Ideal para capturar entrevistas, diálogos de filmes, gravações de campo, transmissão de TV, coleta de notícias e vlog",
    longDescription: "Excelente sistema de microfone sem fio UHF BY-WM8 Pro-K1 vem com um transmissor e um receptor no kit. Todo o sistema é perfeito para DSLRs, Mirrorless, Pro Video e todos os tipos de câmeras ou gravadores de áudio portáteis com entrada de microfone de 3,5 mm ou XLR. É ideal para capturar entrevistas, diálogos de filmes, gravações de campo, transmissão de TV, coleta de notícias, Vlogging, vídeos do YouTube e muito mais. Recursos profissionais, etapas simples O BY-WM8 Pro K1 utiliza o espectro UHF (Ultra High Frequency), que ajuda a evitar interferências. Existem 48 canais disponíveis, o que permite aos usuários executar vários conjuntos de sistemas BY-WM8 Pro ao mesmo tempo sem problemas. E a faixa de operação pode chegar a 100m (sem obstáculos). O sistema é super fácil de usar e funciona imediatamente. Você apenas conecta o microfone, liga a energia e começa. Visores LCD de fácil leitura Os visores LCD de fácil leitura no transmissor e no receptor permitem que você faça ajustes rápidos nos menus intuitivos nos ambientes mais claros ou escuros. A função de bloqueio automático do LCD evita o toque acidental durante a fotografia profissional ou uso normal.",
    price: 925.05,
    image: "/produtos/wc-15660-2e79e6.jpg",
    images: [
      "/produtos/wc-15660-892993.jpg",
      "/produtos/wc-15660-b1148a.jpg",
      "/produtos/wc-15660-713ff2.jpg",
      "/produtos/wc-15660-f063c8.jpg",
      "/produtos/wc-15660-13c7fc.jpg",
      "/produtos/wc-15660-d9b00e.jpg",
      "/produtos/wc-15660-1f220e.jpg"
    ],
    sku: "MCS-15660",
    weight: 2,
    weightLabel: "30 × 20 × 21 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15659",
    name: "Microfone-BY-WM4 PRO-K2-WIRELESS-BOYA",
    category: "microfones",
    subcategory: "sem-fio",
    categoryLabel: "Sem Fio",
    description: "• Compatível com smartphone, DSLR, filmadoras de consumo e PCs, etc. • Ideal para vídeo, podcast e jornalismo móvel aplicações etc • Tecnologia de transmissão digital de 2,4 GHz. • Dois transmissores e um receptor de ca",
    longDescription: "O BOYA BY-WM4 Pro K2 é um sistema de microfone sem fio de 2,4 GHz que consiste em um receptor de canal duplo para cinto e dois transmissores para cinto, compatíveis com smartphones, DSLR, filmadoras de consumo, PCs, etc. Receptor de canal duplo oferece duas fontes de som simultaneamente Equipado com um receptor de cinto sem fio de canal duplo, o sistema de microfone sem fio BY-WM4 Pro K2 é capaz de capturar duas fontes de som e entregá-las aos seus dispositivos de gravação simultaneamente. Duas saídas diferentes no receptor Existem dois tipos de saídas diferentes na parte superior do receptor — saída de áudio e saída de monitoramento de fone de ouvido. Os usuários podem fornecer áudio para câmeras por meio do cabo TRS para TRS de 3,5 mm ou para smartphones por meio de outro cabo TRS para TRRS de 3,5 mm. Enquanto isso, ele é capaz de monitorar o áudio do receptor, depois de conectar um fone de ouvido no conector de monitoramento de fone de ouvido. Entrada de linha inovadora no transmissor Além disso, o transmissor vem com um conector de entrada de linha que permite aceitar áudio como música de fundo de dispositivos externos. Isso será um pequeno benefício da pós-produção ao gravar com áudio de entrada de linha apropriado. Corpo compacto com habilidade poderosa Tanto o transmissor quanto o receptor são compactos e leves, cada um com apenas cerca de 47g (1,7 oz), o BY-WM4 Pro K2 funciona por cerca de 6 horas e a distância de operação é de até 60m (197 pés) sem obstáculos. Todos os acessórios que você precisa estão disponíveis Obviamente, estão disponíveis dois microfones de lapela omnidirecionais, bolsa com zíper, suporte para sapata de câmera padrão, cabos de saíd",
    price: 1066.8,
    image: "/produtos/wc-15659-db9973.jpg",
    images: [
      "/produtos/wc-15659-9f931c.jpg",
      "/produtos/wc-15659-5f82e4.jpg",
      "/produtos/wc-15659-da490f.jpg",
      "/produtos/wc-15659-5eae2f.jpg",
      "/produtos/wc-15659-e3b245.jpg",
      "/produtos/wc-15659-4e4aea.jpg",
      "/produtos/wc-15659-22493f.jpg"
    ],
    sku: "MCS-15659",
    weight: 2,
    weightLabel: "30 × 20 × 21 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15658",
    name: "Sistema Microfone Lapela BY-WM4 PRO-K1 [BOYA]",
    category: "microfones",
    subcategory: "sem-fio",
    categoryLabel: "Sem Fio",
    description: "Receptor sem fio de canal duplo. Compatível com smartphones, consumidores de câmeras DSLR filmadoras, PCs, etc. Ideal para podcasters, blogueiros, streamers ao vivo, YouTube criador, jornalismo móvel e muito mais. Leve",
    longDescription: "Microfone BY-WM4 Pro K1 Sistema sem fio inovador de 2,4 GHz O BY-WM4 Pro K1 combina o design revolucionário e oferece um sistema sem fio avançado de 2,4 GHz que oferece som estelar com qualidade de transmissão. Pode ser usado em qualquer país e não precisa se preocupar com a limitação de banda. Funções práticas e versatilidade O transmissor vem com um microfone de lapela omnidirecional, pode garantir um som super claro durante a gravação. O line-in oferece a possibilidade de os usuários obterem mais de um recurso de som. Uma saída de fone de ouvido de 3,5 mm no receptor com controle de nível permite monitorar o som em tempo real, mesmo que seu dispositivo não tenha uma saída de fone de ouvido. O cabo de áudio TRRS de 3,5 mm e um cabo de áudio TRS de 3,5 mm no pacote tornam o sistema sem fio compatível com a maioria dos equipamentos de áudio/vídeo, como smartphone, tablet, DSLR, gravador pequeno, gravador de áudio, PC etc., e BY -O WM4 Pro possui alcance operacional de até 60 m (197 pés), ideal para emissoras, podcasters, blogueiros, streamers ao vivo, criador do YouTube, jornalismo móvel e muito mais. Fácil de usar e fácil de transportar Ligue o botão Transmissor e Receptor do Microfone BY-WM4 Pro K1, conecte os cabos ao seu dispositivo e mais um clique para emparelhar. Essas são todas as etapas para serem declaradas. O peso total do transmissor e do receptor é de apenas 94g, super fácil de transportar para qualquer lugar. Por último, o receptor de canal duplo permite trabalhar dois transmissores ao mesmo tempo. RF Modulation: GFSK (Gauss frequency Shift Keying) Frequency band: 2.4GHz (2405-2478MHz) Frequency response: 35Hz-14KHz±3dB Signal/Noise: 84dB or more Distortion: 0.05% or less (32Ω,1 KHz,65mW output) RF output level: 3mW Earphone output level: 32Ω,65mW Reception sensitivity: -90dB +/- 3dB / 0dB=1V/Pa, 1kHz Audio input connector: 3.5mm mini jack Operation range: 60m (197ft) (without obstacle) Power requirements: 3V DC (Two AAA size batteries) Consumption po…",
    price: 707.7,
    image: "/produtos/wc-15658-5e117f.jpg",
    images: [
      "/produtos/wc-15658-1b7786.jpg",
      "/produtos/wc-15658-913931.jpg",
      "/produtos/wc-15658-c91830.jpg",
      "/produtos/wc-15658-d0421c.jpg",
      "/produtos/wc-15658-5a72a1.jpg",
      "/produtos/wc-15658-81e7c9.jpg",
      "/produtos/wc-15658-64b43e.jpg"
    ],
    sku: "MCS-15658",
    weight: 2,
    weightLabel: "30 × 20 × 21 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15657",
    name: "Microfone Sem Fio IOS/IPHONE BY-WM3T2-D2 [BOYA]",
    category: "microfones",
    subcategory: "lapela-2-microfone",
    categoryLabel: "Lapela Dupla",
    description: "Sistema de microfone sem fio de canal duplo de 2,4 GHz Ultracompacto e portátil Compatível com dispositivos Apple Ios Microfone integrado omnidirecional para captação de som em 360° Cancelamento de ruído selecionável Em",
    longDescription: "A série BY-WM3T2 é um mini sistema de microfone sem fio de 2,4 GHz que fornece som de alta qualidade para transmissão ao vivo, vlogging, gravação de curso e outras aplicações de captura de áudio. Com uma saída MFi Certified Lightning, o BY-WM3T2-D2 foi projetado para Dispositivos Apple iOS. Incluindo os 2 transmissores, pode gravar duas fontes de som ao mesmo tempo. Microfone sem fio minúsculo e leve A série BY-WM3T2 é incrivelmente compacta e leve, e é fácil começar desde que você conecte o receptor ao dispositivo. O peso combinado do TX e do RX não passa de 15g, tornando-os muito portáteis. Por causa de seu tamanho ultracompacto e superleve, o transmissor não puxa sua gola quando você o prende. Suporta transmissão ao vivo e carregamento de telefone simultaneamente Quando o receptor BY-WM3T2 está conectado a um smartphone, o telefone pode ser carregado através da porta de carregamento Lightning no receptor. Ele garante seu trabalho ininterrupto por um longo tempo, como transmissão ao vivo. Além disso, a bateria recarregável embutida do transmissor fornece até 10 horas de tempo de execução, o que ajuda você a obter um dia inteiro de gravação de áudio. O cancelamento de ruído oferece som de alta qualidade A tecnologia de cancelamento de ruído inteligente pode identificar efetivamente o som original e gravar um som claro em um ambiente ruidoso. Ao clicar no botão liga/desliga duas vezes, você pode ativar o recurso de cancelamento de ruído. Quando o indicador pisca lentamente em azul, está no modo de cancelamento de ruído, o que ajuda a remover o ruído ambiente e a fornecer um som claro. Esse recurso foi projetado para uso externo, suprimindo o som de carros e multidões. Projetado para melhorar muito a qualidade do som, o BY-WM3T2 oferece desempenho de áudio verdadeiramente excepcional para suas produções. Transmission Type 2.4GHz Polar Pattern Omnidirectional Frequency Response 20Hz-16kHz SNR 77dB Sensitivity -42dB Sampling Rate 48kHz Bit Depth 16bit Transmission Ran…",
    price: 495.6,
    image: "/produtos/wc-15657-922597.jpg",
    images: [
      "/produtos/wc-15657-d9da13.jpg",
      "/produtos/wc-15657-73635d.jpg",
      "/produtos/wc-15657-42fac7.jpg",
      "/produtos/wc-15657-2395c0.jpg",
      "/produtos/wc-15657-7048f9.jpg"
    ],
    sku: "MCS-15657",
    weight: 1,
    weightLabel: "16 × 16 × 19 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15656",
    name: "Microfone Sem Fio IOS/IPHONE BY-WM3T2-D1 | [BOYA]",
    category: "microfones",
    subcategory: "lapela-1-microfone",
    categoryLabel: "Lapela",
    description: "• Sistema de microfone sem fio de 2,4 GHz • Ultracompacto e portátil • Compatível com dispositivos Apple iOS • Microfone integrado omnidirecional para captação de som em 360° • Cancelamento de ruído selecionável • Empar",
    longDescription: "A série BY-WM3T2 é um mini sistema de microfone sem fio de 2,4 GHz que fornece som de alta qualidade para transmissão ao vivo, vlogging, gravação de cursos e outras aplicações de captura de áudio. Com uma saída MFi Certified Lightning, o BY-WM3T2-D1 foi projetado para Dispositivos Apple iOS e vem com 1 transmissor e 1 receptor. Microfone sem fio minúsculo e leve A série BY-WM3T2 é incrivelmente compacta e leve, e é fácil começar desde que você conecte o receptor ao dispositivo. O peso combinado do TX e do RX não passa de 15g, tornando-os muito portáteis. Por causa de seu tamanho ultracompacto e superleve, o transmissor não puxa sua gola quando você o prende. Suporta transmissão ao vivo e carregamento de telefone simultaneamente Quando o receptor BY-WM3T2 está conectado a um smartphone, o telefone pode ser carregado através da porta de carregamento Lightning no receptor. Ele garante seu trabalho ininterrupto por um longo tempo, como transmissão ao vivo. Além disso, a bateria recarregável embutida do transmissor fornece até 10 horas de tempo de execução, o que ajuda você a obter um dia inteiro de gravação de áudio. O cancelamento de ruído oferece som de alta qualidade A tecnologia de cancelamento de ruído inteligente pode identificar efetivamente o som original e gravar um som claro em um ambiente ruidoso. Ao clicar no botão liga/desliga duas vezes, você pode ativar o recurso de cancelamento de ruído. Quando o indicador pisca lentamente em azul, está no modo de cancelamento de ruído, o que ajuda a remover o ruído ambiente e a fornecer um som claro. Esse recurso foi projetado para uso externo, suprimindo o som de carros e multidões. Projetado para melhorar muito a qualidade do som, o BY-WM3T2 oferece desempenho de áudio verdadeiramente excepcional para suas produções. Transmission Type 2.4GHz Polar Pattern Omnidirectional Frequency Response 20Hz-16kHz SNR 77 dB Sensitivity -42 dB Sampling Rate 48kHz Bit Depth 16bit Transmission Range 50m(without obstacle) RF Output Po…",
    price: 353.85,
    image: "/produtos/wc-15656-ef8ee1.jpg",
    images: [
      "/produtos/wc-15656-a0b21c.jpg",
      "/produtos/wc-15656-52b141.jpg",
      "/produtos/wc-15656-4acfe8.jpg",
      "/produtos/wc-15656-0f198c.jpg",
      "/produtos/wc-15656-e17e50.jpg"
    ],
    sku: "MCS-15656",
    weight: 1,
    weightLabel: "16 × 16 × 19 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15655",
    name: "Microfone Sem Fio BY-WM3T2-U2-TIPO-C [BOYA]",
    category: "microfones",
    subcategory: "lapela-2-microfone",
    categoryLabel: "Lapela Dupla",
    description: "Sistema de microfone sem fio de canal duplo de 2,4 GHz Ultracompacto e portátil Compatível com dispositivos com portas USB-C Microfone integrado omnidirecional para captação de som em 360° Cancelamento de ruído selecion",
    longDescription: "A série BY-WM3T2 é um mini sistema de microfone sem fio de 2,4 GHz que fornece som de alta qualidade para transmissão ao vivo, vlogging, gravação de cursos e outros aplicativos de captura de áudio. O BY-WM3T2-U2 é compatível com a maioria dos dispositivos com uma porta USB-C incluindo smartphones e tablets Android. Incluindo os 2 transmissores, BY-WM3T2-U2 pode gravar duas fontes de som ao mesmo tempo. Microfone sem fio minúsculo e leve A série BY-WM3T2 é incrivelmente compacta e leve, e é fácil começar desde que você conecte o receptor ao dispositivo. O peso combinado do TX e do RX não passa de 15g, tornando-os muito portáteis. Por causa de seu tamanho ultracompacto e superleve, o transmissor não puxa sua gola quando você o prende. Suporta transmissão ao vivo e carregamento de telefone simultaneamente Quando o receptor BY-WM3T2 está conectado a um smartphone, o telefone pode ser carregado através da porta de carregamento tipo C no receptor. Ele garante seu trabalho ininterrupto por um longo tempo, como transmissão ao vivo. Além disso, a bateria recarregável embutida do transmissor fornece até 10 horas de tempo de execução, o que ajuda você a obter um dia inteiro de gravação de áudio. O cancelamento de ruído oferece som de alta qualidade A tecnologia de cancelamento de ruído inteligente pode identificar efetivamente o som original e gravar um som claro em um ambiente ruidoso. Ao clicar no botão liga/desliga duas vezes, você pode ativar o recurso de cancelamento de ruído. Quando o indicador pisca lentamente em azul, está no modo de cancelamento de ruído, o que ajuda a remover o ruído ambiente e a fornecer um som claro. Esse recurso foi projetado para uso externo, suprimindo o som de carros e multidões. Projetado para melhorar muito a qualidade do som, o BY-WM3T2 oferece desempenho de áudio verdadeiramente excepcional para suas produções. Transmission Type 2.4GHz Polar Pattern Omnidirectional Frequency Response 20Hz-16kHz SNR 77dB Sensitivity -42dB Sampling Rate 48kH…",
    price: 495.6,
    image: "/produtos/wc-15655-adf9ed.jpg",
    images: [
      "/produtos/wc-15655-f43df2.jpg",
      "/produtos/wc-15655-d29b49.jpg",
      "/produtos/wc-15655-f842d9.jpg",
      "/produtos/wc-15655-70d706.jpg",
      "/produtos/wc-15655-576c31.jpg",
      "/produtos/wc-15655-8b936f.jpg"
    ],
    sku: "MCS-15655",
    weight: 1,
    weightLabel: "16 × 16 × 19 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15654",
    name: "Microfone Sem Fio BY-WM3T2-U1 | TIPO-C [BOYA]",
    category: "microfones",
    subcategory: "lapela-1-microfone",
    categoryLabel: "Lapela",
    description: "Sistema de microfone sem fio de 2,4 GHz Ultracompacto e portátil Compatível com dispositivos com portas USB-C Microfone integrado omnidirecional para captação de som em 360° Cancelamento de ruído selecionável Emparelham",
    longDescription: "A série BY-WM3T2 é um mini sistema de microfone sem fio de 2,4 Ghz que fornece som de alta qualidade para transmissão ao vivo, vlogging, gravação de cursos e outros aplicativos de captura de áudio. BY-WM3T2-U1 é compatível com a maioria dos dispositivos Android com portas USB-C, incluindo smartphones e tablets. Possui 1 transmissor e 1 receptor. Microfone sem fio minúsculo e leve A série BY-WM3T2 é incrivelmente compacta e leve, e é fácil de começar, desde que você conecte o receptor ao dispositivo. O peso combinado do TX e do RX não passa de 15g, tornando-os muito portáteis. Por causa de seu tamanho ultracompacto e superleve, o transmissor não puxa sua gola quando você o prende. Suporta transmissão ao vivo e carregamento de telefone simultaneamente Quando o receptor BY-WM3T2 está conectado a um smartphone, o telefone pode ser carregado através da porta de carregamento tipo C no receptor. Ele garante seu trabalho ininterrupto por um longo tempo, como transmissão ao vivo. Além disso, a bateria recarregável embutida do transmissor fornece até 10 horas de tempo de execução, o que ajuda você a obter um dia inteiro de gravação de áudio. O cancelamento de ruído oferece som de alta qualidade A tecnologia de cancelamento de ruído inteligente pode identificar efetivamente o som original e gravar um som claro em um ambiente ruidoso. Ao clicar no botão liga/desliga duas vezes, você pode ativar o recurso de cancelamento de ruído. Quando o indicador pisca lentamente em azul, está no modo de cancelamento de ruído, o que ajuda a remover o ruído ambiente e a fornecer um som claro. Esse recurso foi projetado para uso externo, suprimindo o som de carros e multidões. Projetado para melhorar muito a qualidade do som, o BY-WM3T2 oferece desempenho de áudio verdadeiramente excepcional para suas produções. Transmission Type 2.4GHz Polar Pattern Omnidirectional Frequency Response 20Hz-16kHz SNR 77 dB Sensitivity -42 dB Sampling Rate 48kHz Bit Depth 16bit Transmission Range 50m(without obs…",
    price: 353.88,
    image: "/produtos/wc-15654-c65aeb.jpg",
    images: [
      "/produtos/wc-15654-b2d269.jpg",
      "/produtos/wc-15654-96b954.jpg",
      "/produtos/wc-15654-3dbcbf.jpg",
      "/produtos/wc-15654-c47374.jpg",
      "/produtos/wc-15654-9739f1.jpg"
    ],
    sku: "MCS-15654",
    weight: 1,
    weightLabel: "16 × 16 × 19 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15653",
    name: "Microfone Lapela Gravata Omnidirecional – BY-M1S [BOYA]",
    category: "microfones",
    subcategory: "lapela-1-microfone",
    categoryLabel: "Lapela",
    description: "Microfone clip-on para smartphones, câmeras, filmadoras, gravadores de áudio, PCs, outros dispositivos de gravação de áudio/vídeo Microfone condensador de alta qualidade, ideal para gravação de voz/vídeo Padrão de capta",
    longDescription: "O BOYA BY-M1S é um microfone de lapela omnidirecional atualizado, ideal para vlogs, apresentações, podcasts, transmissões ao vivo e muito mais. Cápsula omnidirecional personalizada interna para captação de áudio de alta qualidade O BY-M1S foi projetado com uma cápsula omnidirecional atualizada e captura som com qualidade de transmissão em um alcance de 360 graus e o entrega ao seu dispositivo de gravação por meio de seu cabo blindado de 6 m (20 pés). Com sensibilidade aprimorada, relação sinal-ruído e resposta de frequência plana, o BY-M1S permite que você grave todos os detalhes de áudio com menor ruído próprio. Dois modos de gravação para diferentes cenários de uso Apresentando um conector de saída TRRS de 4 polos de 3,5 mm, você pode conectar o BY-M1 à sua câmera ou filmadora no modo “câmera” e também conectá-lo ao seu smartphone ou tablets ao alternar para o modo “OFF/Smartphone”. Não há necessidade de bateria e alimentado por dispositivos O BY-M1S não precisa de bateria LR44 e pode ser alimentado diretamente pelo dispositivo. É diferente com BY-M1. Então você pode usar o BY-M1S de forma mais fácil e conveniente. Usando o microfone de lapela BY-M1S Para smartphones, tablets, etc. Desligue o microfone. Deslize o botão para Smartphone Para DSLR, filmadoras, gravadores de áudio, PC, etc. Ligue o microfone. Deslize o botão para Câmera Mic Capsule Condenser capsule Polar pattern Omnidirectional Sensitivity -30dB,+/-3dB.f=1KHZ,Pin=1Pa，0dB=1V/Pa Frequency response 50Hz-20kHz Signal-to-noise ratio 78dB Output impedance 600Ω Connector 3.5mm(1/8’’) plug Power requirements Supplied by external devices Cable length 6.0m Weight 68g",
    price: 85.05,
    image: "/produtos/wc-15653-51574f.jpg",
    images: [
      "/produtos/wc-15653-69bf68.jpg",
      "/produtos/wc-15653-ea22a9.jpg",
      "/produtos/wc-15653-83d863.jpg",
      "/produtos/wc-15653-7f9fd5.jpg",
      "/produtos/wc-15653-66876d.jpg"
    ],
    sku: "MCS-15653",
    weight: 1,
    weightLabel: "16 × 16 × 19 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15652",
    name: "Microfone Duplo Lapela – BY-M3D – Tipo-C [BOYA]",
    category: "microfones",
    subcategory: "lapela-2-microfone",
    categoryLabel: "Lapela Dupla",
    description: "Microfone de lapela omnidirecional para Smartphone com conector tipo C. • Design de microfone duplo para capturar duas fontes de som. • Ideal para entrevistas, podcasting, transmissão ao vivo e gravação etc • Trabalhe p",
    longDescription: "O BOYA BY-M3D é um microfone de lapela de cápsula dupla digital que é ideal para entrevistas, podcasting, transmissão ao vivo e qualquer situação que exija dois alto-falantes. O microfone de lapela de cápsula dupla funciona com dispositivos USB-C Projetado com duas cápsulas, ele captura dois sons com qualidade de transmissão em um alcance de 360 graus e fornece ambos os áudios ao seu dispositivo USB-C (como smartphone Android, Macbook, PC e tablet) por meio de seu cabo de 6 m (19,7 pés). Microfone universal com ampla resposta de frequência e resolução adequada O BY-M3D fornece uma conversão de sinal em resolução de até 16 bits/48 kHz com uma resposta de frequência de 50 Hz a 20 kHz para atender às suas necessidades. E funciona bem com a maioria dos softwares e aplicativos de gravação. Outros acessórios necessários estão incluídos Existem dois pára-brisas de espuma para reduzir os ruídos do vento e uma bolsa de transporte, dois clipes e um adesivo com o logotipo da BOYA.",
    price: 360.15,
    image: "/produtos/wc-15652-68f966.jpg",
    images: [
      "/produtos/wc-15652-b21c7e.jpg",
      "/produtos/wc-15652-b2e65a.jpg",
      "/produtos/wc-15652-141524.jpg",
      "/produtos/wc-15652-6d456c.jpg",
      "/produtos/wc-15652-bd9e30.jpg"
    ],
    sku: "MCS-15652",
    weight: 1,
    weightLabel: "16 × 16 × 19 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15651",
    name: "Microfone Digital Lapela Tipo C BYM3 – TIPO-C [BOYA]",
    category: "microfones",
    subcategory: "lapela-1-microfone",
    categoryLabel: "Lapela",
    description: "Padrão polar omnidirecional. • Compatível com a maioria dos dispositivos Type-C. • Cabo de 6 metros de comprimento, adaptador confortável a vários ambientes. • Resolução digital de 16 bits/48KHz. • Baixo ruído de manuse",
    longDescription: "Conector tipo C para vários dispositivos O BY-M3 é um microfone de lapela USB Tipo C digital, especialmente projetado para dispositivos Android e outros dispositivos com conector Tipo C, como iPad Pro, Mac PC. Isso fornece uma transferência de sinal puramente digital e de baixo ruído que resulta em som rico e com qualidade de transmissão, esteja você gravando vídeo ou gravando áudio com os aplicativos de sua escolha. Excelente recurso de captação de som e fácil de se expressar O padrão de captação do BY-M3 é omnidirecional, o que proporciona um som suave e uniforme, independentemente da direção em que aponta quando preso ao colarinho ou à roupa. O BY-M3 é um microfone plug-and-play real com todos os aplicativos de gravação de áudio e vídeo. Não requer baterias, carregamento ou qualquer ajuste de configurações. Comprimento do cabo extra longo adequado para qualquer ocasião O cabo do BY-M3 tem 6 m, o que é longo o suficiente para vídeos com bastão de selfie ou para guardar seu dispositivo no bolso enquanto grava. A excelente qualidade de áudio do BY-M3 é obtida com a combinação de sua cápsula de microfone superior, seu conversor analógico-digital de última geração e seu conector tipo C digital. Connector: Type-C (USB-IF certified) Sensitivity: -40+/-3dB (0dB=1V/Pa,at 1KHz) Polar Pattern: Omnidirectional Signal to Noise Ratio: 76dB or more Bit Rate: 16Bit Sampling Rates: 48 kHz Frequency Response: 50Hz-20kHz Power Requirement: Via Type-C devices Cable Length: 6m (19.7’) Weight: 44.5g (1.57oz)",
    price: 218.4,
    image: "/produtos/wc-15651-116e81.jpg",
    images: [
      "/produtos/wc-15651-e06e41.jpg",
      "/produtos/wc-15651-6e8fce.jpg",
      "/produtos/wc-15651-247394.jpg",
      "/produtos/wc-15651-b04403.jpg",
      "/produtos/wc-15651-165d37.jpg"
    ],
    sku: "MCS-15651",
    weight: 1,
    weightLabel: "16 × 16 × 19 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15650",
    name: "Microfone Lapela Omnidirecional Duplo Conector BY-M2D – IOS/Iphone [BOYA]",
    category: "microfones",
    subcategory: "lapela-2-microfone",
    categoryLabel: "Lapela Dupla",
    description: "• Design de microfone duplo para capturar duas fontes de som. • Microfone de lapela omnidirecional para dispositivos iOS. • Ideal para entrevistas, podcasting, transmissão ao vivo e gravação etc • Conector Lightning cer",
    longDescription: "O BOYA BY-M2D é um microfone de lapela digital de cápsula dupla ideal para entrevistas, podcasting, transmissão ao vivo e qualquer situação que exija dois alto-falantes. Projetado com duas cápsulas omnidirecionais, ele captura dois sons nítidos e fornece ambos os áudios para seus dispositivos de gravação. Conector Lightning certificado pela MFI para uso com dispositivos iOS Apresentando o conector Lightning oficialmente certificado pela Apple MFI, ele pode ser conectado diretamente aos seus dispositivos iOS (como iPhone, iPad e iPod Touch) por meio de seu cabo de 6 m (19,7 pés). Resposta de alta resolução e ampla frequência para atender quase às necessidades O BY-M2D fornece uma conversão de sinal em resolução de até 24 bits/48 kHz com uma resposta de frequência de 50 Hz a 20 kHz para atender às suas necessidades. Enquanto isso, funciona bem com quase todos os softwares e aplicativos de gravação. Cada acessório necessário está incluído Existem dois pára-brisas de espuma para reduzir os ruídos do vento e uma bolsa de transporte, dois clipes e um adesivo com o logotipo da BOYA. Connector: Apple MFi certified Lightning connector Cable Length: 6m (19.7’) Output: MFi Certified Lightning Connector iOS System Compatibility: iOS 8.0 or Later Sensitivity: -40+/-3Db (0dB=1V/Pa, at 1KHz) Polar Pattern: Omnidirectional Signal to Noise Ratio: 76dB or more Frequency Response: 50Hz-20kHz Bit Rate: 16Bit, 24Bit Sampling Rates: 44.1 / 48 kHz Power Requirement: Supplied by iOS device Cable Length: 6m (19.7’) Weight: 80g (2.82oz)",
    price: 360.15,
    image: "/produtos/wc-15650-bb9789.jpg",
    images: [
      "/produtos/wc-15650-fdb04f.jpg",
      "/produtos/wc-15650-a156a6.jpg",
      "/produtos/wc-15650-2e53eb.jpg",
      "/produtos/wc-15650-7248f4.jpg"
    ],
    sku: "MCS-15650",
    weight: 1,
    weightLabel: "16 × 16 × 19 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15649",
    name: "Microfone Lapela Omnidirecional Duplo Conector BY-M2 – IOS/Iphone [BOYA]",
    category: "microfones",
    subcategory: "lapela-1-microfone",
    categoryLabel: "Lapela",
    description: "• Microfone de encaixe omnidirecional ideal para Iphone,ipad etc • Redução de ruído inteligente. • Design destacável para usos múltiplos. • Com conector Lightning certificado pela Apple MFi. • Plug and play, sem necessi",
    longDescription: "O microfone de lapela BOYA BY-M2 ajuda a capturar um som claro e de alta qualidade diretamente para todos os tipos de dispositivos iOS através da porta Lightning, como iphone, ipad etc. um microfone de lapela com conector fêmea de 3,5 mm. Microfone de encaixe omnidirecional, libere seu potencial Com Redução Inteligente de Ruído, o BOYA BY-M2 pode fornecer melhor qualidade de som do que os microfones embutidos, uma escolha ideal para gravar entrevistas, vlogs, apresentações e muito mais. Conector Lightning certificado pela Apple MFi para dispositivos Ios Com conector Lightning certificado pela Apple MFi, o BOYA BY-M2 se adapta a dispositivos iOS, para melhorar a qualidade do som. Mais comprimento livre com cabo de 6m Com um cabo longo de 6m de comprimento e design destacável, o BOYA BY-M2 pode suportar qualquer outro microfone com conector TRS de 3,5 mm e mais liberdade para os usuários, como BOYA BY-MM1, BY-BM2021 etc. Plug and Play, sem necessidade de bateria Com design sem bateria, o BOYA BY-M2 é fácil de gravar. Apenas Plug and Play, seu som notável será preservado. Transducer Principle: Condenser Microphone iOS System Compatibility: iOS 8.0 or Later Polar Pattern: Omnidirectional Signal to Noise Ratio: 76dB or more Frequency Response: 50 Hz-20 kHz Sensitivity: -40dB+/-3dB (0dB=1V/Pa, at 1KHz) Bit Rate: 16Bit, 24Bit Sampling Rates: 44.1 / 48 kHz Power Requirement: Powered via Connection to iOS Device Cable Length: 6m (19.7’) Weight: 46g (1.62oz)",
    price: 218.4,
    image: "/produtos/wc-15649-88969c.jpg",
    images: [
      "/produtos/wc-15649-cef11a.jpg",
      "/produtos/wc-15649-e01c92.jpg",
      "/produtos/wc-15649-85e34f.jpg",
      "/produtos/wc-15649-facc1e.jpg",
      "/produtos/wc-15649-5a2848.jpg",
      "/produtos/wc-15649-5e48c4.jpg",
      "/produtos/wc-15649-91c43a.jpg"
    ],
    sku: "MCS-15649",
    weight: 1,
    weightLabel: "16 × 16 × 19 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15648",
    name: "Microfone Lapela Omnidirecional Boya BY-M1",
    category: "microfones",
    subcategory: "boya",
    categoryLabel: "Linha BOYA",
    description: "Padrão polar omnidirecional. Resposta de frequência plana. Som de alta qualidade. Trabalhe com câmeras, smartphones e computadores. Um botão alterna entre a câmera e modo smartphone. Cabo de 6 m (20′) de comprimento. Wi",
    longDescription: "O BOYA BY-M1 é um microfone de lapela omnidirecional ideal para vlog, apresentação, podcasting, transmissão ao vivo e muito mais. Cápsula omnidirecional personalizada para captação de áudio de alta qualidade Projetado com uma cápsula de sinal omnidirecional personalizada, ele captura som com qualidade de transmissão em um alcance de 360 graus e o entrega ao seu dispositivo de gravação por meio de seu cabo blindado de 6 m (20 pés). Com sensibilidade aprimorada, relação sinal-ruído e resposta de frequência plana, o BY-M1 permite que você grave todos os detalhes de áudio com menor ruído próprio. Dois modos de gravação para diferentes cenários de uso Com um conector de saída TRRS de 3,5 mm e 4 polos, você pode conectar o BY-M1 à sua câmera ou filmadora no modo “câmera” e também conectá-lo ao seu smartphone ou PC ao alternar para o modo “OFF/Smartphone”. Cada acessório necessário está incluído Em termos de acessórios, você encontrará clipe de lapela, windscreen de espuma e uma bateria LR44 para usar o modo “câmera”, um adaptador de áudio de 1/4″ para dispositivos adicionais compatíveis e uma bolsa de transporte para fornecer proteção segura. Usando o microfone Para Smartphone Desligue o microfone. Deslize o ON/OFF até OFF/Smartphone A energia é desligada. Para DSLR, filmadoras, gravadores de áudio, PC ect Ligue o microfone. Deslize o ON/OFF até ON",
    price: 66.15,
    image: "/produtos/wc-15648-5e01c4.jpg",
    images: [
      "/produtos/wc-15648-17ee2e.jpg",
      "/produtos/wc-15648-b03cf9.jpg",
      "/produtos/wc-15648-c59cd5.jpg",
      "/produtos/wc-15648-a04b5a.jpg",
      "/produtos/wc-15648-b04137.jpg"
    ],
    sku: "MCS-15648",
    weight: 1,
    weightLabel: "15 × 15 × 15 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15647",
    name: "Microfone Lapela Gravata omnidirecional- BY-M1 Pro [BOYA]",
    category: "microfones",
    subcategory: "boya",
    categoryLabel: "Linha BOYA",
    description: "Microfone com clip para smartphones, DSLRs, filmadoras, áudio gravadores, PC etc. • Microfone condensador de alta qualidade, ideal para uso em vídeo. • Baixo ruído de manuseio. • Atenuação sonora de -10dB. • Monitoramen",
    longDescription: "O BOYA BY-M1 Pro é um microfone de lapela universal, compatível com smartphones, PC, câmeras, gravadores de áudio e outros dispositivos de gravação, etc. Cabo de 6 m de comprimento, pára-brisas de espuma e design de clipe de lapela Com um design de cabo longo de 6m de comprimento, o BOYA BY-M1 Pro pode suportar transmissão de sinal estável, adaptando-se a um ambiente de gravação de longa distância. foam windscreen e um clipe de lapela permitem que os usuários obtenham um som mais claro e um ambiente mais livre. Redução inteligente de ruído, suporte a monitoramento real Com um interruptor de pad de -10dB, o BOYA BY-M1 Pro reduz efetivamente a plosiva indesejada quando o som do assunto é muito alto e próximo ao microfone, garantindo que a gravação seja sempre nítida. Com um fone de ouvido de 3/8″ no design inferior, ele permite que os usuários monitorem o som no modo smartphone. Microfone de encaixe omnidirecional, libere seu potencial Com condensador de alta qualidade, o BOYA BY-M1 Pro é ideal para uso em vídeo. Com um microfone de lapela tão universal, compatível com smartphones, PC, câmeras, gravadores de áudio e outros dispositivos de gravação, etc., você pode desfrutar de áudio profissional. Transducer: Electret condenser Polar Pattern: Omni-directional Frequency range: 65 Hz ~ 18 KHz Signal/Noise: 78 dB SPL Sensitivity: -30 dB +/- 3 dB / 0 dB=1V/Pa, 1 kHz Output impedance: 1000 Ohm or less Battery type: LR44 included (compatible with LR44, 357, and SR44) Connector: 3.5mm (1/8”) 4-pole gold plug Pad Switch: 0/-10dB Dimensions: 6.0m Weight: 58g",
    price: 120.75,
    image: "/produtos/wc-15647-b3f7d6.jpg",
    images: [
      "/produtos/wc-15647-be1d2a.jpg",
      "/produtos/wc-15647-8523c3.jpg",
      "/produtos/wc-15647-a889d2.jpg",
      "/produtos/wc-15647-740cda.jpg",
      "/produtos/wc-15647-7a11eb.jpg",
      "/produtos/wc-15647-4e833e.jpg",
      "/produtos/wc-15647-0d8ff4.jpg"
    ],
    sku: "MCS-15647",
    weight: 1,
    weightLabel: "15 × 15 × 15 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15646",
    name: "Microfone Lapela Omnidirecional Duplo BY-M1DM – [BOYA]",
    category: "microfones",
    subcategory: "lapela-2-microfone",
    categoryLabel: "Lapela Dupla",
    description: "• Design de microfone duplo para dois alto-falantes. • Trabalhe com câmeras, smartphones e computadores. • Ideal para entrevista, diálogo, podcasting e transmissão ao vivo etc • Padrão polar omnidirecional.• Relação sin",
    longDescription: "O BOYA BY-M1DM é um microfone de lapela de microfone duplo ideal para entrevistas, diálogos, podcasting, transmissão ao vivo e qualquer situação que exija dois alto-falantes. Dois microfones de lapela capturando áudios de alta qualidade Projetado com duas cápsulas omnidirecionais, ele captura dois sons com qualidade de transmissão de 360° e os entrega ao seu dispositivo de gravação por meio de seu cabo de 4 m (13 pés). Com sensibilidade aprimorada, relação sinal-ruído e resposta de frequência plana, o BY-M1DM permite gravar todos os detalhes de áudio com menor ruído próprio. Dois modos de gravação para diferentes cenários de uso Com um conector de saída TRRS de 3,5 mm, você pode conectar o BY-M1DM à sua câmera e filmadora no modo “câmera” e ao seu smartphone ou PC ao alternar para o modo “OFF/Smartphone”. Cada acessório necessário está incluído Em termos de acessórios, você encontrará clipe de lapela, windscreen de espuma tudo no pacote e uma bateria LR44 para usar o modo “câmera”, um adaptador de áudio de 1/4″ para outro dispositivo compatível e uma bolsa de transporte.",
    price: 120.75,
    image: "/produtos/wc-15646-3d0d1e.jpg",
    images: [
      "/produtos/wc-15646-a2a7dd.jpg",
      "/produtos/wc-15646-13986c.jpg",
      "/produtos/wc-15646-535ad9.jpg",
      "/produtos/wc-15646-fa9c1d.jpg",
      "/produtos/wc-15646-30e057.jpg",
      "/produtos/wc-15646-09985a.jpg"
    ],
    sku: "MCS-15646",
    weight: 1,
    weightLabel: "16 × 16 × 19 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15645",
    name: "Microfone de Lapela com Fio BY-LM40 [BOYA]",
    category: "microfones",
    subcategory: "boya",
    categoryLabel: "Linha BOYA",
    description: "Microfone de lapela com clip USB omnidirecional. • Compatível com computadores Windows e Mac. • Plug and play, sem necessidade de bateria. • Sem drivers e fácil de usar. • Cabo USB de 4 m (13 pés).",
    longDescription: "O BOYA BY-LM40 é um microfone de lapela USB omnidirecional de alta qualidade para o seu computador. Compatível com Macs e computadores Windows Apresentando um conector de saída USB-A, o BY-LM40 pode ser conectado a computadores Macs e Windows com uma interface USB-A. E sua cápsula omnidirecional capta e transmite o ao seu computador por meio do cabo de áudio de 4 m (13 pés). Plug and play Não há necessidade de baterias externas para alimentá-lo, os usuários podem conectá-lo a computadores e começar. Conector de saída: USB-A Padrão Polar: Omnidirecional Resposta de frequência: 100Hz-10kHz Sensibilidade: -38±2dB Relação sinal-ruído ≥65dB Taxa de amostragem: 24bit/48kHz Comprimento do cabo: 4 m (13 pés) Peso: 36g",
    price: 163.8,
    image: "/produtos/wc-15645-cf1c77.jpg",
    images: [
      "/produtos/wc-15645-44adb9.jpg",
      "/produtos/wc-15645-81751e.jpg",
      "/produtos/wc-15645-685408.jpg",
      "/produtos/wc-15645-51a0ba.jpg",
      "/produtos/wc-15645-2aff06.jpg",
      "/produtos/wc-15645-acda02.jpg"
    ],
    sku: "MCS-15645",
    weight: 1,
    weightLabel: "15 × 15 × 15 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15644",
    name: "Lâmpada Diamond Para Projetor Epson Elplp54 / V13h010l54",
    category: "acessorios",
    subcategory: "lampada",
    categoryLabel: "Lâmpadas",
    description: "Os fabricantes de lâmpadas originais trabalham em estreita colaboração com os fabricantes de projetores para garantir que a configuração da lâmpada ofereça o melhor desempenho dentro da configuração do projetor. As lâmp",
    longDescription: "Macsym Áudio e Vídeo apresenta: Lâmpada Diamond Para Projetor Epson Elplp54 / V13h010l54 Este é um módulo completo para substituição da lâmpada de projetores Epson e é fabricado exatamente com as mesmas especificações técnicas definidas pelo fabricante original do projetor. O módulo Diamond utiliza o mesmo Bulbo (lâmpada) original do fabricante e se encaixa dentro de um módulo Diamond de alta qualidade garantindo que a lâmpada não só ofereça preço competitivo, mas também a mesma qualidade e mesmo padrão que o módulo original do fabricante. As lâmpadas Diamond são tão confiáveis que o fabricante oferece uma garantia de seis meses na lâmpada. Esta lâmpada é 100% compatível com os seguintes modelos de projetores EPSON:. – EB-S7 – EB-S72 – EB-S8 – EB-S82 – EB-W7 – EB-W8 – EB-X7 – EB-X72 – EB-X8 – EB-X8e – EH-TW450 – EX31 – EX51 – EX71 – H309A – H309C – H310C – H311B – H311C – H312A – H312B – H312C – H327A – H327C – H328A – H328B – H328C – H331A – PowerLite 79 – PowerLite HC 705HD – PowerLite S7 – PowerLite S8+ – PowerLite W7 GARANTIA DE 6 MESES CONTRA DEFEITOS DE FABRICAÇÃO! Durabilidade: 4000 horas Potência: 175 W",
    price: 384.3,
    image: "/produtos/wc-15644-db703d.png",
    images: [
      "/produtos/wc-15644-ea33ac.png",
      "/produtos/wc-15644-cc59f2.png"
    ],
    sku: "MCS-15644",
    weight: 1,
    weightLabel: "30 × 30 × 30 cm",
    active: true,
    highlight: false
  },
  {
    id: "wc-15643",
    name: "Mesa Controladora PTZ MTE-KZ1 | Joystick Profissional, Suporte 255 Câmeras, VISCA/Pelco, RS232/RS485",
    category: "mesa-controladora",
    categoryLabel: "Mesas Controladoras",
    description: "Protocolo de comunicação para controle suportados: VISCA, Pelco-D e Pelco-P Interface de comunicação disponíveis: RS232, RS422 e RS485. Número de câmeras que podem ser controladas: Controle até 255 câmeras PTZ e até 255",
    longDescription: "Especificações Técnicas: • Taxa de transmissão: 1200bps, 2400bps, 4800bps, 9600bps, 19200bps • Comunicação: RS485 / RS422 Full-duplex, porta serial 232 • Interface: terminal de linha de pressão de 5 pinos e interface 232 • Temperatura de trabalho: -10 ° C a 50 ° C • Visor: tela LCD (95 x 20 mm) • Fonte de alimentação: DC 12V / 2A • Dimensão / peso do item: 320x180x53mm / 1,5 kg • Embalagem / peso: 355x225x140mm / 2,5kg",
    price: 1759,
    oldPrice: 2476.95,
    image: "/produtos/wc-15643-a5df4e.jpg",
    images: [
      "/produtos/wc-15643-fc2c09.jpg",
      "/produtos/wc-15643-89b238.jpg",
      "/produtos/wc-15643-12bdbf.jpg",
      "/produtos/wc-15643-9fc732.jpg"
    ],
    sku: "MCS-15643",
    weight: 1,
    weightLabel: "35 × 17 × 26 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15642",
    name: "Microfone Com Captação De Áudio Em 360 P/ Videoconferência",
    category: "microfones",
    categoryLabel: "Microfones",
    description: "* Exclusivo design portátil e leve para que você possa utiliza-lo fora do escritório e com bateria para 4 horas de conversação;* Adequado para salas de reuniões com até 60 metros quadrados. Indicado para reuniões com at",
    longDescription: "MTE-A3000 um Microfone com captação de áudio em 360 graus para videoconferência.Características principais do microfone para videoconferência MTE-A3000 * 4 microfones de alta sensibilidade integrados com captação de áudio em 360 graus até 4 metros;* 2 microfones extensores opcionais para conexão aumentam o diâmetro de captação de som para até 8 metros;* Conectividade plug & play intuitiva que se conecta em segundos ao laptop, smartphone e tablet via USB (modelo A3000) ou através de plugue de áudio P2;* Possui cancelamento de eco full duplex de 22KHz e sistema de redução de ruído para remover o ruído ambiente da sala;* A tecnologia DSP avançada oferece áudio incrivelmente rico e cristalino;* Som envolvente tanto para conversação como para música. O microfone do tipo Omnidirecional com captação High Definition (HD) é ideal para voz, música e multimídia;* Exclusivo design portátil e leve para que você possa utiliza-lo fora do escritório e com bateria para 4 horas de conversação;* Adequado para salas de reuniões com até 60 metros quadrados. Indicado para reuniões com até 20 pessoas;* Possui uma saída de áudio do tipo P2 (3,5 mm) que pode ser conectada a um fone de ouvido externo ou caixas de som;* Funciona com a maioria dos softwares para videoconferência e Streaming tais como ZOOM, Vidyo, Webex, Skype para empresas, Google Meeting, OBS, etc.",
    price: 2140.4,
    oldPrice: 2378.25,
    image: "/produtos/wc-15642-814aee.png",
    images: [
      "/produtos/wc-15642-a7b112.png",
      "/produtos/wc-15642-4f2d18.png",
      "/produtos/wc-15642-e1c29e.png"
    ],
    sku: "MCS-15642",
    weight: 2,
    weightLabel: "35 × 26 × 36 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15641",
    name: "Câmera PTZ Profissional MTE-VHD20N – 20X Zoom, Full HD 1080P – HDMI e SDI",
    category: "cameras-ptz",
    subcategory: "zoom-optico-20x",
    categoryLabel: "Zoom Óptico 20x",
    description: "MTE-VHD20N é reconhecida automaticamente pelo sistema operacional ela é compatível com os principais softwares e plataformas de videoconferência: * Zoom * Polycom * Microsoft Lync * CISCO WebEx * Skype para negócios Com",
    longDescription: "1- Zoom 20X, Design elegante e inteligente e Conectividade USB Plug and Play, HDMI e SDI, 2- Qualidade de imagem Full HD 1080P cristalina, movimento PTZ preciso, suave e silencioso; 3- Predefinição: 9 via configuração pelo controle remoto IR e 256 via RS232; 4- Qualidade superior com material de lente de vidro completo; 5- Campo de visão 51 graus sem distorção de vídeo; 6- 1/2.9 inch HD CMOS de alta qualidade, 2.38 MEGA PIXEL (formato 16 : 9) com resoluções 1080P, 1080I e 720P 7- Suporte de montagem no teto, montagem em parede e montagem em tripé (montagem reversa); 8- 2D e 3D NR para melhor qualidade de vídeo em diferentes condições de iluminação; 9- Suporte aos protocolos Visca, Pelco-P e Pelco-D, controle de câmera RS232 / RS485;",
    price: 2949,
    oldPrice: 4148.55,
    image: "/produtos/wc-15641-ee8f57.png",
    images: [
      "/produtos/wc-15641-fed094.png",
      "/produtos/wc-15641-459e48.png",
      "/produtos/wc-15641-38cbac.png",
      "/produtos/wc-15641-3d49cb.png"
    ],
    sku: "MCS-15641",
    weight: 2,
    weightLabel: "35 × 25 × 25 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15640",
    name: "Câmera PTZ para Videoconferência MTE-VHD3U – Zoom 3X, Full HD 1080P, Plug-and-Play",
    category: "cameras-ptz",
    subcategory: "zoom-optico-3x",
    categoryLabel: "Zoom Óptico 3x",
    description: "MTE-VHD3U é reconhecida automaticamente pelo sistema operacional ela é compatível com os principais softwares e plataformas de videoconferência: * Zoom * Polycom * Microsoft Lync * CISCO WebEx * Skype para negócios Comp",
    longDescription: "Características técnicas: 1- Zoom óptico 3x, Design elegante e inteligente, Conectividade USB Plug and Play; 2- Qualidade de imagem HD 1080 P cristalina, movimento PTZ preciso, suave e silencioso; 3- Predefinição: 9 via configuração pelo controle remoto IR e 256 via RS232; 4- Qualidade superior com material de lente de vidro completo; 5- Campo de 55 graus sem zoom e 3 graus com zoom máximo; 6- Sensor 1/3 inch Exmor CMOS de alta qualidade, 2,38 MEGA PIXEL (formato 16 : 9); 7- Suporte de montagem no teto, montagem em parede e montagem em tripé (montagem reversa); 8- 2D e 3D NR para melhor qualidade de vídeo em diferentes condições de iluminação; 9- Suporte aos protocolos Visca, Pelco-P e Pelco-D, controle de câmera RS232 / RS485;",
    price: 1790,
    oldPrice: 2623.95,
    image: "/produtos/wc-15640-f67ce2.png",
    images: [
      "/produtos/wc-15641-3d49cb.png",
      "/produtos/wc-15640-18fd98.png",
      "/produtos/wc-15641-459e48.png",
      "/produtos/wc-15641-38cbac.png"
    ],
    sku: "MCS-15640",
    weight: 2,
    weightLabel: "35 × 25 × 25 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  },
  {
    id: "wc-15638",
    name: "Câmera PTZ Profissional MTE-VHD102U – Zoom Óptico 10X, Full HD 1080P",
    category: "cameras-ptz",
    subcategory: "zoom-optico-10x",
    categoryLabel: "Zoom Óptico 10x",
    description: "MTE-VHD102U é reconhecida automaticamente pelo sistema operacional ela é compatível com os principais softwares e plataformas de videoconferência: * Zoom * Polycom * Microsoft Lync * CISCO WebEx * Skype para negócios Co",
    longDescription: "Características técnicas: 1- Zoom óptico 10x, Design elegante e inteligente, Conectividade USB Plug and Play; 2- Qualidade de imagem HD 1080 P cristalina, movimento PTZ preciso, suave e silencioso; 3- Predefinição: 9 via configuração pelo controle remoto IR e 256 via RS232; 4- Qualidade superior com material de lente de vidro completo; 5- Campo de 47 graus sem zoom e 5,3 graus com zoom máximo; 6- Sensor 1/2,9 polegadas SONY HD CMOS de alta qualidade, 2,38 MEGA PIXEL (formato 16 : 9); 7- Suporte de montagem no teto, montagem em parede e montagem em tripé (montagem reversa); 8- 2D e 3D NR para melhor qualidade de vídeo em diferentes condições de iluminação; 9- Suporte aos protocolos Visca, Pelco-P e Pelco-D, controle de câmera RS232 / RS485;",
    price: 1859,
    oldPrice: 2321.55,
    image: "/produtos/wc-15640-f67ce2.png",
    images: [
      "/produtos/wc-15641-3d49cb.png",
      "/produtos/wc-15640-18fd98.png",
      "/produtos/wc-15641-459e48.png"
    ],
    sku: "MCS-15638",
    weight: 2,
    weightLabel: "35 × 25 × 25 cm",
    active: true,
    highlight: true,
    tag: "OFERTA"
  }
];
