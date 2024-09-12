import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ngrx', loadChildren: () => import('./ngrx/ngrx.module').then(m => m.NgrxModule) },
  { path: 'ngxs', loadChildren: () => import('./ngxs/ngxs.module').then(m => m.NgxsModule) },
  { path: 'elf', loadChildren: () => import('./elf/elf.module').then(m => m.ElfModule) },
  { path: 'rx-angular-state', loadChildren: () => import('./rx-angular-state/rx-angular-state.module').then(m => m.RxAngularStateModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
