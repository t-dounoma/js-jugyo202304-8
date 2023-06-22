import { MigrationInterface, QueryRunner } from "typeorm";

export class SampledataMigration1687400531914 implements MigrationInterface {
    name = 'SampledataMigration1687400531914'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sampledata" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "memo" varchar(255) NOT NULL, "mail" varchar(10000), "url" varchar(200), "created" datetime NOT NULL DEFAULT (datetime('now')), "updated" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sampledata"`);
    }

}
