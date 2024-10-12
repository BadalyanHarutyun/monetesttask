import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Match } from '../decorators/passwordConfirm.decorator';
import { Transform } from 'class-transformer';

export class SearchUserDto {
  

  @Transform(({value})=>{
 
    Number(value)
  })
  @IsInt()
  @IsOptional()
  @ApiPropertyOptional()
  age?:number

  @IsOptional()
  @ApiPropertyOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  lastName?: string;


}