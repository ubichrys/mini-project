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
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  countries: country[];

  constructor(private countriesService: CountriesService ) { }

  ngOnInit() {
    this.countriesService.getCountries().subscribe(countries => {
      this.countries = countries;
    });
  }

}
