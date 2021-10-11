import { prop } from '@typegoose/typegoose';

export class Project {
  @prop()
  title: string;

  @prop()
  name: string
}
