import { Routes } from '@angular/router';

import { HomeComponent } from './components';
import { NotFoundComponent } from './components'
import { AdminPanelComponent } from '../admin';
import { LoginComponent } from '../auth';
import { ShowUsersComponent } from '../user';


export const StaticsRoutes: Routes = [
    
    { path: '', component: HomeComponent},
    { path: 'admin', component: AdminPanelComponent},
    {path: 'admin/usuarios', component: ShowUsersComponent},
    { path: 'login', component: LoginComponent},
    { path: '**', component: NotFoundComponent },
   

];




