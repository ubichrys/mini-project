import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private readonly countriesEndpoint = "https://restcountries.eu/rest/v2/region/europe?fields=name;capital;currencies";
  private readonly capitalInfoEndpoint = "https://restcountries.eu/rest/v2/capital";
  private readonly currencyCountriesInfoEndpoint = "https://restcountries.eu/rest/v2/currency/EUR?fields=name";
  constructor(private http: HttpClient) { }

  getCountries(): Observable<any>{
    return this.http.get(this.countriesEndpoint);
  }

  getRegionInfo(capitalName): Observable<any>{
    return this.http.get(this.capitalInfoEndpoint + '/' + capitalName);
  }

  getCountriesWithCurrency(currency): Observable<any>{
    return this.http.get(this.currencyCountriesInfoEndpoint + '/' + currency);
  }
}
