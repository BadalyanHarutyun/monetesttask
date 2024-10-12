import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateFriend1728731047359 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'friends',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                  isGenerated:true
                },
               
                {
                  name: 'user_id',
                  type: 'int',
                },
                {
                    name: 'friend_id',
                    type: 'int',
                  },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
                },
                {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
                },
              ],
            }),
            true,
          );
          await queryRunner.createForeignKey(
            "friends",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE",
            }),
        )
        await queryRunner.createForeignKey(
            "friends",
            new TableForeignKey({
                columnNames: ["friend_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('friends')
    }

}
