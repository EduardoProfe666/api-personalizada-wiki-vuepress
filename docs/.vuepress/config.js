import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";

export default {
  title: "Api Personalizada",
  description: "Api Personalizada",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#8748c6" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/icons/favicon.png",
      },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: defaultTheme({
    repo: "EduardoProfe666/Proyecto-Api-Personalizada",
    repoLabel: "👾Proyecto Api Personalizada👾",
    editLink: true,
    editLinkPattern: 'https://github.com/EduardoProfe666/api-personalizada-wiki-vuepress/edit/:branch/:path',
    editLinkText: 'Editar Documentación',
    contributorsText: 'Contribuyentes',
    docsDir: 'docs',
    lastUpdatedText: 'Última actualización',
    searchPlaceholder: "Buscar...",
    lastUpdated: true,
    logo: "/icons/favicon.png",
    smoothScroll: true,
    navbar: [
      {
        text: "Instalación",
        link: "/instalacion/",
      },
      {
        text: "Componentes",
        children: [
          { text: "Componentes Visuales", link: "/comp-vis/" },
          { text: "Componentes de la Lógica", link: "/comp-logic/" },
        ],
      },
      {
        text: 'Historial de cambios', link: 'https://github.com/EduardoProfe666/Proyecto-Api-Personalizada/blob/main/CHANGELOG.md', target:'_blank', rel:false
      }
    ],
    sidebar: {
      "/instalacion/": [
        {
          title: "Instalación",
          children: [
            "/instalacion/README.md",
            "Descarga",
            "Importacion",
            "PruebaVisual",
            "Javadoc",
            "Source",
            "Bibliotecas",
          ],
        },
      ],
      "/comp-vis/": [
        {
          title: "Componentes Visuales",
          children: [
            "/comp-vis/README.md",
            "AvatarCircular",
            "BotonAnimacion",
            "CampoCIValidado",
            "CarruselImagenes",
            "Imagen",
            "ImagenAnimada",
            "JLabelAnimacion",
            "JLabelHora",
            "JLabelMultilineaMultialineado",
            "JTextFieldModificado",
            "Linea",
            "Notificaciones",
            "NotificacionesModernas",
            "PanelAnimacionCurvas",
            "PanelBordeOval",
            "PanelGradiente",
            "PanelGradienteH",
            "PanelGradienteV",
            "RelojAnalogico",
          ],
        },
      ],
      "/comp-logic/": [
        {
          title: "Lógica",
          children: [
            "/comp-logic/README.md",
            {
              text: "Utilidades",
              children: [
                "/comp-logic/utilidades/Auxiliares.md",
                "/comp-logic/utilidades/AuxiliaresVisuales.md",
                "/comp-logic/utilidades/GeneradorCICubano.md",
                "/comp-logic/utilidades/GeneradorContrasenas.md",
                "/comp-logic/utilidades/GeneradorNombres.md",
                "/comp-logic/utilidades/ManejadorLookAndFeels.md",
                "/comp-logic/utilidades/Validaciones.md",
              ],
            },
            {
              text: "Algoritmos",
              children: [
                "/comp-logic/algoritmos/Busqueda.md",
                "/comp-logic/algoritmos/Ordenamiento.md",
              ],
            },
            {
              text: "Modelos",
              children: ["/comp-logic/modelos/ModeloPrincipalTableModel.md"],
            },
          ],
        },
      ],
    },
    sidebarDepth: 2,
    tip: "Nota",
    warning: "Advertencia",
    danger: "Importante",
    notFound: [
      "La página a la que se desea acceder no existe. Revise si cometió algún un error de escritura.",
    ],
    backToHome: "Regresar a Inicio",
    toggleColorMode: "Cambiar Modo de Color",
  }),

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress-plugin-clean-urls",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/plugin-nprogress",
    searchPlugin({
      maxSuggestions: 15,
      hotKeys: ["b", "/"],
      locales: {
        "/": {
          placeholder: "Buscar...",
        },
      },
    }),
  ],

  base: "/api-personalizada-wiki-vuepress/",
};
