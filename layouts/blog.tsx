
import Image from 'next/image';
import Script from 'next/script';
import { parseISO, format } from 'date-fns';
import { PropsWithChildren, Suspense } from 'react';
import Container from 'components/Container';
import ViewCounter from 'components/ViewCounter';
import DisqusComments from 'components/DisqusComments'; 
import { Post } from 'types/posts';

const BlogLayout = ({
  post
}: PropsWithChildren<{ post: Post }>) => {

  const createPostContent = () => {
    return post.content;
  }
  return (
    <Container
      title={`${post.title} – Xyrus Code`}
      description={post.excerpt}
      image={post.coverImage}
      date={new Date(post.dateAdded).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Prince Shammah"
              height={24}
              width={24}
              sizes="20vw"
              src="/xyrus.png"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Prince Shammah / '}
              {format(parseISO(post.dateAdded), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {/* {post.readingTime}
            {` • `} */}
            <ViewCounter isCard={false} slug={post.slug}/>
          </p>
        </div>
        <Suspense fallback={null}>
          <div className="w-full mt-4 prose dark:prose-dark max-w-none">
  <div dangerouslySetInnerHTML={{__html: post.content}} id='content'/>
          </div>
          <DisqusComments
              pageUrl={`https://xyruscode.com.ng/blog/${post.slug}`} // Adjust the URL
              pageIdentifier={post.slug} // Use a unique identifier, e.g., post ID
            />


          {/* <div className="text-sm text-gray-700 dark:text-gray-300">
            <a
              href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                `https://xyruscode.com.ng/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Discuss on Twitter'}
            </a>
            {` • `}
            <a
              href="https://github.com/xyruscode.com.ng/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'Suggest Change'}
            </a>
          </div> */}
          <Script id="dsq-count-scr" src="//xyrus-code.disqus.com/count.js" async></Script>
        </Suspense>
      </article>
    </Container>
  );
};

export default BlogLayout;
