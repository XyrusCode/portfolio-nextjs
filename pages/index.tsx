import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
// import ProjectCard from '../components/ProjectCard';
// import BlogPostCard from '../components/BlogPostCard';

const Home = () => {
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

          <h3 className="pt-5 font-bold text-2xl md:text-4xl tracking-tight text-black dark:text-white">
            This is under construction. I&apos;m currently experimenting with a lot of stuff for this so it might take a while. 
          </h3>
          <h3 className="pt-5 font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            There are supposed to be posts from my Hashnode blog under here but seeing as I haven&apos;t written any posts yet and I haven&apos;t quite figured out their API I&apos;m just going to leave it blank.  but you can check out my recent projects below. 👇
          </h3>
          {/* <div className="flex gap-6 flex-row md:flex-row">
            <ProjectCard
              title="Xyrus&apos; Movie Database"
              link="https://movie.xyruscode.com.ng"
              gradient="from-[#D8B4FE] to-[#818CF8]"
              image={"/projects/xmdb.png"}
            />
            <ProjectCard
              title="Xyrus&apos; Music"
              link="https://movie.xyruscode.com.ng"
              gradient="from-[#D8B4FE] to-[#818CF8]"
              image={"/projects/xmdb.png"}
            />
          </div> */}
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