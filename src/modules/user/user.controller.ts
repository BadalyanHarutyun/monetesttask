/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get,  Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { UserService } from './user.service';
@ApiTags('user')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
    constructor(private userService:UserService) {}
    @Get('me')
   async getMe(@Request() req) {
        console.log(req.user)
        return await this.userService.getById(req.user)
    }
}
