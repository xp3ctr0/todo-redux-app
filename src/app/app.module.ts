import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
// NGRX
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { TodoAddComponent } from './todos/todo-add/todo-add.component';
import { TodoFooterComponent } from './todos/todo-footer/todo-footer.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
//import { todoReducer } from './todos/todo.reducer';
import { environment } from '../environments/environment';
import { appReducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    TodoModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
