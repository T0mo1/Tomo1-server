-- DropForeignKey
ALTER TABLE "Child" DROP CONSTRAINT "Child_parentId_fkey";

-- AlterTable
ALTER TABLE "Child" ALTER COLUMN "lastName" DROP NOT NULL;

-- CreateTable
CREATE TABLE "DenverQuestion" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "ageMonthMin" DOUBLE PRECISION NOT NULL,
    "ageMonthMax" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "options" JSONB,
    "minCorrect" INTEGER,
    "audio" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DenverQuestion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Child" ADD CONSTRAINT "Child_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
