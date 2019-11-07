import { Routes } from '@angular/router';

import { ListDemandsComponent } from './components';
import { HomeComponent } from './components';

export const DemandRoutes: Routes = [
    {path: 'admin/demandas', component: ListDemandsComponent},
    { path: '', component: HomeComponent}
];
