import { Routes } from '@angular/router';

// components
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path: '',title: 'Home', component: HomeComponent},
    {path: 'home',title: 'Home', component: HomeComponent},
    {path: 'about',title: 'About', component: AboutComponent},
    {path: 'skills',title: 'Skills', component: SkillsComponent},
    {path: 'projects',title: 'Projects', component: ProjectsComponent},
    {path: 'contact',title: 'Contact', component: ContactComponent},
    {path: '**', redirectTo: ''}
];
