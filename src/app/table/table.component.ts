import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataServiceService} from '../data-service.service';
import {RuleIdentifiersComponent} from '../cell_component/rule-identifiers/rule-identifiers.component';
import {DestinationComponent} from '../cell_component/destination/destination.component';
import {ServiceApplicationComponent} from '../cell_component/service-application/service-application.component';
import {SourceComponent} from '../cell_component/source/source.component';
import {ExpandedInfoComponent} from '../cell_component/expanded-info/expanded-info.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: any[];
  @Input() columns: string[];
  @Input() extendedData: any[];
  constructor() { }

  ngOnInit() {

  }

  hideInfo(rowData) {
    rowData.showExtendedInfo = false;
    rowData.extendedInfoComp = null;
  }
  showInfo(rowData) {
    const jsonObj = {};
    rowData.showExtendedInfo = true;
    for (let i = 0; i < this.extendedData.length; i++) {
      if (this.extendedData[i].id === rowData.id) {
        jsonObj['data'] = this.extendedData[i];
        jsonObj['component'] = ExpandedInfoComponent;
        rowData.extendedInfoComp = jsonObj;
        break;
      }
    }
  }
}
