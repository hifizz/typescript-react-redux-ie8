export type ITodoUUID = number;

export interface ITodo {
  id: ITodoUUID;
  title: string;
  completed: boolean;
}

interface todoApp {
  todos: ITodoList;
  nowShowing: string;
}

export interface ITodoList extends Array<Object> {}

interface IAppProps {}

interface IAppState {}

interface ITodoItems {}
