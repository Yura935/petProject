import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDetailsComponent } from './components/main-details/main-details.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'features' },
  { path: 'features', component: MainComponent },
  { path: 'features/:id/:username', component: MainDetailsComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
