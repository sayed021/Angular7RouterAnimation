import { Component } from '@angular/core';
import { zoomInOutAnimation, fadeInOutAnimation } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[zoomInOutAnimation,fadeInOutAnimation]
})

export class AppComponent {
  title = 'RouterAnimateApp';

    public getRouterOutletState(outlet) {
	  return outlet.isActivated ? outlet.activatedRoute : '';
	}

}
