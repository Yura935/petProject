import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  oneElement: Subject<any> = new Subject();
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getOne(id: number) {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.oneElement.next(data[id]);
    })
  }
}
