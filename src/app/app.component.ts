import { Component, OnInit } from '@angular/core';
import { Turn } from 'src/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public turns: Turn[] = [];
  public currentTurn: Turn | null = null

  ngOnInit(): void {
    fetch('play/log.json').then((response) => response.json()).then(data => {
      this.turns = data
      this.currentTurn = Object.assign({}, this.turns[this.turns.length - 1])
      this.currentTurn.steps = [this.currentTurn.steps[this.currentTurn.steps.length - 1]]
    })
  }
}
