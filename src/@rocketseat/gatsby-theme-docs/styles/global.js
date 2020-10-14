import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { lighten } from 'polished';

export default function GlobalStyle() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        *::selection {
          background: ${lighten('0.35', '#737380')}!important;
        }

        body {
          font-size: 1.3rem;
          font-family: 'Roboto', sans-serif;
          background-color: ${theme.colors.background};
          text-rendering: optimizelegibility;
        }

        h1 {
          font-size: 2rem;
          color: #ddd;
          font-weight: normal;
          margin-bottom: 1rem;
        }

        h2 {
          font-size: 1.7rem;
        }

        h3 {
          font-size: 1.5rem;
        }

        h4 {
          font-size: 1.3rem;
        }

        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #bbb;
          margin: .7rem 0 .5rem 0;
          font-weight: normal;
        }

        p {
          color: #737380;
          font-size: 1.2rem;
          line-height: 1.4rem;
          margin-bottom: 1rem;
          font-weight: 400;
        }

        code.inline-code {
          display: inline-block;
          vertical-align: middle;
          line-height: 1;
          padding: 0.2rem 0.2rem 0.3rem 0.2rem;
          background-color: #44475a;
          color: rgba(248, 248, 242);
          font-size: 1rem;
          border-radius: .3rem;
          font-feature-settings: 'clig' 0, 'calt' 0;
          font-variant: no-common-ligatures no-discretionary-ligatures
            no-historical-ligatures no-contextual;
        }

        a {
          color: #737380;
          font-weight: bold;

          &:hover {
            color: ${theme.colors.primary}!important;
            transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
            opacity: 1 !important;
          }
        }

        blockquote {
          margin: 0;

          p {
            padding: 1rem;
            background: #f5f5fa;
            border-radius: .5rem;
          }
        }

        hr {
          border: 0;
          height: 0;
          border-top: .1rem solid rgba(0, 0, 0, 0.1);
          border-bottom: .1rem solid rgba(255, 255, 255, 0.3);
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
          width: 100%;
          margin-bottom: 16px;
          color: #444;
        }

        th {
          color: #111;
          background-color: #eee;
        }

        th,
        td {
          text-align: left;
          padding: .8rem;
        }

        tr:nth-of-type(2n) td {
          background-color: #ddd;
        }

        tr {
          background-color: #aaa;
        }

        iframe {
          margin-bottom: 1.6rem;
        }

        img {
          max-width: 100%;
        }

        ul,
        ol {
          color: #737380;
          padding-left: 15px;
          margin-bottom: 16px;

          li {
            line-height: 28px;
          }
        }

        .gatsby-highlight {
          position: relative;

          .token {
            font-style: normal !important;
          }
        }

        pre[class*='language-']::before {
          background: #d9d7e0;
          border-radius: 0 0 .4rem .4rem;
          color: #232129;
          font-size: 1rem;
          font-family: SFMono-Regular, Menlo, Monaco, Consolas,
            'Liberation Mono', 'Courier New', monospace;
          letter-spacing: 0.075rem;
          line-height: 1;
          padding: 0.25rem 0.5rem;
          position: absolute;
          left: 1rem;
          text-align: right;
          text-transform: uppercase;
          top: 0;
        }

        pre[class*='language-'] code {
          font-family: SFMono-Regular, Menlo, Monaco, Consolas,
            'Liberation Mono', 'Courier New', monospace;
          font-variant: no-common-ligatures no-discretionary-ligatures
            no-historical-ligatures no-contextual;
        }

        pre[class~='language-js']::before,
        pre[class~='language-javascript']::before {
          content: 'js';
          background: #f7df1e;
        }

        pre[class~='language-jsx']::before {
          content: 'jsx';
          background: #61dafb;
        }

        pre[class~='language-typescript']::before,
        pre[class~='language-ts']::before {
          content: 'ts';
          background: #294e80;
          color: #fff;
        }

        pre[class~='language-tsx']::before {
          content: 'tsx';
          background: #294e80;
          color: #fff;
        }

        pre[class~='language-graphql']::before {
          content: 'GraphQL';
          background: #e10098;
          color: #fff;
        }

        pre[class~='language-html']::before {
          content: 'html';
          background: #005a9c;
          color: #fff;
        }

        pre[class~='language-css']::before {
          content: 'css';
          background: #ff9800;
          color: #fff;
        }

        pre[class~='language-mdx']::before {
          content: 'mdx';
          background: #f9ac00;
          color: #fff;
        }

        pre[class~='language-shell']::before {
          content: 'shell';
        }

        pre[class~='language-sh']::before {
          content: 'sh';
        }

        pre[class~='language-bash']::before {
          content: 'bash';
        }

        pre[class~='language-yaml']::before {
          content: 'yaml';
          background: #ffa8df;
        }

        pre[class~='language-markdown']::before {
          content: 'md';
        }

        pre[class~='language-json']::before,
        pre[class~='language-json5']::before {
          content: 'json';
          background: linen;
        }

        pre[class~='language-diff']::before {
          content: 'diff';
          background: #e6ffed;
        }

        pre[class~='language-text']::before {
          content: 'text';
          background: #fff;
        }

        pre[class~='language-flow']::before {
          content: 'flow';
          background: #e8bd36;
        }
      `}
    />
  );
}
