import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env['DATABASE_URL']!,
});

const globaForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma =
  globaForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== 'production') globaForPrisma.prisma = prisma;

export default prisma;
