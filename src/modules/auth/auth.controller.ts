import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { RegisterUserDto } from 'src/common/dtos/registerUser.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LoginUserDto } from 'src/common/dtos/loginUser.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('register')
    async register(@Body() body:RegisterUserDto,@Res() res:Response):Promise<Response> {
        try {
            const {passwordConfirm,...rest}=body
            rest.password = await this.authService.hashPassword(rest.password)
            console.log(rest)
            await this.authService.registerUser(rest)
         return  res.status(200).send({message:'user successfuly registered'})
        } catch (err) {
            console.log(err)
            if(err?.routine ==='_bt_check_unique' ) {
              return  res.status(409).send({detail:'this email already used'})
            }
            res.status(400).send({detail:'something went wrong'})
        }
    }
    @Post('login')
    async login(@Body() body:LoginUserDto,@Res() res:Response):Promise<Response> {
        const {email,password} = body
        const data= await this.authService.loginUser(email,password)
        if(typeof data === 'boolean') {
            return res.status(400).send({detail:'email or password incorrect'})
        }
        res.send({accessToken:data})
    }
}
