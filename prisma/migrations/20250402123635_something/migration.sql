/*
  Warnings:

  - The `answer_variants` column on the `Reading_Question` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `correct_variant` column on the `Reading_Question` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Reading_Question" DROP COLUMN "answer_variants",
ADD COLUMN     "answer_variants" TEXT[],
DROP COLUMN "correct_variant",
ADD COLUMN     "correct_variant" TEXT[];
