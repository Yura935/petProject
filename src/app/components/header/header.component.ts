import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  visible: boolean = false;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  dropClick() {
    this.visible = !this.visible;
  }

  onClickedOutside(e: Event) {
    this.visible = false;
  }

  hiddenDrop() {
    this.visible = false;
  }
}
