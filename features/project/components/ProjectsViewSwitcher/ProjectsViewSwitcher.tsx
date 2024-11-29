import { GridIcon, ListIcon } from '@/shared/Icons';
import clsx from 'clsx';

interface IProjectsViewSwitcherProps {
  isListView: boolean;
  onClick: (value: boolean) => void;
}

const ProjectsViewSwitcher = ({
  isListView,
  onClick,
}: IProjectsViewSwitcherProps) => {
  return (
    <>
      <button
        onClick={() => onClick(false)}
        className={clsx('rounded-[4px] p-1', isListView ? '' : 'bg-[#F4F4F5]')}
      >
        <GridIcon />
      </button>
      <button
        onClick={() => onClick(true)}
        className={clsx('rounded-[4px] p-1', isListView ? 'bg-[#F4F4F5]' : '')}
      >
        <ListIcon />
      </button>
    </>
  );
};

export default ProjectsViewSwitcher;
