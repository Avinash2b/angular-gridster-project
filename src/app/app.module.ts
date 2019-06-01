import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule
} from '@angular/material';
import { ChartjsModule } from '@ctrl/ngx-chartjs';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import 'hammerjs';
import { GridsterModule } from 'angular-gridster2';
import { BarComponent } from './bar/bar.component';
import { DonutComponent } from './donut/donut.component';

@NgModule({
  declarations: [
    AppComponent, BarComponent, DonutComponent
  ],
  entryComponents : [ BarComponent, DonutComponent ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    GridsterModule,
    ChartjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [BarComponent]
})
export class AppModule { }
