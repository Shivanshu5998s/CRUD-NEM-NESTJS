import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  ADVENTURE = 'Adventure',
  CALSSICS = 'Classics',
  CRIME = 'Crime',
  FANTASY = 'Fantasy',
}

@Schema({ // acma decorator...
  timestamps: true, // for time stamp in each doc in database...
})
export class Book {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  price: number;

  @Prop()
  category: Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);

// SchemaFactory - With Mongoose, everything is derived from a Schema. Each schema maps to a MongoDB collection and
//                 defines the shape of the documents within that collection. Schemas are used to define Models. Models are responsible for creating and reading documents from the underlying MongoDB database.

// DTOs are used in the application layer for data transfer, while Schemas are used in the data layer for data storage.