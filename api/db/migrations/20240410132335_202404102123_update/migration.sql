-- CreateTable
CREATE TABLE "Position" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "x10" INTEGER,
    "x11" INTEGER,
    "x12" INTEGER,
    "x3" INTEGER,
    "x4" INTEGER,
    "x5" INTEGER,
    "name" TEXT,
    "personal" INTEGER,
    "checked" BOOLEAN,
    "deleted" BOOLEAN,
    "note" TEXT,
    CONSTRAINT "Position_personal_fkey" FOREIGN KEY ("personal") REFERENCES "Person" ("x1") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Position_personal_key" ON "Position"("personal");
