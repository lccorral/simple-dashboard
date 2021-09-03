import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { DataListService } from 'src/app/services/data-list/data-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  data: Model[] = [];

  constructor(private serviceRest: DataListService) { }

  ngOnInit() {
    this.data = this.serviceRest.auxData;
  }
}
