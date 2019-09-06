import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found';


export const NotFoundRoutes: Routes = [
    { path: '**',  component: NotFoundComponent },
];
