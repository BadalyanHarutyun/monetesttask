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

@Entity('friend_requests')
export class FriendRequest {
  @PrimaryGeneratedColumn()
  id: number;

 
  @Column({name:'receiver_id'})
  receiverId:number
  @Column({name:'sender_id'})
  senderId:number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
  @OneToOne(() => User, (user) => user.whichUserSend)
  @JoinColumn({name:'sender_id',referencedColumnName:'id'})
  senduser:FriendRequest[]

}
