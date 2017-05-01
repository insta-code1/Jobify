import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { WindowRef } from '../_shared/window';


@Directive({
   selector: '[stickyNav]',
})
export class StickyNavDirective {

   constructor(private windowRef: WindowRef, private el: ElementRef) {

   }

 @HostListener('window:scroll', ['$event'])
   handleScrollEvent(e) {
    console.log(`e: ${e}`);
      if (this.windowRef.nativeWindow.pageYOffset > 100) {

         this.el.nativeElement.classList.add('sticky-directive');

      } 
      else {

         this.el.nativeElement.classList.remove('sticky-directive')
      }
   }
}    