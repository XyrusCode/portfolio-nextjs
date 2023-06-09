import { MDXRemote } from 'next-mdx-remote';
import SnippetLayout from 'layouts/snippets';
import components from 'components/MDXComponents';
// import { snippetsQuery, snippetSlugsQuery } from 'lib/queries';
// import { mdxToHtml } from 'lib/mdx';
import { Snippet } from 'lib/types';

const SnippetsPage = ({ snippet }: { snippet: Snippet }) =>  {
  return (
    <SnippetLayout snippet={snippet}>
      <MDXRemote {...snippet.content} components={components} />
    </SnippetLayout>
  );
}

type Params = {
  params: {
    slug: string
  }
}

export const getStaticPaths = async () => {
    // @ts-ignore
  const paths = [];
  return {
      // @ts-ignore
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

  // @ts-ignore
export const getStaticProps= async ({ params, preview = false }) => {
  const snippet  = {};
  // await getClient(preview).fetch(snippetsQuery, {
  //   slug: params.slug
  // });

  if (!snippet) {
    return { notFound: true };
  }
  // @ts-ignore
  const { html } = await mdxToHtml(snippet.content);

  return {
    props: {
      snippet: {
        ...snippet,
        content: html
      }
    }
  };
};

export default SnippetsPage;
