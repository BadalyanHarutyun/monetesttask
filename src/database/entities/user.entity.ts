import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'password' })
  password: string;
  @Column({ name: 'email', unique: true })
  email: string;

  @Column({ name: 'last_name' })
  lastName: string;
  @Column({name:'age'})
  age:number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
  toJSON() {
    const {password,...rest} = this
    return rest
  }
}
