import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { SourceComponent } from './cell_component/source/source.component';
import { DestinationComponent } from './cell_component/destination/destination.component';
import { RuleIdentifiersComponent } from './cell_component/rule-identifiers/rule-identifiers.component';
import { ServiceApplicationComponent } from './cell_component/service-application/service-application.component';
import { ExpandedInfoComponent } from './cell_component/expanded-info/expanded-info.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import {DataServiceService} from './data-service.service';
import { BorderDirective } from './border.directive';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableRowComponent,
    SourceComponent,
    DestinationComponent,
    RuleIdentifiersComponent,
    ServiceApplicationComponent,
    ExpandedInfoComponent,
    WrapperComponent,
    BorderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  entryComponents: [RuleIdentifiersComponent, DestinationComponent, ServiceApplicationComponent, SourceComponent, ExpandedInfoComponent],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
