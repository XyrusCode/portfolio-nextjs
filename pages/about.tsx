import Link from 'next/link';
// import Image from 'next/image';

import Container from 'components/Container';

const About = () => {

  const getCodingAge = () => {
    const today = new Date();
    const birthday = new Date('2016-09-16');
    const age = today.getFullYear() - birthday.getFullYear();
    const month = today.getMonth() - birthday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
      return age - 1;
    }
    return age;

  };

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
            Computer Science and then went to Youtube to learn how to code. I&apos;m a self-taught developer. I&apos;ve been coding for about {getCodingAge()} years now. I&apos;m currently learning about DevOps and Cloud Computing. I&apos;m also learning about Machine Learning and AI. I&apos;m also learning about UI/UX design.
          </p>
          </div>

          <div className='pb-2'>
          <h3>Experience</h3>
          <p>
            Let&apos;s see, I worked as an IT manager for about a 16 months, fixing PCs and printers around the office. After that I worked as a Junior Software Engineer at{' '}
            <a href="https://epoh.ng/register?referral_code=937BBB62">Epoh Music</a>
            </p>
            <p>I&apos;m currently a freelancer at the moment. I&apos;m spending most of my time now learning new stuff. Just might build all of those ideas sitting in my head while I&apos;m sitting around.</p>
          </div>

          <div className='pb-2'>
          <h3>Stack</h3>
          <p>
            I use a lot of stuff. I&apos;ll list them below.
            </p>

          <ul>
            <li>
              Wordpress
            </li>
            <li>
             React.js
            </li>
            <li>
             Next.js
              </li>
              <li>
                Typescript
              </li>
              <li>
                PHP
              </li>

              <li>
                Kotlin
              </li>
              <li>
                Docker
              </li>
              <li>
                MongoDB
              </li>
              <li>
                GraphQL
              </li>
              <li>
                Firebase
              </li>
              <li>
                Figma
              </li>
          </ul>
          </div>


        </div>
      </div>
    </Container>
  );
};

export default About;
