import { FriendService } from './friend.service';
import { FriendController } from './friend.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendRequest } from 'src/database/entities/friendRequest.entity';
import { User } from 'src/database/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FriendRequest,User])],
  controllers: [FriendController],
  providers: [FriendService],
})
export class FriendModule {}
