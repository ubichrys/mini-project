import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EuropeRegionComponent } from './europe-region/europe-region.component';
import { CountriesService } from './countries.service';
import { RouterModule, Routes } from '@angular/router';
import { RegionInfoComponent } from './europe-region/region-info/region-info.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyCountriesComponent } from './currencies/currency-countries/currency-countries.component';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: '', component: EuropeRegionComponent, children:[
    {path: "region-info/:name", component: RegionInfoComponent}
  ]},
  {path: "currencies", component: CurrenciesComponent, children:[
    {path: "currency-countries/:currency", component: CurrencyCountriesComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    EuropeRegionComponent,
    RegionInfoComponent,
    CurrenciesComponent,
    CurrencyCountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
