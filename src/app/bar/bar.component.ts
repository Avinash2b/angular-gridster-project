import { Component , OnInit, ElementRef} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.css']
})

export class BarComponent implements OnInit {
    myChart: any;
    htmlRef: any ;
    constructor(private elementRef: ElementRef) {
    }
   ngOnInit() {
    this.barchart_load_method();
   }

barchart_load_method() {
    this.htmlRef = this.elementRef.nativeElement.querySelector(`#barChart`);
    console.log('htmlRef' + this.htmlRef);
    this.myChart = new Chart(this.htmlRef, {
        type: 'bar',
        data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [9, 7, 3, 5, 2, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
        },
        options: {
        title: {
            text: 'Bar Chart',
            display: true
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
        }
        });
    console.log('this is ' + this.myChart);
}

}

