import { Routes } from '@angular/router';

import { ListGutMatricesComponent } from './components';
import { AuthGuard } from '../guards';

export const GutMatrixRoutes: Routes = [
    {path: 'admin/matrizes-gut', component: ListGutMatricesComponent, canActivate: [AuthGuard]},
];
