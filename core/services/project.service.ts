'use server';

import { Prisma } from '@prisma/client';
import projectRepository from '@/core/repositories/project.repository';
import { getSessionUser } from '@/core/repositories/session.repository';

export async function getAllProjectsByUser() {
  const user = await getSessionUser();

  if (!user) throw new Error('User not found');

  if (!user.organization) throw new Error('User has no organization, user id ' + user.id);

  return user.organization.projects;
}

export async function getProject({ id, isLocationsIncluded = false }: { id: number | string; isLocationsIncluded?: boolean }) {
  const include: Prisma.ProjectInclude = {};

  if (isLocationsIncluded) {
    include.location = true;
  }

  return projectRepository.getOne({ id, include });
}
