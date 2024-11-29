'use client';
import { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import { toast } from 'react-hot-toast';
import FormikTextField from '@/shared/FormikField/FormikTextField';
import FormikSelectField, { IOption } from '@/shared/FormikField/FormikSelectField';
import FormTemplate from '@/shared/FormTemplate';
import { getAllLocationsByState } from '@/core/services/location.service';
import { CreateProjectFormValues } from '@/features/project/components/NewProjectForm/CreateProjectFormSchema';
import { timeZonesOptions } from '@/features/project/constants';

interface INewProjectFormFieldsProps {
  statesOptions: IOption[];
  taxCreditProgramOptions: IOption[];
}

const NewProjectFormFields = ({ statesOptions, taxCreditProgramOptions }: INewProjectFormFieldsProps) => {
  const {
    values: { state },
    setFieldValue,
  } = useFormikContext<CreateProjectFormValues>();

  const [locationOptions, setLocationOptions] = useState<IOption[]>([]);

  useEffect(() => {
    if (!state) return;

    setLocationOptions([]);
    setFieldValue('locationId', 0);

    (async () => {
      try {
        const locations = await getAllLocationsByState({ state });

        setLocationOptions(locations.map(({ id, namelsad }) => ({ value: id, label: namelsad })));
      } catch (e) {
        toast.error('Failed to fetch locations');
      }
    })();
  }, [state]);

  return (
    <FormTemplate
      label="Create new project"
      onCancelHref={'/'}
      submitButtonText="Create Project"
    >
      <FormikTextField
        label="Project Name"
        fieldName="name"
        required
      />

      <FormikSelectField
        label="Select Tax Program"
        fieldName="taxCreditProgramId"
        options={taxCreditProgramOptions}
        required
      />
      <FormikSelectField
        label="Select Time Zone"
        fieldName="timeZone"
        options={timeZonesOptions}
        required
      />
      <FormikSelectField
        label="Select State"
        fieldName="state"
        options={statesOptions}
        required
      />
      <FormikSelectField
        label="Select Location"
        fieldName="locationId"
        options={locationOptions}
        required
        disabled={!locationOptions.length}
      />
      <FormikTextField
        label="PIN (used by onsite administrators)"
        fieldName="pin"
        required
      />
    </FormTemplate>
  );
};

export default NewProjectFormFields;
