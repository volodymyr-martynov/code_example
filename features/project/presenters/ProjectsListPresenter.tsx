'use client';
import { newDolUrl, newProjectUrl } from '@/core/helpers/navigation';
import ProjectsViewSwitcher from '@/features/project/components/ProjectsViewSwitcher';
import { listViewKey } from '@/features/project/constants';
import BlumenContainer from '@/shared/BlumenContainer';
import { AddIcon } from '@/shared/Icons';
import PageHeader from '@/shared/PageHeader';
import PrimaryLink from '@/shared/PrimaryLink';
import ProjectCard from '@/shared/ProjectCard';
import Spinner from '@/shared/Spinner';
import { OrganizationType, Prisma, UserRole } from '@prisma/client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import useIsUserMatchRoleAndOrganizationType from '@/core/hooks/useIsUserMatchRoleAndOrganizationType';

interface IProjectsListPresenterProps {
  projects: Prisma.ProjectGetPayload<{
    include: {
      location: true;
    };
  }>[];
}

const ProjectsListPresenter = ({ projects }: IProjectsListPresenterProps) => {
  const isUserDeveloper = useIsUserMatchRoleAndOrganizationType({ role: UserRole.USER, organizationType: OrganizationType.DEVELOPER });

  const [isListview, setIsListview] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const isListViewLocalValue = localStorage.getItem(listViewKey) === 'true';

    setIsListview(isListViewLocalValue);

    setLoading(false);
  }, []);

  const changeViewHandler = (value: boolean) => {
    localStorage.setItem(listViewKey, value.toString());

    setIsListview(value);
  };

  return (
    <div className="pt-6">
      <BlumenContainer>
        <div className="mb-4 flex items-center justify-between">
          <div className="w-[330px]">
            <PageHeader text="Projects" />
          </div>
          <div className="flex gap-2">
            <ProjectsViewSwitcher
              isListView={isListview}
              onClick={changeViewHandler}
            />
          </div>
          <div className="flex w-[330px] gap-2">
            {isUserDeveloper && (
              <PrimaryLink href={newDolUrl}>
                <AddIcon />
                Classification DoL
              </PrimaryLink>
            )}
            {isUserDeveloper && (
              <PrimaryLink href={newProjectUrl}>
                <AddIcon />
                Create project
              </PrimaryLink>
            )}
          </div>
        </div>
        {loading ? (
          <div className="flex h-[450px] items-center justify-center">
            <Spinner size={14} />
          </div>
        ) : (
          <div className={clsx('grid gap-4', isListview ? 'grid-cols-1' : 'grid-cols-5')}>
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                listView={isListview}
              />
            ))}
          </div>
        )}
      </BlumenContainer>
    </div>
  );
};

export default ProjectsListPresenter;
