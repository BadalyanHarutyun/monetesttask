import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('friends')
export class Friend {
  @PrimaryGeneratedColumn()
  id: number;

 
  @Column({name:'user_id'})
  receiverId:number
  @Column({name:'friend_id'})
  friendId:number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
  // @OneToOne(() => User, (user) => user.whichUserSend)
  // @JoinColumn({name:'sender_id',referencedColumnName:'id'})
  // senduser:FriendRequest[]

}
