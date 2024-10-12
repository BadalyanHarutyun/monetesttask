import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateFriendRequest1728723357038 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'friend_requests',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated:true
              },
             
              {
                name: 'sender_id',
                type: 'int',
              },
              {
                name: 'receiver_id',
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
            "friend_requests",
            new TableForeignKey({
                columnNames: ["sender_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE",
            }),
        )
        await queryRunner.createForeignKey(
            "friend_requests",
            new TableForeignKey({
                columnNames: ["receiver_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE",
            }),
        )
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('friend_requests');
      }
}
