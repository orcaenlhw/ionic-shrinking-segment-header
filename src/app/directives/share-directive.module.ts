import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShrinkingSegmentHeaderDirective } from './shrinking-segment-header.directive';



@NgModule({
  declarations: [ShrinkingSegmentHeaderDirective],
  imports: [
    CommonModule
  ],
  exports: [ShrinkingSegmentHeaderDirective]
})
export class ShareDirectiveModule { }
