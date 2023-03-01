import { Component, Input } from '@angular/core';
import { CountryCommand } from 'src/interfaces';

@Component({
  selector: 'app-country-command',
  templateUrl: './country-command.component.html',
  styleUrls: ['./country-command.component.scss']
})
export class CountryCommandComponent {

  @Input()
  public countryCommand: CountryCommand | null = null;


}
