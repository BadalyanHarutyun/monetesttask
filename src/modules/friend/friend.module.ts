import { FriendService } from './friend.service';
import { FriendController } from './friend.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendRequest } from 'src/database/entities/friendRequest.entity';
import { User } from 'src/database/entities/user.entity';
import { Friend } from 'src/database/entities/friend.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FriendRequest,User,Friend])],
  controllers: [FriendController],
  providers: [FriendService],
})
export class FriendModule {}
