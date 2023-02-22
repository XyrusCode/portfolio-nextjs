import cn from 'classnames';
import Image from 'next/image';

type ProjectCardProps = {
    title: string;
    link: string;
    gradient: string;
    image: string;
}

const ProjectCard = ({ title, link, gradient, image }: ProjectCardProps) => {
  return (
    <a
      href={link}
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
        gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-md md:text-md font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
        <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt={title}
                height={300}
                width={300}
                src={image}
                sizes="30vw"
              />
            </div>
      </div>
    </a>
  );
};

export default ProjectCard;
