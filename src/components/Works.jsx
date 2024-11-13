import React from 'react';
import { styles } from '../styles';
import { live } from '../assets';
import { StarWrapper } from '../hoc';
import { projects } from '../constants';

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full max-w-full">
      <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
        <img src={image} alt="project_image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, '_blank')}
            className="bg-purple-700 w-10 h-10 sm:w-8 sm:h-8 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={live} alt="source code" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[12px] sm:text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[12px] sm:text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p id="project" className={`${styles.sectionSubText} text-center`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
      </div>

      <div className="w-full flex justify-center">
        <p className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-2xl leading-[24px] sm:leading-[30px] text-center">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="mt-10 sm:mt-20 flex flex-col sm:flex-row flex-wrap gap-5 justify-center items-center overflow-x-hidden">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default StarWrapper(Works, '');
