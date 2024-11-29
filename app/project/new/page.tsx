import NewProjectContainer from '@/features/project/containers/NewProjectContainer';
import WithRole from '@/features/auth/components/WithRole';
import { OrganizationType, UserRole } from '@prisma/client';

const accessConfig = [
  {
    role: UserRole.USER,
    organizationType: OrganizationType.DEVELOPER,
  },
];

const Page = () => {
  return (
    <WithRole
      component={<NewProjectContainer />}
      accessConfig={accessConfig}
    />
  );
};

export default Page;
