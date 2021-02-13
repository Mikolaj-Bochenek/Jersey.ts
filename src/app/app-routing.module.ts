import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressingComponent } from './addressing/addressing.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'addressing', component: AddressingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
