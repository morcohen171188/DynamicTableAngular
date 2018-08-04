import { Component, OnInit } from '@angular/core';
import {RuleIdentifiersComponent} from '../cell_component/rule-identifiers/rule-identifiers.component';
import {DestinationComponent} from '../cell_component/destination/destination.component';
import {ServiceApplicationComponent} from '../cell_component/service-application/service-application.component';
import {SourceComponent} from '../cell_component/source/source.component';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  headers;
  tableData;
  extendedData;
  componentMap = {
    'Rule Identifiers': RuleIdentifiersComponent,
    'Destination' : DestinationComponent,
    'Services/Applications' : ServiceApplicationComponent,
    'Source' : SourceComponent
  };

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
        this.prepareData(data['data']);
      }, error => {
        console.log(error);
      }
    );

    this.dataService.getExtebdedData().subscribe(extendedData => {
        this.prepareExtendedData(extendedData['data']);
      }, error => {
        console.log(error);
      }
    );
  }


  prepareData(data) {
    this.headers = [];
    this.tableData = [];
    for (const column_header in data[0].columns) {
      this.headers.push(column_header);
    }
    for (let i = 0; i < data.length; i++) {
      const jsonObj = [];
      const currColumn = data[i].columns;
      for (const key in currColumn) {
        const value = {};
        value['data'] = currColumn[key];
        value['data'].id = data[i].id;
        const currComponent = this.componentMap[key];
        value['component'] = currComponent;
        jsonObj.push(value);
        jsonObj['id'] = data[i].id;
        jsonObj['showExtendedInfo'] = false;
        jsonObj['extendedInfoComp'] = null;
      }
      this.tableData.push(jsonObj);
    }
  }

  prepareExtendedData(extendedData) {
    this.extendedData = [];
    for (let i = 0; i < extendedData.length; i++) {
      const jsonObj = [];
      jsonObj['id'] = extendedData[i].id;
      jsonObj['data'] = extendedData[i].data;
      this.extendedData.push(jsonObj);
    }
  }
}
