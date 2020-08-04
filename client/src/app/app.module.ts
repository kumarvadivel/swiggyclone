import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { SitefooterComponent } from './components/sitefooter/sitefooter.component';
import { Footersub1Component } from './components/footersub1/footersub1.component';
import { Footersub2Component } from './components/footersub2/footersub2.component';
import { Sitefooter3Component } from './components/sitefooter3/sitefooter3.component';
import { Homesub1Component } from './components/homesub1/homesub1.component';
import { Homesub2Component } from './components/homesub2/homesub2.component';
import { Homesub3Component } from './components/homesub3/homesub3.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OfferareaComponent } from './offerarea/offerarea.component';
import { RestaurantsdisplayComponent } from './restaurantsdisplay/restaurantsdisplay.component';
import { HotelcardComponent } from './hotelcard/hotelcard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HotelprofileComponent } from './components/hotelprofile/hotelprofile.component';
import { CrumbComponent } from './components/crumb/crumb.component';
import { HotelprofdataComponent } from './components/hotelprofdata/hotelprofdata.component';
import { OffertagsComponent } from './components/offertags/offertags.component';
import { HotelprofbundleComponent } from './components/hotelprofbundle/hotelprofbundle.component';
import { CartComponent } from './components/cart/cart.component';
import { HotelfoodComponent } from './components/hotelfood/hotelfood.component';
import { FoodcardComponent } from './components/foodcard/foodcard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './components/address/address.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SitefooterComponent,
    Footersub1Component,
    Footersub2Component,
    Sitefooter3Component,
    Homesub1Component,
    Homesub2Component,
    Homesub3Component,
    LoginComponent,
    RestaurantsComponent,
    NavbarComponent,
    OfferareaComponent,
    RestaurantsdisplayComponent,
    HotelcardComponent,
    HotelprofileComponent,
    CrumbComponent,
    HotelprofdataComponent,
    OffertagsComponent,
    HotelprofbundleComponent,
    CartComponent,
    HotelfoodComponent,
    FoodcardComponent,
    CheckoutComponent,
    AddressComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SnotifyModule,FontAwesomeModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() 
    
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
