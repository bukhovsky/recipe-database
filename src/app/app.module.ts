import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { MenuComponent } from './menu/menu/menu.component';
import { AddComponent } from './add/add/add.component';
import { NewRecipeComponent } from './add/new-recipe/new-recipe.component';
import { NewIngedientComponent } from './add/new-recipe/new-ingedient/new-ingedient.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    AddComponent,
    NewRecipeComponent,
    NewIngedientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
