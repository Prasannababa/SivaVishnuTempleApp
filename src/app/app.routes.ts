import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TrusteesComponent } from './trustees/trustees.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },  // Default path set to Home
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'trustees', component: TrusteesComponent },
    { path: 'gallery', component: GalleryComponent },
];
