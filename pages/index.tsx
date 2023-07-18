import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getHashnodePosts } from 'lib/queries';
import type { Post } from 'types/posts';
// Custom components
import Container from '../components/Container';
// import ProjectCard from '../components/ProjectCard';
import BlogPostCard from '../components/BlogPostCard';
// import TopTracks from '../components/TopTracks'

type Props = {
  posts: Post[]
};

const Home = ({posts}: Props) => {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Prince Shammah
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Full Stack Engineer
              </h2>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Prince Shammah"
                height={176}
                width={176}
                src="/xyrus.png"
                sizes="30vw"
                priority
                className="rounded-full"
              />
            </div>
          </div>

          <p className="pt-5 font-bold text-md md:text-3xl tracking-tight text-black dark:text-white">
            Welcome to my site. I&apos;m a software developer based in Nigeria. I write about the code I write and the tech I use. I&apos;ll mostly be talking about how I built this site.
          </p>
            <p className="pt-5 font-bold text-md md:text-3xl tracking-tight text-black dark:text-white">
            This runs on Next.js, is being deployed from Vercel and served via Cloudflare.
          </p>
          <h3 className="pt-7 font-bold text-xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Recent Posts
          </h3>
          <div className="mx-auto sm:flex grid justify-items-center lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none ">
          {posts.map((post) => {
  return (
    <BlogPostCard
    _id={post._id}
    key={post._id}
    title={post.title}
    slug={post.slug}
    popularity={post.totalReactions}
    gradient="from-[#D8B4FE] to-[#818CF8]"
    />
  )
})}
          </div>
          <Link
            href="/projects"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'See all Projects'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link>

        </div>
      </Container>
    </Suspense>
  );
}

export default Home;

export async function getStaticProps() {
  const posts = await getHashnodePosts();

  return {
    props: {
      posts,
    },
  }
};