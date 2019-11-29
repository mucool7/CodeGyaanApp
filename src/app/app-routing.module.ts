import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './Pages/Dashboard/Dashboard.Page';
import { HomePage } from './Pages/home/home.page';
import { SettingPage } from './Pages/Setting/Setting.Page';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home', component:HomePage},
  { path:'dashboard', component:DashboardPage },
  { path:'setting', component:SettingPage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
