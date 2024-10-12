import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { configs } from 'src/config';
@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({
    global: true,
    secret: configs.JWT_SECRET, //new ConfigService().get('JWT_SECRET'),
    signOptions: { expiresIn: '5h' },
  }),],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
