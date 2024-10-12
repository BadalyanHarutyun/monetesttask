/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get,  Query,  Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { UserService } from './user.service';
import { SearchUserDto } from 'src/common/dtos/searchUser.dto';
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
    @Get('search')
    async search(@Query() query:SearchUserDto) {
        return await this.userService.search(query)
    }
}
