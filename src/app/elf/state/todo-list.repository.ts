import { createStore } from '@ngneat/elf';
import {
  addEntities,
  deleteEntities,
  selectAllEntities,
  setEntities,
  updateEntities,
  withEntities
} from '@ngneat/elf-entities';

import { ITodo } from '../../todo/todo.model';

// idが必須なので、ITodoをそのまま使用できない
interface Todo extends Omit<ITodo, "id"> {
  id: string;
}

// Storeの作成
const todoListStore = createStore(
  { name: 'todoList' },
  withEntities<Todo>(),
);

// 初期値を設定
todoListStore.update(setEntities([
  { id: "1", name: 'Buy milk' },
  { id: "2", name: 'Buy eggs' },
]));

// TodoListの取得
export const todoList$ = todoListStore.pipe(selectAllEntities());

// Todoの追加
export function addTodo(todo: ITodo) {
  todoListStore.update(addEntities({ ...todo, id: todo.id! }));
}

// Todoの編集
export function updateTodo(todo: ITodo) {
  todoListStore.update(updateEntities(todo.id!, todo));
}

// Todoの削除
export function removeTodo(id: string) {
  todoListStore.update(deleteEntities(id));
}