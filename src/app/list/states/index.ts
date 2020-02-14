export interface List {
  id: number;
  name: string;
}

export interface Item {
  id: number;
  content: string;
  listId: number;
}

export interface Subitem {
  id: number;
  value: string;
  itemId: number;
}