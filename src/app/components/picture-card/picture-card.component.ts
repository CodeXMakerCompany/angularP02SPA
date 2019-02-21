import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.css']
})
export class PictureCardComponent implements OnInit {

  @Input() pictureForm: any = {};

  constructor() { }

  ngOnInit() {
  }

}
