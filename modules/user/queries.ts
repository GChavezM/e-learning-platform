import { Prisma } from '@/generated/prisma/client';
import prisma from '@/lib/prisma';

const userWithStatsShape = {
  include: {
    stats: true,
  },
} satisfies Prisma.UserDefaultArgs;

export type UserWithStats = Prisma.UserGetPayload<typeof userWithStatsShape>;

export async function getUserWithStats(userId: string): Promise<UserWithStats | null> {
  return prisma.user.findUnique({
    where: { id: userId },
    ...userWithStatsShape,
  });
}
