/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class AuthService {
    constructor(private configService: ConfigService, @InjectRepository(User)
    private usersRepository: Repository<User>){}

   async hashPassword(password:string):Promise<string> {
    return await bcrypt.hash(password,+this.configService.get('SALT_AROUND'))
   }
   
   async registerUser(data:Partial<User>):Promise<User> {
    return await this.usersRepository.save(data)
   }
}
