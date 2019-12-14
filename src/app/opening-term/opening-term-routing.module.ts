import { Routes } from '@angular/router';

import { ListOpeningTermsComponent } from './components';
import { AuthGuard } from '../guards';

export const OpeningTermRoutes: Routes = [
    {path: 'admin/termos-de-abertura', component: ListOpeningTermsComponent, canActivate: [AuthGuard]},
];
