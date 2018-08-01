import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-expanded-info',
  templateUrl: './expanded-info.component.html',
  styleUrls: ['./expanded-info.component.css']
})
export class ExpandedInfoComponent implements OnInit {
  extra_data;
  @Input() data: any;
  constructor() { }

  ngOnInit() {
    this.extra_data = this.data['']; // TODO: ADD THE DATA
  }

}
