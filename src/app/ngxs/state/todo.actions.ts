export class AddAnimal {
  static readonly type = '[TodoList] Add Todo';

  constructor(public id: string, public name: string, public date?: Date) { }
}