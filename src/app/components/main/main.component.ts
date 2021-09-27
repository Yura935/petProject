import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  items: any = [];
  search: string = '';
  close: string = 'none';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getFirstData();
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if (document.documentElement.scrollTop >= 20) {
      this.getFullData();
    }
  }

  getFirstData() {
    this.dataService.getData().subscribe(data => {
      this.items = data;
      this.items = this.items.slice(0, 5);
    });
  }

  getFullData() {
    this.dataService.getData().subscribe(data => {
      this.items = data;
    });
  }

  getElement(id: number) {
    this.dataService.getOne(id);
  }

  isEmpty() {
    this.close = 'none';
    if (this.search) {
      this.close = 'block';
    }
  }

  clean() {
    this.close = 'none';
    this.search = '';
  }
}
