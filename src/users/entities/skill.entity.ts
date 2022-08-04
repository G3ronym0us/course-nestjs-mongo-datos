import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Skill extends Document {
  @Prop()
  name: string;

  @Prop()
  color: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
