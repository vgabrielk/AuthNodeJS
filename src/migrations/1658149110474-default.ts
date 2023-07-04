import { MigrationInterface, QueryRunner } from "typeorm";

export class default1658149110474 implements MigrationInterface {
  name = 'default1658149110474'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE \`users\` (
        \`id\` INT NOT NULL AUTO_INCREMENT,
        \`name\` TEXT NOT NULL,
        \`email\` TEXT NOT NULL,
        \`password\` TEXT NOT NULL,
        CONSTRAINT \`UQ_97672ac88f789774dd47f7c8be3\` UNIQUE (\`email\`(255)),
        CONSTRAINT \`PK_a3ffb1c0c8416b9fc6f907b7433\` PRIMARY KEY (\`id\`)
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`users\``);
  }
}
