import { Routes } from '@angular/router';
import { PageComponent } from './components/page/page.component';
import { APP_ROUTES } from './core/routes/app.routes';

export const AppRouting: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTES.DASHBOARD.DASHBOARD,
    pathMatch: 'full',
  },
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@backbase/features/dashboard').then(
            (m) => m.FeaturesDashboardModule
          ),
      },
    ],
  },
];
