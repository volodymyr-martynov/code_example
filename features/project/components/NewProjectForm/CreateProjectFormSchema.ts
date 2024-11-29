import * as Yup from 'yup';

const CreateProjectFormSchema = Yup.object().shape({
  name: Yup.string().required('Project name is required').default(''),

  timeZone: Yup.string().required('Time zone is required').default(''),

  state: Yup.string().required('State is required').default(''),

  locationId: Yup.number().positive('Location is required').required('Location is required').default(0),

  taxCreditProgramId: Yup.number().positive('Tax credit program is required').required('Tax credit program is required').default(0),

  pin: Yup.string().required('PIN is required').default('1234'),
});

export type CreateProjectFormValues = Yup.InferType<typeof CreateProjectFormSchema>;

export default CreateProjectFormSchema;
