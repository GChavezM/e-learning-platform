-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('student', 'admin');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'student';
