import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameChooserComponent } from './game-chooser.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    GameChooserComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    GameChooserComponent,
  ]
})
export class GameChooserModule { }
