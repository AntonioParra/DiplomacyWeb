import { Component, Input } from '@angular/core';
import { Turn } from 'src/interfaces';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.scss']
})
export class TurnComponent {

  @Input()
  public turn: Turn | null = null;

  private INITIAL_YEAR = 1901;

  public getTurnName() {
    let turnNumber = 'Turno ' + this.turn?.turnNumber
    let estacion = ((this.turn?.turnNumber || 0) % 2 == 1) ? 'Primavera' : 'Otoño'
    let anyo = this.INITIAL_YEAR + Math.floor(((this.turn?.turnNumber || 0) - 1) / 2)
    return `${estacion} ${anyo} (${turnNumber})`
  }
}
