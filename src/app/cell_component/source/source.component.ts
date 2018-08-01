import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
