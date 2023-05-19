import { animate, style, transition, trigger } from "@angular/animations";


export let slideInOut = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('350ms ease-in', style({ transform: 'translateY(0%)' }))
  ]),
  transition(':leave', [
    animate('350ms ease-in', style({ transform: 'translateY(-100%)' }))
  ]),
]);

