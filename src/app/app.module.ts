// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// angular material
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

// ngrx
import { StoreModule } from '@ngrx/store';

//ngxs
import { NgxsModule } from '@ngxs/store';

// todo
import { TodoModule } from './todo/todo.module';

// route
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot({}, {}),
    NgxsModule.forRoot([], { developmentMode: /** !environment.production */ false }),
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
