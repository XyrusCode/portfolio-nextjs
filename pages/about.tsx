import Link from 'next/link';
// import Image from 'next/image';

import Container from 'components/Container';

const About = () => {
  return (
    <Container title="About – Xyrus Code">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              <Link href="https://twitter.com/xyruscode">Twitter</Link>
            </li>
            <li>
              <Link href="https://github.com/xyruscode">GitHub</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/xyrus-code">
              LinkedIn
              </Link>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Prince Shammah, Freelance Web Developer</p>
          <div className='pb-2'>
          <h3>Stuff About me</h3>
          <p>
          I&apos;m a Freelance Web Developer based in Nigeria. I spent four years in the university to get a B.S. in
            Computer Science and then went to Youtube to learn how to code. Don&apos;t look at me like that, it&apos;s my website and I&apos;ll write what I want to here. One of these days I&apos;ll go on a rant and it will not be pretty.
          </p>
          </div>

          <div className='pb-2'>
          <h3>Experience</h3>
          <p>
            Let&apos;s see, I worked as an IT manager for about a 16 months, fixing PCs and printers around the office. After that I worked as a Junior Software Engineer at{' '}
            <a href="https://epoh.ng/register?referral_code=937BBB62">Epoh Music</a> 
            </p>
            <p>I&apos;m currently a freelancer at the moment. I&apos;m spending most of my time now learning new stuff. Just might build clones of all of FAANG while Im sitting around.</p>
          </div>

          <div className='pb-2'>
          <h3>Stack</h3>
          <p>
            On the web I have experience using Wordpress, Wix, Webflow React.js, Next.js. For mobile development, I&apos;ve used Java (this was back when Android Studio used it), Kotlin, Xamarin framework. I keep saying I&apos;ll learn React Native but I haven&apos;t gotten around to it. 
            These days I code mostly in Typescript and PHP but I also know c#, Python and FORTRAN. Yes that FORTRAN. 
          </p>
          </div>


        </div>
      </div>
    </Container>
  );
};

export default About;
