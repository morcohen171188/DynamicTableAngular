import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-application',
  templateUrl: './service-application.component.html',
  styleUrls: ['./service-application.component.css']
})
export class ServiceApplicationComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
