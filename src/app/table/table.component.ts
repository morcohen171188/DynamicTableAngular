import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  characters: Observable<any[]>;
  columns: string[];
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.columns = this.dataService.getColumns();
    // ["name", "age", "species", "occupation"]
    this.characters = this.dataService.getCharacters();
    // all data in mock-data.ts
  }

}
