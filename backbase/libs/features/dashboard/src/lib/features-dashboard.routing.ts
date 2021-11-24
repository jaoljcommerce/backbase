import { Routes } from '@angular/router';

import { FeaturesDashboardComponent } from './features-dashboard.component';
import { DASHBOARD_ROUTES } from './routes/features-dashboard.routes';

export const FeaturesDashboardRouting: Routes = [
  {
    path: DASHBOARD_ROUTES.DASHBOARD,
    component: FeaturesDashboardComponent,
  },
];
