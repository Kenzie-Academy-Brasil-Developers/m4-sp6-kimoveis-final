import { MigrationInterface, QueryRunner } from "typeorm";

export class changingRelationCategory1678626382851 implements MigrationInterface {
    name = 'changingRelationCategory1678626382851'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_9947f7e43e446fa3fba94ee76c2"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "realEstateId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ADD "realEstateId" integer`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_9947f7e43e446fa3fba94ee76c2" FOREIGN KEY ("realEstateId") REFERENCES "real_estate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
