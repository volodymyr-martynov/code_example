import { ProjectPresenter } from '@/features/project/presenters';
import { getAllVendorOrganizations } from '@/core/services/organization.services';
import { Prisma } from '@prisma/client';

interface IProjectContainerProps {
  projectId: string;
}

const ProjectContainer = async ({ projectId }: IProjectContainerProps) => {
  const vendorOrganizations = await getAllVendorOrganizations({ projectId, isVendorNotNull: true });

  return <ProjectPresenter vendorOrganizations={vendorOrganizations as Prisma.OrganizationGetPayload<{ include: { vendor: true } }>[]} />;
};

export default ProjectContainer;
