import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: Number })
  price: number;

  @Prop({ type: Number })
  stock: number;

  @Prop()
  image: string;

  @Prop(
    raw({
      name: { type: String },
      image: { type: String },
    }),
  )
  category: Record<string, any>;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
