import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: StartComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'home', component: HomeComponent}
];
