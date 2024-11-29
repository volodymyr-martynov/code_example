'use client';
import { IOption } from '@/shared/FormikField/FormikSelectField';
import NewProjectForm from '@/features/project/components/NewProjectForm';

interface INewProjectPresenterProps {
  statesOptions: IOption[];
  taxCreditProgramOptions: IOption[];
  organizationId: number;
}

const NewProjectPresenter = ({ statesOptions, taxCreditProgramOptions, organizationId }: INewProjectPresenterProps) => {
  return (
    <NewProjectForm
      organizationId={organizationId}
      statesOptions={statesOptions}
      taxCreditProgramOptions={taxCreditProgramOptions}
    />
  );
};

export default NewProjectPresenter;
