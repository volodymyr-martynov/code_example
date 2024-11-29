import { ProjectsListContainer } from '@/features/project/containers';
import { OrganizationType, UserRole } from '@prisma/client';

import WithRole from '@/features/auth/components/WithRole';

const accessConfig = [
  {
    role: UserRole.USER,
    organizationType: OrganizationType.DEVELOPER,
  },
  {
    role: UserRole.USER,
    organizationType: OrganizationType.VENDOR,
  },
];

const ProjectsListPage = async () => {
  return (
    <WithRole
      component={<ProjectsListContainer />}
      accessConfig={accessConfig}
    />
  );
};

export default ProjectsListPage;
