import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnInit{
  @Input() color: any;

  constructor(private el_ref: ElementRef) {}
  ngOnInit() {
    const borderColor = this.color[0].data.left_border_color;
    this.el_ref.nativeElement.style.borderLeft = '1.5px solid'; // sets to grey?
    this.el_ref.nativeElement.style.borderLeftColor = borderColor;
  }
}
