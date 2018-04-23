import { Action } from "redux";
import { ITodo, TUUID, uuid } from "../types";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED_TODO = "TOGGLE_COMPLETED_TODO";
export const CLEAR_COMPLETED_TODO = "CLEAR_COMPLETED_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHANGENOWSHOWINGFILTER = "CHANGENOWSHOWINGFILTER";

export const ALL_TODOS = "ALL_TODOS";
export const COMPLETED_TODOS = "COMPLETED_TODOS";
export const ACTIVE_TODOS = "ACTIVE_TODOS";

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface ITodoAction extends Action {
  title: string;
  completed: boolean;
}

export function addTodo(title: string): ITodoAction {
  return { type: ADD_TODO, title, completed: false };
}

export interface ICompleteTodoAction extends Action {
  id: string;
}
export function completeTodo(id: TUUID): ICompleteTodoAction {
  return { type: TOGGLE_COMPLETED_TODO, id };
}

export function clearCompletedTodo(): Action {
  return { type: CLEAR_COMPLETED_TODO };
}

export interface IDeleteTodo extends Action {
  id: uuid;
}
export function deleteTodo(id: uuid): IDeleteTodo {
  return { type: DELETE_TODO, id };
}

export interface IEditTodo extends Action {
  id: uuid;
  title: string;
}
export function editTodo(id: uuid, title: string): IEditTodo {
  return { type: EDIT_TODO, id, title };
}

export function changeNowShowing(nowShowing: string) {
  return { type: CHANGENOWSHOWINGFILTER, nowShowing };
}
