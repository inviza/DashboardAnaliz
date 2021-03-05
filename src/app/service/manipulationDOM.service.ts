
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class ManipulatorDOM {
    private renderer: Renderer2;
    constructor(rendererFactory: RendererFactory2) {
      this.renderer = rendererFactory.createRenderer(null, null);
  }

    toggleClass( target: HTMLElement, classStyle: string) {
      if(target.classList.contains(classStyle)){
        this.renderer.removeClass(target, classStyle)
      } else {
        this.renderer.addClass(target, classStyle)
      }
          
          
    }
    changeClass(target: HTMLElement, classOld: string, classNew: string) {
      this.renderer.removeClass(target, classOld)  
      this.renderer.addClass(target, classNew)
    }

}