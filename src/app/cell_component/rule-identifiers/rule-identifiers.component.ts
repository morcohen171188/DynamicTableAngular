import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rule-identifiers',
  templateUrl: './rule-identifiers.component.html',
  styleUrls: ['./rule-identifiers.component.css']
})
export class RuleIdentifiersComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
