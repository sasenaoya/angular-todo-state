// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'store', loadChildren: () => import('./ngrx-store/ngrx-store.module').then(m => m.NgrxStoreModule) },
  // { path: 'component-store', loadChildren: () => import('./ngrx-component-store/ngrx-component-store.module').then(m => m.NgrxComponentStoreModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class NgrxModule { }
