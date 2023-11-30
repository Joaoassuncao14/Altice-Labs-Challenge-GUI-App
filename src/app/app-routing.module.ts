import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputValueComponent } from './components/input-value/input-value.component';

const routes: Routes = [
  {path: '', component: InputValueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
