import { Routes } from '@angular/router';
import { NotFoundComponent } from './components';


export const NotFoundRoutes: Routes = [
    { path: '**',  component: NotFoundComponent },
];
