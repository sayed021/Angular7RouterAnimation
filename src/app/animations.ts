
import { trigger, animate, transition, style, query } from '@angular/animations';

export const zoomInOutAnimation =

  trigger('zoomInOutAnimation', [
      transition( '* => *', [
          query(':enter', 
              [
                  style({ opacity: 0,  transform: 'translateX(100%)  scale(0)' }),
                  animate('0.3s', style({ opacity: 1,  transform: 'translateX(0)  scale(0)' }))
              ], 
              { optional: true }
          ),
          query(':leave', 
              [
                  style({ opacity: 1,  transform: 'translateX(0) scale(0.8)' }),
                  animate('0.3s', style({ opacity: 0,  transform: 'translateX(-100%) scale(0)' }))
              ], 
              { optional: true }
          ),
          query(':enter', 
              [
                  style({ opacity: 0,  transform: 'translateX(100%) translateY(100%) scale(0.2)' }),
                  animate('0.3s', style({ opacity: 1,  transform: 'translateX(0) translateY(100%)  scale(1)' }))
              ], 
              { optional: true }
          )
      ])
  ]);



export const fadeInOutAnimation =

  trigger('fadeInOutAnimation', [
      transition( '* => *', [
            query(':enter', 
                [ style({ opacity: 0 }) ], 
                { optional: true }
            ),

            query(':leave', 
                [
                    style({ opacity: 1 }),
                    animate('.5s', style({ opacity: 0 }))
                ], 
                { optional: true }
            ),

            query(':enter', 
                [
                  style({ opacity: 0 }),
                  animate('0.1s', style({ opacity: 1 }))
                ], 
                { optional: true }
            )

        ])

    ]);