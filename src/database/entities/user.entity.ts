import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { FriendRequest } from './friendRequest.entity';

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
  @OneToMany(() => FriendRequest, (friendRequest) => friendRequest.senduser)
  @JoinColumn({name:'id',referencedColumnName:'sender_id'})
  whichUserSend:FriendRequest[]
}
