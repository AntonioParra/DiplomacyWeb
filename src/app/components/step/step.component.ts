import { Component, Input } from '@angular/core';
import { Step, Turn } from 'src/interfaces';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  @Input()
  public turn: Turn | null = null;
  @Input()
  public step: Step | null = null;

  public getStepName(){
    if(!this.step) {
      return '';
    }
    if (this.step.type === 'a') {
      return 'Fase de negociación + asignación de ordenes'
    }
    if (this.step.type === 'b') {
      return 'Fase de retirada y disolución'
    }
    if (this.step.type === 'c') {
      return 'Fase de construcción y eliminación'
    }
    return ''
  }

  public getUrlMap(){
    if(!this.step || !this.turn) {
      return ''
    }
    if(this.step?.map) {
      return this.step.map;
    } else {
      return 'play/map' + this.turn.turnNumber + this.step.type + '.png'
    }
  }

  public openImg(){
    window.open(location.href + this.getUrlMap(), '_blank')
  }

  public getUrlMap2(){
    if(!this.step || !this.turn) {
      return ''
    }
    if(this.step?.map) {
      return this.step.map;
    } else {
      return 'play/map' + this.turn.turnNumber + this.step.type + '2.png'
    }
  }

  public openImg2(){
    window.open(location.href + this.getUrlMap2(), '_blank')
  }

}
