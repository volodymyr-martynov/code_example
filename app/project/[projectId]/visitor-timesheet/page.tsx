import { VisitorCheckInContainer } from '@/features/purpose-of-visit/containers';
import { IVisitorCheckInPageProps } from '@/features/purpose-of-visit/interfaces';
import WithRole from '@/features/auth/components/WithRole';
import { OrganizationType, UserRole } from '@prisma/client';

const accessConfig = [
  {
    role: UserRole.ONSITE_ADMINISTRATOR,
    organizationType: OrganizationType.DEVELOPER,
  },
  {
    role: UserRole.USER,
    organizationType: OrganizationType.DEVELOPER,
  },
];

const VisitorTimesheetPage = (props: IVisitorCheckInPageProps) => {
  return (
    <WithRole
      component={<VisitorCheckInContainer {...props} />}
      accessConfig={accessConfig}
    />
  );
};

export default VisitorTimesheetPage;
