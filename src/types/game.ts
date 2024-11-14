import { Document } from "@contentful/rich-text-types";
export interface IGame {
    fields: {
        title: string;
        slug: string;
        price: string;
        date: string;
        description0:string;
        description: Document;
        thumbnail: {
          fields: {
            file: {
              url: string;
            };
          };
        };
}
}
