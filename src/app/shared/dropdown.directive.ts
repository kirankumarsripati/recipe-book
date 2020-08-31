import { Directive, HostListener, HostBinding, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  @Input() appDropdown: HTMLElement;

  @HostListener('click') toggleOpen(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.appDropdown, 'show');
    } else {
      this.renderer.removeClass(this.appDropdown, 'show');
    }
  }

  constructor(
    private renderer: Renderer2,
  ) { }
}
