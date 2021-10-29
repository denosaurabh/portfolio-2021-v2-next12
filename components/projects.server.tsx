// import Link from 'next/link';
import { styled } from '@styled';
import ProjectBox from '@components/projectBox.client';
import { ProjectBox as ProjectBoxProps } from '@type/project';

interface ProjectsProps {
  showMoreProjectsLink?: boolean;
  data: ProjectBoxProps[];
  title: string;
  css?: Record<string, unknown>;
}

const Projects = ({
  showMoreProjectsLink,
  title,
  data,
  css,
}: ProjectsProps) => {
  return (
    <ProjectsContainer className="projects" css={css}>
      <h6>{title}</h6>

      {data.map((project, i) => (
        <ProjectBox {...project} key={i} />
      ))}

      {showMoreProjectsLink && (
        <a href="/projects">Check out more projects &rarr;</a>
      )}
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h6: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#2E2E2E',

    marginBottom: '3rem',
  },

  a: {
    fontSize: '1.5rem',
    color: '$textColor',
  },
});
