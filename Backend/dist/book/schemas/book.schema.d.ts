export declare enum Category {
    ADVENTURE = "Adventure",
    CALSSICS = "Classics",
    CRIME = "Crime",
    FANTASY = "Fantasy"
}
export declare class Book {
    title: string;
    description: string;
    author: string;
    price: number;
    category: Category;
}
export declare const BookSchema: import("mongoose").Schema<Book, import("mongoose").Model<Book, any, any, any, import("mongoose").Document<unknown, any, Book> & Book & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Book, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Book>> & import("mongoose").FlatRecord<Book> & {
    _id: import("mongoose").Types.ObjectId;
}>;
