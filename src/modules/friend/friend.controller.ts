/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Request, Res, UseGuards } from '@nestjs/common';
import { SendFriendRequestDto } from 'src/common/dtos/sendFriendRequest.dto';
import { FriendService } from './friend.service';
import { Response } from 'express';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FriendRequest } from 'src/database/entities/friendRequest.entity';
import { DeclineUserRequestDto } from 'src/common/dtos/declineUser.dto';
@UseGuards(AuthGuard)
@ApiTags('friend')
@ApiBearerAuth()
@Controller('friend')
export class FriendController {
    constructor(private friendService: FriendService) {}

    @Post('add')
    async addFriend(@Body() body:SendFriendRequestDto,@Request() req,@Res() res:Response ):Promise<Response> {
         const isUserExist = await this.friendService.checkUser(body.receiverId)
         if(!isUserExist) {
            return res.status(400).send({detail:'invalid receiver id'})
         }
         await this.friendService.sendFriendRequest({senderId:req.user,receiverId:body.receiverId})
         res.send({message:'success'})
    }
    @Get('myrequests') //who want to be my friend
    async myrequests(@Request() req ):Promise<FriendRequest[]> {
         
        return await this.friendService.getMyFriendRequests(req.user)
    }
    @Delete('decline/:id')
    async decline(@Request() req,@Res() res:Response,@Param() param:DeclineUserRequestDto ) {
        const isFriendRequestExist = await this.friendService.checkFriendRequest(param.id,req.user)
        if(!isFriendRequestExist) {
            return res.status(400).send({detail:'please enter valid id'})
        }
        await this.friendService.declineUser(param.id,req.user)
        res.send({message:'success'})
    }
}
