import Container from 'components/Container';
import ProjectBanner from 'components/ProjectBanner';

const projectsData = [
    {
      title: 'Xyrus Movie Database',
      description: `Are you a movie freak? Do you want to know what the hotest and latest movies right now are? Head on down to XMDB and check them out for yourself. Built with React, Styled Components, and TMDB API and is deployed on Netlify.`,
      imgSrc: '/projects/xmdb.PNG',
      href: 'https://movie.xyruscode.com.ng',
  },
    {
      title: 'First Class Barbers',
      description: `A website for a local barbershop in my hometown. Built with WordPress and Elementor.`,
      imgSrc: '/projects/f-c-barbers.png',
      href: 'https://www.firstclassbarbershopandspa.com',
    },
    {
      title: 'Ichor Group',
      description: `A website for Ichor Group, a company in Nigeria.
       Built with WordPress and Elementor.`,
      imgSrc: '/projects/ichor.png',
      href: 'https://www.ichor.com.ng',
    },
    {
      title: 'Andy Links Travel',
      description: `A website for Andy Links Travel, a subsidiary of Andy Links Group of Companies.
      Built with WordPress and Elementor.`,
      imgSrc: '/projects/alt.png',
      href: 'https://www.andylinkstravel.com/',
    },
    {
      title: 'Attah Football Scouting Agency',
      description: `A website for a football scouting agency in Nigeria.
      Built with WordPress and Elementor.`,
      imgSrc: '/projects/attah.png',
      href: 'https://www.attahfootballscoutingagency.com/',
    },
    {
      title: 'Moli Foods',
      description: `A store for a mushroom farm in Nigeria.
      Built with WordPress and Elementor.`,
      imgSrc: '/projects/moli.png',
      href: 'https://www.molifoods.com/',
    }
  ];

const Projects = () => {
  return (
    <Container title="Projects – Xyrus Code">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            These are some of my active projects. These are mostly websites I built for clients and some personal projects. I&apos;m currently working on a few more projects and will add them here when they&apos;re ready. They are a mix of Next.js, WordPress, and React projects.
          </p>
        </div>
        <div className="container p-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <ProjectBanner
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
