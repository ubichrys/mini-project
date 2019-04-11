import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

interface currency{
  code: number;
  name: string;
  symbol: string;
}

interface country{
  capital: string;
  currencies: currency[];
  name: string;
}


@Component({
  selector: 'app-europe-region',
  templateUrl: './europe-region.component.html',
  styleUrls: ['./europe-region.component.scss']
})
export class EuropeRegionComponent implements OnInit {

  countries: country[];

  constructor(private countriesService: CountriesService ) { }

  ngOnInit() {
    this.countriesService.getCountries().subscribe(countries => {
      this.countries = countries;
      console.log(this.countries);
    });
  }

}
