-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Person" (
    "x1" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "x2" INTEGER,
    "x3" INTEGER,
    "x4" INTEGER,
    "x5" INTEGER,
    "x6" INTEGER,
    "name" TEXT,
    "x8" INTEGER,
    "x9" INTEGER,
    "p1" INTEGER,
    "p2" INTEGER,
    "m1" INTEGER,
    "m2" INTEGER,
    "m3" INTEGER,
    "p0" INTEGER,
    "q1" INTEGER,
    "q2" INTEGER,
    "m0" INTEGER,
    "n1" INTEGER,
    "n2" INTEGER,
    "note" TEXT,
    "z1" INTEGER,
    "z2" INTEGER,
    "z3" INTEGER,
    "label" TEXT,
    "b1" INTEGER,
    "b2" INTEGER,
    "b3" INTEGER,
    "dt" DATETIME DEFAULT NULL,
    CONSTRAINT "Person_p0_fkey" FOREIGN KEY ("p0") REFERENCES "Person" ("x1") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Person" ("b1", "b2", "b3", "dt", "label", "m0", "m1", "m2", "m3", "n1", "n2", "name", "note", "p0", "p1", "p2", "q1", "q2", "x1", "x2", "x3", "x4", "x5", "x6", "x8", "x9", "z1", "z2", "z3") SELECT "b1", "b2", "b3", "dt", "label", "m0", "m1", "m2", "m3", "n1", "n2", "name", "note", "p0", "p1", "p2", "q1", "q2", "x1", "x2", "x3", "x4", "x5", "x6", "x8", "x9", "z1", "z2", "z3" FROM "Person";
DROP TABLE "Person";
ALTER TABLE "new_Person" RENAME TO "Person";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
