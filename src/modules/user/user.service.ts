/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchUserDto } from 'src/common/dtos/searchUser.dto';
import { User } from 'src/database/entities/user.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private usersRepository: Repository<User>) {}
    async getById(id:number):Promise<User> {
        return await this.usersRepository.findOne({where:{id}})
    }
     async search( data:SearchUserDto) {
        const arr = []
        for (const key in data) {
           if(key === 'age') {
            arr.push({[key]:data[key]})

           } else {

               arr.push({[key]:Like(`%${data[key]}%`)})
           }
        }
        return await this.usersRepository.find({where:arr})
     }
}
