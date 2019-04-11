import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/countries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currency-countries',
  templateUrl: './currency-countries.component.html',
  styleUrls: ['./currency-countries.component.scss']
})
export class CurrencyCountriesComponent implements OnInit {

  constructor(private countriesService: CountriesService,
              private route: ActivatedRoute ) { }

    ngOnInit() {
      this.route.params.subscribe(currency => {
        console.log('currency: ', currency); //currency == {currency: "EUR"}
        this.countriesService.getCountriesWithCurrency(currency.currency).subscribe(countries => {
          console.log("COUNTRIES BY CUR: ", countries);
        });
      });
    }

}
