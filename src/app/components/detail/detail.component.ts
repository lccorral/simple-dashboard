import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataListService } from 'src/app/services/data-list/data-list.service';
import { Model } from 'src/app/models/model';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: [ './detail.component.scss' ]
})
export class DetailComponent implements OnInit {
  object: Model;

  constructor(
    public location: Location,
    private route: ActivatedRoute,
    private serviceRest: DataListService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.object = this.serviceRest.auxData.find(item => item.date === id);
  }
}
