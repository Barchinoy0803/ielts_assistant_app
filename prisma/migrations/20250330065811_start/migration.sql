-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('PENDING', 'ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "CENTER_ROLE" AS ENUM ('CENTER');

-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('ADMIN', 'SUPERADMIN');

-- CreateEnum
CREATE TYPE "READING_QUESTION_TYPE" AS ENUM ('MULTIPLE_CHOICE', 'TRUE_FALSE_NOT_GIVEN', 'YES_NO_NOT_GIVEN', 'MATCHING_HEADINGS', 'MATCHING_INFORMATION', 'MATCHING_FEATURES', 'MATCHING_SENTENCE_ENDINGS', 'SENTENCE_COMPLETION', 'SUMMARY_COMPLETION', 'NOTE_COMPLETION', 'DIAGRAM_LABEL_COMPLETION', 'SHORT_ANSWER', 'LIST_SELECTION', 'GLOBAL_MULTIPLE_CHOICE');

-- CreateEnum
CREATE TYPE "WRITING_TASK_TYPE" AS ENUM ('TASK1', 'TASK2');

-- CreateEnum
CREATE TYPE "SPEAKING_PART_TYPE" AS ENUM ('PART1', 'PART2', 'PART3');

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "ROLE" NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Center" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "status" "STATUS" NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "CENTER_ROLE" NOT NULL,

    CONSTRAINT "Center_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "certificate" TEXT NOT NULL,
    "status" "STATUS" NOT NULL DEFAULT 'ACTIVE',
    "image" TEXT NOT NULL,
    "centerId" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "checkerTeacherId" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reading_Variant" (
    "id" TEXT NOT NULL,
    "variant_name" TEXT NOT NULL,
    "isReady" BOOLEAN NOT NULL,

    CONSTRAINT "Reading_Variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reading_Part" (
    "id" TEXT NOT NULL,
    "part_name" TEXT NOT NULL,
    "reading_variant_id" TEXT NOT NULL,

    CONSTRAINT "Reading_Part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reading_Part_Question" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "question_type" "READING_QUESTION_TYPE" NOT NULL,
    "reading_part_id" TEXT NOT NULL,

    CONSTRAINT "Reading_Part_Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reading_Question" (
    "id" TEXT NOT NULL,
    "question_number" INTEGER NOT NULL,
    "question_text" TEXT NOT NULL,
    "answer_variants" TEXT NOT NULL,
    "correct_variant" TEXT NOT NULL,
    "reading_part_qestion_id" TEXT NOT NULL,

    CONSTRAINT "Reading_Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Writing_Variant" (
    "id" TEXT NOT NULL,
    "variant_name" TEXT NOT NULL,
    "isReady" BOOLEAN NOT NULL,

    CONSTRAINT "Writing_Variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Writing_Task_Overview" (
    "id" TEXT NOT NULL,
    "writing_variant_id" TEXT NOT NULL,
    "task_type" "WRITING_TASK_TYPE" NOT NULL,

    CONSTRAINT "Writing_Task_Overview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Writing_Task" (
    "id" TEXT NOT NULL,
    "task_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "writing_task_overview_id" TEXT NOT NULL,

    CONSTRAINT "Writing_Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Speaking_Variant" (
    "id" TEXT NOT NULL,
    "variant_name" TEXT NOT NULL,
    "isReady" BOOLEAN NOT NULL,

    CONSTRAINT "Speaking_Variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Speaking_Part" (
    "id" TEXT NOT NULL,
    "taskName" "SPEAKING_PART_TYPE" NOT NULL,
    "speaking_variantId" TEXT NOT NULL,

    CONSTRAINT "Speaking_Part_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Speaking_Question" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "speaking_part_id" TEXT NOT NULL,

    CONSTRAINT "Speaking_Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exam" (
    "id" TEXT NOT NULL,
    "reading_variant_id" TEXT NOT NULL,
    "listening_variant_id" TEXT NOT NULL,
    "writing_variant_id" TEXT NOT NULL,
    "speaking_variant_id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,

    CONSTRAINT "Exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Result" (
    "id" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    "speaking_score" DOUBLE PRECISION NOT NULL,
    "listening_score" DOUBLE PRECISION NOT NULL,
    "reading_score" DOUBLE PRECISION NOT NULL,
    "writing_score" DOUBLE PRECISION NOT NULL,
    "speaking_comment" TEXT NOT NULL,
    "writing_comment" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Result_examId_key" ON "Result"("examId");

-- AddForeignKey
ALTER TABLE "Center" ADD CONSTRAINT "Center_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_centerId_fkey" FOREIGN KEY ("centerId") REFERENCES "Center"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_checkerTeacherId_fkey" FOREIGN KEY ("checkerTeacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reading_Part" ADD CONSTRAINT "Reading_Part_reading_variant_id_fkey" FOREIGN KEY ("reading_variant_id") REFERENCES "Reading_Variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reading_Part_Question" ADD CONSTRAINT "Reading_Part_Question_reading_part_id_fkey" FOREIGN KEY ("reading_part_id") REFERENCES "Reading_Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reading_Question" ADD CONSTRAINT "Reading_Question_reading_part_qestion_id_fkey" FOREIGN KEY ("reading_part_qestion_id") REFERENCES "Reading_Part_Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Writing_Task_Overview" ADD CONSTRAINT "Writing_Task_Overview_writing_variant_id_fkey" FOREIGN KEY ("writing_variant_id") REFERENCES "Writing_Variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Writing_Task" ADD CONSTRAINT "Writing_Task_writing_task_overview_id_fkey" FOREIGN KEY ("writing_task_overview_id") REFERENCES "Writing_Task_Overview"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Speaking_Part" ADD CONSTRAINT "Speaking_Part_speaking_variantId_fkey" FOREIGN KEY ("speaking_variantId") REFERENCES "Speaking_Variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Speaking_Question" ADD CONSTRAINT "Speaking_Question_speaking_part_id_fkey" FOREIGN KEY ("speaking_part_id") REFERENCES "Speaking_Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_reading_variant_id_fkey" FOREIGN KEY ("reading_variant_id") REFERENCES "Reading_Variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_writing_variant_id_fkey" FOREIGN KEY ("writing_variant_id") REFERENCES "Writing_Variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_speaking_variant_id_fkey" FOREIGN KEY ("speaking_variant_id") REFERENCES "Speaking_Variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
