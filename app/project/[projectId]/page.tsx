import { ProjectContainer } from '@/features/project/containers';
import WithRole from '@/features/auth/components/WithRole';
import { OrganizationType, UserRole } from '@prisma/client';

interface IProjectPageProps {
  params: {
    projectId: string;
  };
}

const accessConfig = [
  {
    role: UserRole.ONSITE_ADMINISTRATOR,
    organizationType: OrganizationType.DEVELOPER,
  },
  {
    role: UserRole.USER,
    organizationType: OrganizationType.VENDOR,
  },
  {
    role: UserRole.USER,
    organizationType: OrganizationType.DEVELOPER,
  },
];

const ProjectPage = ({ params }: IProjectPageProps) => {
  return (
    <WithRole
      component={<ProjectContainer projectId={params.projectId} />}
      accessConfig={accessConfig}
    />
  );
};

export default ProjectPage;
