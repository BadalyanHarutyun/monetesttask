import { ApiProperty,  } from '@nestjs/swagger';
import {  IsInt    } from 'class-validator';


export class SendFriendRequestDto {

  @IsInt()
  @ApiProperty()
  receiverId?:number


}