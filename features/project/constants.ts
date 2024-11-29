import { TimeZones } from '.prisma/client';
import { getOptionsFromLabels } from '@/core/helpers/getOptionsFromLabels';

export const timeZonesLabels = {
  [TimeZones.EST]: 'Eastern Time (New York)',
  [TimeZones.CST]: 'Central Time (Chicago)',
  [TimeZones.MST]: 'Mountain Time (Denver)',
  [TimeZones.PST]: 'Pacific Time (Los Angeles)',
  [TimeZones.AKST]: 'Alaska Time (Anchorage)',
  [TimeZones.HST]: 'Hawaii Time (Honolulu)',
  [TimeZones.HDT]: 'Hawaii Aleutian Time (Adak)',
  [TimeZones.AST]: 'Atlantic Time (Puerto Rico)',
  [TimeZones.CHST]: 'Chamorro Time (Guam)',
  [TimeZones.SST]: 'Samoa Time (Pago Pago)',
};

export const timeZonesOptions = getOptionsFromLabels({ labels: timeZonesLabels });

export const listViewKey = 'blumen-is-list-view';

export const projectHeaders = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'vendor.fein',
    header: 'F-EIN',
  },
  {
    accessorKey: 'vendor.email',
    header: 'Email',
  },
  {
    accessorKey: 'vendor.address',
    header: 'Address',
  },
];
