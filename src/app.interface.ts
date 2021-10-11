import { IsInt, IsString } from 'class-validator';

export interface UserInterface {
  readonly name: string;
  readonly des: string;
  readonly time: number;
}


export class idInterface {
  @IsInt()
  readonly id: number;
}
