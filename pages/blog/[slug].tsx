// import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from 'layouts/blog';
import Tweet from 'components/Tweet';
import components from 'components/MDXComponents';
import { getHashnodePostsBySlug, fetchAllPostSlugs } from 'lib/queries';
// import { getTweets } from 'lib/twitter';
import { mdToHtml } from 'lib/mdx';
import { Post } from 'types/posts'

const PostPage = ({ post }: { post: Post }) => {
  // const StaticTweet = ({ id }) => {
  //   const tweet = post.tweets.find((tweet) => tweet.id === id);
  //   return <Tweet {...tweet} />;
  // };

  return (
    <BlogLayout post={post}/>
  );
}

export default PostPage;


type Params = {
  params: {
    slug: string,
  };
  preview: boolean;
}

export async function getStaticProps({ params, preview = false }: Params) {
  const post = await getHashnodePostsBySlug(params.slug);

  if (!post) {
    return { notFound: false };
  }

  return {
    props: {
      post,
    }
  };
};

export async function getStaticPaths() {
  // Fetch the slugs for all available posts
  const posts = await fetchAllPostSlugs(); // Implement this function to fetch the post slugs
  console.log(`fetchAllPostSlugs ${fetchAllPostSlugs}`)

  // Generate an array of paths based on the fetched slugs
  const paths = posts.map((slug: string) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}



