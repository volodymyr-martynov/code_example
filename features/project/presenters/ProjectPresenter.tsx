'use client';

import { getCheckInUrl } from '@/core/helpers/navigation';
import { projectHeaders } from '@/features/project/constants';
import BlumenMantineTable from '@/shared/BlumenMantineTable';
import HeaderLinks, { headerLinksConfigItem } from '@/shared/HeaderLinks';
import { OrganizationType, Prisma, UserRole } from '@prisma/client';
import { MRT_Row } from 'mantine-react-table';
import { useParams } from 'next/navigation';
import React from 'react';
import BlumenContainer from '@/shared/BlumenContainer';
import VendorListTableActions from '@/features/project/components/VendorListTableActions/VendorListTableActions';

type Organization = Prisma.OrganizationGetPayload<{ include: { vendor: true } }>;

interface IProjectPresenterProps {
  vendorOrganizations: Organization[];
}

const ProjectPresenter = ({ vendorOrganizations }: IProjectPresenterProps) => {
  const { projectId } = useParams<{ projectId: string }>();

  const headerLinksConfig: headerLinksConfigItem[] = [
    {
      href: '/',
      text: 'Back',
      role: UserRole.USER,
      organizationType: OrganizationType.DEVELOPER,
    },
    {
      href: '/',
      text: 'Back',
      role: UserRole.USER,
      organizationType: OrganizationType.VENDOR,
    },
    {
      href: getCheckInUrl(projectId),
      text: 'Check in',
      role: UserRole.ONSITE_ADMINISTRATOR,
      organizationType: OrganizationType.DEVELOPER,
    },
  ];

  const renderRowActions = ({ row }: { row: MRT_Row<Organization> }) => {
    return (
      <VendorListTableActions
        projectId={projectId}
        vendorId={row.original.id}
      />
    );
  };

  return (
    <BlumenContainer>
      <HeaderLinks config={headerLinksConfig} />
      <BlumenMantineTable
        columns={projectHeaders}
        data={vendorOrganizations}
        enableRowActions
        renderRowActions={renderRowActions}
        initialState={{
          columnPinning: {
            right: ['mrt-row-actions'],
          },
        }}
      />
    </BlumenContainer>
  );
};

export default ProjectPresenter;
