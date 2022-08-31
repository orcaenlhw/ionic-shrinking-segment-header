import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appShrinkingSegmentHeader]'
})
export class ShrinkingSegmentHeaderDirective {

  @Input('appShrinkingSegmentHeader') toolbar;

  newHeaderHeight: any;
  constructor(public element: ElementRef, public renderer: Renderer2, public domCtrl: DomController) {
  }
  ngOnInit(){
    
    this.toolbar.ionScroll.subscribe((scrollEvent: CustomEvent) => {
      let delta = scrollEvent.detail.deltaY;
      console.log("event", delta);
      this.resizeHeader(delta);
    });

    this.renderer.setStyle(this.element.nativeElement, 'height', '150px');
  }
  resizeHeader(delta){
    this.domCtrl.write(() => {
      this.newHeaderHeight = 150 - delta.scrollTop;
      if(this.newHeaderHeight < 0){
        this.newHeaderHeight = 0;
      }
      this.renderer.setStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');
    });
  }
}
