import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { CommonModule } from '@angular/common';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
  imports:  [CommonModule]
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  promedio: number = 0;
  constructor(private serieService: SerieService) { }
  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.getPromedio();
    });
  }

  getPromedio() {
    let suma = 0;
    for (let s of this.series) {
      suma += s.seasons;
    }

    this.promedio = suma / this.series.length;
  }

  ngOnInit() {
    this.getSeries();
  }

}
