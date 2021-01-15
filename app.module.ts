import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ContactComponent } from './contact/contact.component';
import { MakeAnAppointmentComponent } from './make-an-appointment/make-an-appointment.component';
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './departments/departments.component';
import { RouterModule } from '@angular/router';
import { FrequentlyAskedQuestionsComponent } from './frequently-asked-questions/frequently-asked-questions.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    DoctorsComponent,
    ContactComponent,
    MakeAnAppointmentComponent,
    HomeComponent,
    DepartmentsComponent,
    FrequentlyAskedQuestionsComponent,
    GalleryComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'about', component: AboutComponent},
      { path: 'make-an-appointments', component: MakeAnAppointmentComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'departments', component: DepartmentsComponent},
      { path: 'services', component: ServicesComponent},
      { path: 'doctors', component: DoctorsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
