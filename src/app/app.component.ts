import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

import {DisplayGrid, GridsterConfig, GridsterItem, GridType} from 'angular-gridster2';
import { BarComponent } from './bar/bar.component';
import { DonutComponent } from './donut/donut.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit  {
  public components = [BarComponent, DonutComponent];
  public currentComponent = null;
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  public graphind = null;
  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.Always,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      },
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1
    };

    this.dashboard = [    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1, graphind: String});
  }

  bar_chart() {
    this.graphind = null;
    this.currentComponent = this.components[0];
    console.log(this.currentComponent);
    this.graphind = 'bar_chart';
    console.log(this.graphind);
  }
  pie_chart() {
    this.graphind = null;
    this.currentComponent = this.components[1];
    this.graphind = 'donut_chart';
    console.log(this.graphind);
  }

}
