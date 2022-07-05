// import cx from 'classnames';
import { graphql } from 'gatsby';
import React from 'react';

import CardsList from '../components/layout/Documentation/CardList';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
import SearchDocumentation from '../components/ui/SearchDocumentation';

export default function Home({ data }) {
  const { content } = data;
  return (
    <Layout mode="full">
      <SEO title="Home" />
      <Section className="text-center mt-12">
        <h1 className="mb-8 text-4xl lg:text-6xl md:text-6xl font-title font-extrabold">Substrate Documentation</h1>
        <div className="sm:max-w-lg mx-auto mb-10">
          <p className="max-w-lg text-xl">
            Where blockchain innovators discover & share reusable pallets for use with Parity Substrate, the open-source
            blockchain framework.
          </p>
        </div>
        <SearchDocumentation />
      </Section>
      <Section className="flex justify-center">
        <CardsList data={content.edges} />
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    content: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//(homepage)/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            order
            description
            bodyLinkOneURL
            bodyLinkOneTitle
            bodyLinkTwoURL
            bodyLinkTwoTitle
            bodyLinkThreeURL
            bodyLinkThreeTitle
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
