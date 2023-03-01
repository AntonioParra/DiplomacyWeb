import { Component, Input } from '@angular/core';
import { Command } from 'src/interfaces';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent {

  @Input()
  public command: Command | null = null
}
