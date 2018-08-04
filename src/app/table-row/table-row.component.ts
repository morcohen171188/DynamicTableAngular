import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ComponentInterface} from '../componentInterface';

@Component({
  selector: 'app-table-row, [app-table-row]', // matches both a tag or an attribute
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Input() data: any;
  @Input() columns: string[];
  @ViewChild('parent', {read: ViewContainerRef}) // Capture the #parent element
  parent: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.component);
    const viewContainerRef = this.parent;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<ComponentInterface>componentRef.instance).data = this.data.data;

  }

}
