import { getAllProjectsByUser } from '@/core/services/project.service';
import ProjectsListPresenter from '@/features/project/presenters/ProjectsListPresenter';

const ProjectsListContainer = async () => {
  const projects = await getAllProjectsByUser();

  return <ProjectsListPresenter projects={projects} />;
};

export default ProjectsListContainer;
