import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { SourceComponent } from './cell_component/source/source.component';
import { DestinationComponent } from './cell_component/destination/destination.component';
import { RuleIdentifiersComponent } from './cell_component/rule-identifiers/rule-identifiers.component';
import { ServiceApplicationComponent } from './cell_component/service-application/service-application.component';
import { ExpandedInfoComponent } from './cell_component/expanded-info/expanded-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TableComponent,
    TableRowComponent,
    SourceComponent,
    DestinationComponent,
    RuleIdentifiersComponent,
    ServiceApplicationComponent,
    ExpandedInfoComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
