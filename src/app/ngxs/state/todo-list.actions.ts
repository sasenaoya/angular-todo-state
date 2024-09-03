import { ITodo } from "../../todo/todo.model";

export class AddTodo {
  static readonly type = '[TodoList] Add Todo';

  constructor(public todo: ITodo) { }
}

export class UpdateTodo {
  static readonly type = '[TodoList] Update Todo';

  constructor(public todo: ITodo) { }
}

export class RemoveTodo {
  static readonly type = '[TodoList] Remove Todo';

  constructor(public id: string) { }
}