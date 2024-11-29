import React from 'react';
import clsx from 'clsx';
import { ButtonGroup, Tooltip } from '@mantine/core';
import { OrganizationType, UserRole } from '@prisma/client';
import { getVendorCertifiedComplianceUrl, getVendorDetailsUrl } from '@/core/helpers/navigation';
import PersonDetailsIcon from '@/shared/Icons/PersonDetailsIcon';
import { tableIconClassName } from '@/shared/BlumenMantineTable/constants';
import PrimaryLink from '@/shared/PrimaryLink/PrimaryLink';
import { ListIcon } from '@/shared/Icons';
import useIsUserMatchRoleAndOrganizationType from '@/core/hooks/useIsUserMatchRoleAndOrganizationType';

interface IVendorListTableActionsProps {
  projectId: string | string[];
  vendorId: number;
}

const VendorListTableActions = ({ projectId, vendorId }: IVendorListTableActionsProps) => {
  const isUserDeveloper = useIsUserMatchRoleAndOrganizationType({ role: UserRole.USER, organizationType: OrganizationType.DEVELOPER });

  return (
    <ButtonGroup>
      {!isUserDeveloper && (
        <Tooltip label="View Vendor Details">
          <span>
            <PrimaryLink
              href={getVendorDetailsUrl(projectId, vendorId)}
              className={clsx(tableIconClassName, 'border-none !p-0')}
            >
              <PersonDetailsIcon className="h-5 w-5" />
            </PrimaryLink>
          </span>
        </Tooltip>
      )}
      {isUserDeveloper && (
        <Tooltip label="View Vendor Certification">
          <span>
            <PrimaryLink
              href={getVendorCertifiedComplianceUrl(projectId, vendorId)}
              className={clsx(tableIconClassName, 'border-none !p-0')}
            >
              <ListIcon className="h-5 w-5" />
            </PrimaryLink>
          </span>
        </Tooltip>
      )}
    </ButtonGroup>
  );
};

export default VendorListTableActions;
