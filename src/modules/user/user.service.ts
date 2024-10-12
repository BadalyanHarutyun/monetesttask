/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private usersRepository: Repository<User>) {}
    async getById(id:number):Promise<User> {
        return await this.usersRepository.findOne({where:{id}})
    }
}
