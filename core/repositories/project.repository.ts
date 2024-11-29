import prisma from '@/prisma';
import { Prisma } from '@prisma/client';
import { getIsSessionUserHasAccessToProject } from '@/core/repositories/session.repository';

type Id = number | string;

const projectRepository = {
  async getOne({ id, include }: { id: Id; include?: Prisma.ProjectInclude }) {
    const isUserHasAccessToProject = await getIsSessionUserHasAccessToProject({ projectId: id });

    if (!isUserHasAccessToProject) throw new Error('User has no access to this project: ' + id);

    return prisma.project.findUnique({ where: { id: Number(id) }, include });
  },
};

export default projectRepository;
