import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/countries.service';
import { ActivatedRoute } from '@angular/router';

interface regionInfo{
  capital: string;
  population:string;
  nativeName:string;
  subregion:string;
}

@Component({
  selector: 'app-region-info',
  templateUrl: './region-info.component.html',
  styleUrls: ['./region-info.component.scss']
})
export class RegionInfoComponent implements OnInit {

  info: regionInfo = {
    capital: '',
    population:'',
    nativeName:'',
    subregion:''
  }

  constructor(private countriesService: CountriesService,
              private route: ActivatedRoute ) { }

  ngOnInit() {

    this.route.params.subscribe(capital => {
      // console.log('capital: ', capital); //capital == {name: "Sofia"}
      this.countriesService.getRegionInfo(capital.name).subscribe(info => {
        this.info = info[0];
      });
    });

  }

}
