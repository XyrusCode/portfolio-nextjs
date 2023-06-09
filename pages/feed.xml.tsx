import RSS from 'rss';
import { indexQuery } from 'lib/queries';

export const getServerSideProps = async({ res }: any) => {
  const feed = new RSS({
    title: 'Prince Shammah',
    site_url: 'https://xyruscode.com.ng',
    feed_url: 'https://xyruscode.com.ng/feed.xml'
  });

  const allPosts: any = [];
  allPosts.map((post: { title: any; slug: any; date: any; excerpt: any; }) => {
    feed.item({
      title: post.title,
      url: `https://xyruscode.com.ng/blog/${post.slug}`,
      date: post.date,
      description: post.excerpt
    });
  });

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
  res.write(feed.xml({ indent: true }));
  res.end();

  return {
    props: {}
  };
}

const RSSFeed = () => {
  return null;
}

export default RSSFeed;
