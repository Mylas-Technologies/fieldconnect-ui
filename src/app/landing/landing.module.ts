import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SassOneAppsComponent } from './sass-one-apps/sass-one-apps.component';
import { SassOneBannerComponent } from './sass-one-banner/sass-one-banner.component';
import { SassOneCounterComponent } from './sass-one-counter/sass-one-counter.component';
import { SassOnePricingComponent } from './sass-one-pricing/sass-one-pricing.component';
import { SassOneServicesComponent } from './sass-one-services/sass-one-services.component';
import { SassOneStandardComponent } from './sass-one-standard/sass-one-standard.component';
import { SassOneTestimonialComponent } from './sass-one-testimonial/sass-one-testimonial.component';
import { SassOneTrustedCompanyComponent } from './sass-one-trusted-company/sass-one-trusted-company.component';
import { SassOneWhyChooseComponent } from './sass-one-why-choose/sass-one-why-choose.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    LandingComponent,
    SassOneAppsComponent,
    SassOneBannerComponent,
    SassOneCounterComponent,
    SassOnePricingComponent,
    SassOneServicesComponent,
    SassOneStandardComponent,
    SassOneTestimonialComponent,
    SassOneTrustedCompanyComponent,
    SassOneWhyChooseComponent,
    NavbarComponent,
    NewsletterComponent,
    HomeComponent,
    FooterComponent


  ],
  imports: [
    CommonModule,
    LandingRoutingModule,   
    CarouselModule,
    NgxScrollTopModule,
  
  ]
})
export class LandingModule { }
