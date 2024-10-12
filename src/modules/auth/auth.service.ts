/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class AuthService {
    constructor(
    private configService: ConfigService, @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService

){}

   async hashPassword(password:string):Promise<string> {
    return await bcrypt.hash(password,+this.configService.get('SALT_AROUND'))
   }
   async comparePassword(password:string,hashPassword:string):Promise<boolean> {
    return await bcrypt.compare(password,hashPassword)
   }
   async registerUser(data:Partial<User>):Promise<User> {
    return await this.usersRepository.save(data)
   }
   async loginUser(email:string,password:string):Promise<string | boolean> {
    const user = await this.usersRepository.findOne({where:{email}});
        const match = await this.comparePassword(password,user.password)
        if(!match) {
            return false
        }
    const payload = {id:user.id };
    return await this.jwtService.signAsync(payload)
    
   }
}
