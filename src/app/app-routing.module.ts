import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressingComponent } from './addressing/addressing.component';
import { SdlcComponent } from './sdlc/sdlc.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'addressing', component: AddressingComponent },
  { path: 'sdlc', component: SdlcComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
