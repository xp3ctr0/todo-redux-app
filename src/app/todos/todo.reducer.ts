import { createReducer, on, Action } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as todoActions from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('vencer a thanos'),
  new Todo('que rica chica'),
];

const _todoReducer = createReducer(
  initialState,
  on(todoActions.Add, (state, { texto }) => [...state, new Todo(texto)]),
  on(todoActions.CleanCompleted, state => state.filter( todo => !todo.completado)),
  on(todoActions.Delete, (state, { id }) => state.filter(todo => todo.id !== id)),

  on(todoActions.Togle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(todoActions.TogleAll, (state, { completado }) => {
    return state.map((todo) => {
        return {
          ...todo,
          completado: completado,
        };
    });
  }),
  on(todoActions.Edit, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state: [] | any, action: Action) {
  return _todoReducer(state, action);
}
