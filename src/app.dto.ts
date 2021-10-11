import * as Joi  from 'joi';
import { IsString, IsInt } from 'class-validator';
/*
  app.dto.ts
*/
export class UserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly des: string;

  @IsInt()
  readonly time: number;
}


export class idDto {
  readonly id: string;
}


export const QueryUserDto = Joi.object({
  name: Joi.string().required(),
  des: Joi.string().required(),
  time: Joi.number().required(),
})
