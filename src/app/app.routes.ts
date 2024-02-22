import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { TrackerComponent } from './tracker/tracker.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'tracker',
        component: TrackerComponent,
      }
    ]
  }
];
