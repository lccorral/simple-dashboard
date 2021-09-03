import { Component, OnInit } from '@angular/core';
import { DataListService } from './services/data-list/data-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'simple-dashboard';
  isLoading = true;

  constructor(public serviceRest: DataListService) {}

  ngOnInit():  void {
    this.getData();
  }

  getData(): void {
    for (let i = 10; i < 16; i++) {
      this.isLoading = true;
      this.serviceRest.getData(i)
      .subscribe(data => {
        this.isLoading = false;
        this.serviceRest.auxData.push(data);
      },
      () => this.isLoading = false);
    }
  }
}
