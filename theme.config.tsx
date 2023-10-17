import { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  banner: {
    key: "2.0-release",
    text: (
      <a href="https://nextra.site" target="_blank">
        🎉 Selendra 2.0 is released. Read more →
      </a>
    ),
  },
  logo: (
    <>
      <img src="/images/logo.png" width={120} alt="Selendra" />
    </>
  ),
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    component: null,
  },
  primaryHue: 200,
  primarySaturation: 100,
  nextThemes: {
    defaultTheme: "light",
  },
  darkMode: true,
  gitTimestamp: null,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Selendra" />
      <meta property="og:description" content="The next site builder" />
      {/* <meta name="theme-color" content="#f5f5f5" /> */}
    </>
  ),
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s – Selendra",
    };
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
};

export default config;
