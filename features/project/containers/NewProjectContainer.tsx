import HeaderLinks from '@/shared/HeaderLinks';
import { getAllTaxCreditProgramsAction } from '@/core/actions';
import NewProjectPresenter from '@/features/project/presenters/NewProjectPresenter';
import BlumenContainer from '@/shared/BlumenContainer';
import { getUniqueStates } from '@/core/services/location.service';
import { getSessionUser } from '@/core/repositories/session.repository';

const headerLinksConfig = [{ href: '/', text: 'Back' }];

const NewProjectContainer = async () => {
  const user = await getSessionUser();

  if (!user) {
    return <div>User not found</div>;
  }

  const organizationId = user.organization.id;

  const states = await getUniqueStates();
  const taxCreditPrograms = await getAllTaxCreditProgramsAction();

  const statesOptions = states.map(({ state }) => ({
    value: state,
    label: state,
  }));

  const taxCreditProgramOptions = taxCreditPrograms.map(({ id, USCode }) => ({
    value: id,
    label: USCode,
  }));

  return (
    <BlumenContainer>
      <HeaderLinks config={headerLinksConfig} />
      <NewProjectPresenter
        organizationId={organizationId}
        statesOptions={statesOptions}
        taxCreditProgramOptions={taxCreditProgramOptions}
      />
    </BlumenContainer>
  );
};

export default NewProjectContainer;
