import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })

export class DataListService {

  auxData = [];
  DEMO_KEY = 'zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb';

  constructor(
    private http: HttpClient) { }

  getData(day): Observable<any> {
    return this.http.get(`https://api.nasa.gov/planetary/apod?api_key=${this.DEMO_KEY}&date=2020-09-${day}`);
  }
}
