import { postSlugsQuery } from 'lib/queries';

const createSitemap = (slugs: [any]) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map((slug) => {
            return `
                <url>
                    <loc>${`https://xyruscode.com.ng/${slug}`}</loc>
                </url>
            `;
          })
          .join('')}
    </urlset>
`;
export async function getServerSideProps({ res }: any) {
  const allPosts: any = [];
  const allPages = [
    ...allPosts.map((slug: any) => `blog/${slug}`),
    ...[
      '',
      'about',
      'blog',
      'dashboard',
      'projects',
      'tweets',
      'uses'
    ]
  ];

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
    // @ts-ignore
  res.write(createSitemap(allPages));
  res.end();

  return {
    props: {}
  };
}

const Sitemap = () => {
  return null;
};

export default Sitemap;
