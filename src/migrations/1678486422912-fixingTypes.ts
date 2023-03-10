import { MigrationInterface, QueryRunner } from "typeorm";

export class fixingTypes1678486422912 implements MigrationInterface {
    name = 'fixingTypes1678486422912'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "value" numeric(12,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "value" integer NOT NULL`);
    }

}
