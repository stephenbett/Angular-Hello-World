import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {path: 'Login', component:LoginComponent},
  {path: "Footer" , component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
