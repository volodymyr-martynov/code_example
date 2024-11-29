import CreateProjectFormSchema from './CreateProjectFormSchema';

const validData = {
  name: 'Test Project',
  timeZone: 'Mountain Standard Time',
  state: 'LA',
  locationId: 1,
  taxCreditProgramId: 1,
};

describe('CreateProjectFormSchema', () => {
  it('validates correctly for valid data', async () => {
    const isValid = await CreateProjectFormSchema.isValid(validData);
    expect(isValid).toBe(true);
  });

  it('invalidates when name is missing', async () => {
    const invalidData = {
      ...validData,
      name: '',
    };

    const isValid = await CreateProjectFormSchema.isValid(invalidData);
    expect(isValid).toBe(false);
  });

  it('invalidates when timeZone is missing', async () => {
    const invalidData = {
      ...validData,
      timeZone: '',
    };

    const isValid = await CreateProjectFormSchema.isValid(invalidData);
    expect(isValid).toBe(false);
  });

  it('invalidates when state is missing', async () => {
    const invalidData = {
      ...validData,
      state: '',
    };

    const isValid = await CreateProjectFormSchema.isValid(invalidData);
    expect(isValid).toBe(false);
  });

  it('invalidates when locationId is missing', async () => {
    const invalidData = {
      ...validData,
      locationId: 0,
    };

    const isValid = await CreateProjectFormSchema.isValid(invalidData);
    expect(isValid).toBe(false);
  });

  it('invalidates when taxCreditProgramId is missing', async () => {
    const invalidData = {
      ...validData,
      taxCreditProgramId: 0,
    };

    const isValid = await CreateProjectFormSchema.isValid(invalidData);
    expect(isValid).toBe(false);
  });
});
