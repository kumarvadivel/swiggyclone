import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HotelprofileComponent } from './components/hotelprofile/hotelprofile.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [{
  path:'',component:HomeComponent
},
{
  path:'restaurants/:city',component:RestaurantsComponent
},
{
  path:'restaurant/:city/:id',component:HotelprofileComponent
},{
  path:'checkout',component:CheckoutComponent
},{
  path:'profile',component:ProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
