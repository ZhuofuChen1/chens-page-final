// @ts-check
// Note: type annotations allow type checking and IDE autocompletion

const config = {
  title: "Zhuofu Chen",
  tagline: "Personal study and interest blog",
  url: "https://ZhuofuChen1.github.io",
  baseUrl: "/chens-page-final/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config
  organizationName: "ZhuofuChen1",
  projectName: "chens-page-final",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ZhuofuChen1/chens-page-final/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/ZhuofuChen1/chens-page-final/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/pages/index.module.css"),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Zhuofu Chen",
      logo: {
        alt: "Zhuofu Chen Logo",
        src: "img/zhuofu_avatar.jpg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "universityCoursesSidebar",
          position: "left",
          label: "University Courses",
        },
        {
          type: "docSidebar",
          sidebarId: "externalReadingSidebar",
          position: "left",
          label: "External Reading",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/ZhuofuChen1/chens-page-final",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "University Courses", to: "/docs/University_courses/intro" },
            { label: "External Reading", to: "/docs/External_reading/intro" },
          ],
        },
        {
          title: "Community",
          items: [
            { label: "GitHub", href: "https://github.com/ZhuofuChen1/chens-page-final" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zhuofu Chen. Built with Docusaurus.`,
    },
  },
};

module.exports = config;








