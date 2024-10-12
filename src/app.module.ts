import { FriendModule } from './modules/friend/friend.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import dataSourceSettings from './database/typeOrm.config';
@Module({
  imports: [
    FriendModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceSettings.options),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
