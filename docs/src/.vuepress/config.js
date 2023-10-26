module.exports = {
  title: "Api Personalizada",
  description: "Api Personalizada",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://github.com/EduardoProfe666/Proyecto-Api-Personalizada/wiki/assets/img/icono.png",
      },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "EduardoProfe666/Proyecto-Api-Personalizada",
    repoLabel: "Proyecto Api Personalizada",
    editLinks: false,
    docsDir: "docs",
    editLinkText: "",
    searchPlaceholder: 'Buscar...',
    lastUpdated: false,
    nav: [
      {
        text: "Instalación",
        link: "/instalacion/",
      },
      {
        text: "Componentes Visuales",
        link: "/comp-vis/",
      },
      {
        text: "Lógica",
        link: "/comp-logic/",
      },
    ],
    sidebar: {
      "/instalacion/": [
        {
          title: "Instalación",
          collapsable: true,
          children: [
            "",
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
          collapsable: true,
          children: [""],
        },
      ],
      "/comp-logic/": [
        {
          title: "Lógica",
          collapsable: true,
          children: [""],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  // plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],

  base: "/api-personalizada-wiki-vuepress/",
};
