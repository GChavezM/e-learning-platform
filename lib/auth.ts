import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import prisma from '@/lib/prisma';
import { nextCookies } from 'better-auth/next-js';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
  plugins: [nextCookies()],
  trustedOrigins: [process.env['BETTER_AUTH_URL'] ?? 'http://localhost:3000'],
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          await prisma.userStats.create({
            data: {
              userId: user.id,
              totalXp: 0,
              level: 1,
            },
          });
        },
      },
    },
  },
});
