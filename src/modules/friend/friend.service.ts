/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FriendRequest } from 'src/database/entities/friendRequest.entity';
import { User } from 'src/database/entities/user.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(FriendRequest)
    private friendRequestRepository: Repository<FriendRequest>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async sendFriendRequest(data: Partial<FriendRequest>): Promise<void> {
    const isExist = await this.friendRequestRepository.findOne({
      where: { receiverId: data.receiverId, senderId: data.senderId },
    });
    if (!isExist) {
      await this.friendRequestRepository.save(data);
    }
  }
  async checkUser(id: number): Promise<boolean> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if(!user) {
        return false
    }
    return true
  }
  async getMyFriendRequests(receiverId:number):Promise<FriendRequest[]> {
    return await this.friendRequestRepository.find({where:{receiverId},relations:['senduser']})
  }
  async declineUser(id:number,receiverId:number):Promise<DeleteResult> {
    return await this.friendRequestRepository.delete({id,receiverId})
  }
  async checkFriendRequest(id:number,receiverId:number):Promise<boolean> {
    const data = await this.friendRequestRepository.findOne({where:{id,receiverId}})
    if(!data) {
        return false
    }
    return true
  }
}
