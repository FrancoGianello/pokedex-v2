import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { IndexComponent } from './index/index.component';
import { BackgroundColorTypePipe } from '../pipes/background-color-type.pipe';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SearchBarComponent } from '../shared/search-bar/search-bar.component';



@NgModule({
  declarations: [
    IndexComponent,
    BackgroundColorTypePipe,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports:[]
})
export class PokedexModule { }
