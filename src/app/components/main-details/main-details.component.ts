import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-details',
  templateUrl: './main-details.component.html',
  styleUrls: ['./main-details.component.scss']
})
export class MainDetailsComponent implements OnInit {
  obj: any;
  constructor(private dataServise: DataService) { }

  ngOnInit(): void {
    this.dataServise.oneElement.subscribe(res => {
      this.obj = res;
    });
  }
}
