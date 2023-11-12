import { NgModule } from "@angular/core";
import { ScrollManagerDirective } from "./scroll-manager.directive";
import { ScrollSectionDirective } from "./scroll-section.directive";
import { ScrollAnchorDirective } from "./scroll-anchor.directive";

@NgModule({
  declarations: [
    ScrollManagerDirective,
    ScrollSectionDirective,
    ScrollAnchorDirective
  ],
  exports: [
    ScrollManagerDirective,
    ScrollSectionDirective,
    ScrollAnchorDirective
  ]
})
export class ScrollManagerModule { }
