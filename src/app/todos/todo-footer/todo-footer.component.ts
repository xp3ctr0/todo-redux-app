import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos, setFiltro } from 'src/app/filtro/filtro.actions';
import { CleanCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ['todos','compleados','pendientes'];
  pendientes:number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store.select('filtro').subscribe((filtro) => {
    //   this.filtroActual = filtro;
    // });

    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }

  cambiarFiltro = (filtro:filtrosValidos) => {
    this.filtroActual = filtro;
    this.store.dispatch(setFiltro({filtro}));
  }

  clean = () => {    
    this.store.dispatch(CleanCompleted());
  }
}
