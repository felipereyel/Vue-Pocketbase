type Metadata = {
  notes: {
    insert: {
      id?: string;
      title?: string;
      content?: string;
    };
    update: {
      title?: string;
      content?: string;
    };
    select: {
      id: string;
      title: string;
      content: string;
      created: string;
      updated: string;
    };
    expandable: {};
  };
};

export type TableName = keyof Metadata;
type Table<T extends TableName> = Metadata[T];

// Select
type Select<T extends TableName> = Table<T>["select"];
export type selectArgs<T extends TableName> = Select<T>;

// Update
type Update<T extends TableName> = Table<T>["update"];
export type updateArgs<T extends TableName> = Partial<Update<T>>;

// Insert
type Insert<T extends TableName> = Table<T>["insert"];
export type insertArgs<T extends TableName> = Insert<T>;

// Expandable
type Expandable<T extends TableName> = Table<T>["expandable"];
export type expandableArgs<T extends TableName> = keyof Expandable<T>;
export type expandedArgs<T extends TableName, A extends Array<expandableArgs<T>>> = {
  expand: {
    //@ts-ignore
    [K in A[number]]: selectArgs<Metadata[T]['expandable'][K]>;
  }
}
