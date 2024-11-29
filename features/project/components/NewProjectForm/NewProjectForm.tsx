'use client';
import { Form, Formik } from 'formik';
import { Project } from '@prisma/client';
import { IOption } from '@/shared/FormikField/FormikSelectField';
import CreateProjectFormSchema, { CreateProjectFormValues } from '@/features/project/components/NewProjectForm/CreateProjectFormSchema';
import { createProjectAction } from '@/core/actions/project';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { getProjectDetailsUrl } from '@/core/helpers/navigation';
import NewProjectFormFields from '@/features/project/components/NewProjectForm/NewProjectFormFields';

interface INewProjectFormProps {
  statesOptions: IOption[];
  taxCreditProgramOptions: IOption[];
  organizationId: number;
}

const NewProjectForm = ({ statesOptions, taxCreditProgramOptions, organizationId }: INewProjectFormProps) => {
  const router = useRouter();

  const onSubmit = async (values: CreateProjectFormValues) => {
    try {
      const { id } = await createProjectAction({
        ...values,
        organizationId,
      } as Omit<Project, 'id'> & { organizationId: number });

      toast.success('Project created successfully');
      router.push(getProjectDetailsUrl(id));
      router.refresh();
    } catch (e) {
      toast.error('Failed to create project');
    }
  };

  return (
    <Formik
      validationSchema={CreateProjectFormSchema}
      initialValues={CreateProjectFormSchema.getDefault()}
      onSubmit={onSubmit}
    >
      <Form className="w-full">
        <NewProjectFormFields
          statesOptions={statesOptions}
          taxCreditProgramOptions={taxCreditProgramOptions}
        />
      </Form>
    </Formik>
  );
};

export default NewProjectForm;
