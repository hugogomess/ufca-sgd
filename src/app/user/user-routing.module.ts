import { Routes } from '@angular/router';

import { ShowUsersComponent } from './components';
import { AuthGuard } from '../guards';

export const UserRoutes: Routes = [
    {path: 'admin/usuarios', component: ShowUsersComponent, canActivate: [AuthGuard]}
];
