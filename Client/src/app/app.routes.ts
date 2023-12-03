import { Routes } from '@angular/router';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { GymspageComponent } from '../components/gymspage/gymspage.component';
import { CompetitionspageComponent } from '../components/competitionspage/competitionspage.component';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'gyms', component: GymspageComponent},
    {path: 'competitions', component: CompetitionspageComponent}
];
