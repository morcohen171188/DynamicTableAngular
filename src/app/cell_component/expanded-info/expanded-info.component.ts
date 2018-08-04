import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-expanded-info',
  templateUrl: './expanded-info.component.html',
  styleUrls: ['./expanded-info.component.css']
})
export class ExpandedInfoComponent implements OnInit {
  extended_data;
  @Input() data: any;
  constructor() { }

  ngOnInit() {
    this.extended_data = this.data['data'];
  }

}
