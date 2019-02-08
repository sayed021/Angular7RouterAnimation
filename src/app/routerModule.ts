
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const router:Routes=[
    {
        path:'home', component: HomeComponent
    },
    {
        path:'', redirectTo:'home', pathMatch:'full' 
    },
    {
        path: 'about',component: AboutComponent
    },
    {
        path:'not-found', component: NotFoundComponent
    },
    {
        path: '**', redirectTo:'not-found', pathMatch: 'full'
    }
];
export const AppRouterModule = RouterModule.forRoot(router);