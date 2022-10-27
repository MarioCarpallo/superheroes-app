import { trigger, transition, style, animate } from "@angular/animations";

export const animations = [
  trigger('fadeSlow', [ 
    transition('void => *', [
      style({ opacity: 0 }), 
      animate(1500, style({opacity: 1}))
    ]) 
  ]),

  trigger('fadeFast', [ 
    transition('void => *', [
      style({ opacity: 0 }), 
      animate(500, style({opacity: 1}))
    ]) 
  ]),

  trigger('fadeOut', [ 
    transition('void => *', [
      style({
        opacity: 1
      }),
      animate('1s ease-out', style({
        opacity: 0
      }))
    ]) 
  ]),



]