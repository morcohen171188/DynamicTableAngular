import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-row, [app-table-row]', // matches both a tag or an attribute
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Input() character: any;
  @Input() columns: string[];
  constructor() { }

  ngOnInit() {
  }

}
