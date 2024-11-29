import { OrganizationType, UserRole } from '@prisma/client';
import { notFound } from 'next/navigation';
import { getSessionUser } from '@/core/repositories/session.repository';

interface IWithRoleProps {
  component: React.ReactNode;
  accessConfig: { role: UserRole; organizationType: OrganizationType }[];
}

// @ts-ignore
const WithRole = async ({ component, accessConfig }: IWithRoleProps) => {
  const user = await getSessionUser();

  const isHasAccess = accessConfig.some(accessConfigItem => {
    return user?.role === accessConfigItem.role && user?.organization?.type === accessConfigItem.organizationType;
  });

  if (user && isHasAccess) {
    return component;
  }

  notFound();
};

export default WithRole;
