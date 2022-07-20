import { ApproveBeneficaryComponent } from './approve-beneficary/approve-beneficary.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

//{
 // path: "/approve-beneficary/+accountNumber",
 // component:ApproveBeneficaryComponent
//}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

