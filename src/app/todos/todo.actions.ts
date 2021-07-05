import { createAction, props } from '@ngrx/store';

export const Add = createAction('[TODO] Add Todo', props<{ texto: string }>());
export const Togle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);
export const Edit = createAction(
  '[TODO] Edit Todo',
  props<{ id: number; texto: string }>()
);
export const Delete = createAction(
  '[TODO] Delete Todo',
  props<{ id: number }>()
);
export const TogleAll = createAction(
  '[TODO] ToggleAll Todo',
  props<{ completado: boolean }>()
);
export const CleanCompleted = createAction(
  '[TODO] ClenaAll Todo',
);
