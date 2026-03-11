-- AlterTable
ALTER TABLE "lesson" ALTER COLUMN "xpReward" SET DEFAULT 50;

-- CreateIndex
CREATE INDEX "chapter_progress_chapterId_idx" ON "chapter_progress"("chapterId");
