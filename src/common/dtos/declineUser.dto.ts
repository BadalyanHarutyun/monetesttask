import { ApiProperty,  } from '@nestjs/swagger';
import {  IsInt    } from 'class-validator';


export class DeclineUserRequestDto {

  @IsInt()
  @ApiProperty()
  id?:number


}