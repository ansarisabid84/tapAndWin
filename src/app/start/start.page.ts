import { Component, ElementRef, ViewChild } from '@angular/core';
import { Gesture, GestureController, GestureDetail, IonButton, IonContent, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonText]
})
export class StartPage {

  @ViewChild('playerOne', { read: ElementRef }) playerOne!: ElementRef<HTMLIonButtonElement>;
  @ViewChild('playerTwo', { read: ElementRef }) playerTwo!: ElementRef<HTMLIonButtonElement>;

  private playerOneScore = 100;
  private playerTwoScore = 0;

  timeLeft = 300;

  constructor(private gestureCtrl: GestureController) { }

  ngAfterViewInit() {
    const playerOneGesture: Gesture = this.gestureCtrl.create({
      el: this.playerOne.nativeElement,
      threshold: 0,
      gestureName: 'tab',
      onStart: ev => this.onStartOne(ev, 1),
    }, true);
    playerOneGesture.enable(true);

    const playerTwoGesture: Gesture = this.gestureCtrl.create({
      el: this.playerTwo.nativeElement,
      threshold: 0,
      gestureName: 'tab',
      onStart: ev => this.onStartTwo(ev, 2),
    }, true);
    playerTwoGesture.enable(true);

    
  }

  onStartOne(ev: GestureDetail, whichPlayer: number): boolean | void {
    if(this.playerOneScore != 0) {
      this.playerOneScore--;
      this.playerOne.nativeElement.style.setProperty(`--background`, `linear-gradient(0deg, beige ${this.playerOneScore}%, green 0%)`);

      if(this.playerTwoScore < 100 && this.playerTwoScore > 0){
        this.playerTwoScore--;
        this.playerTwo.nativeElement.style.setProperty(`--background`, `linear-gradient(0deg, green ${this.playerTwoScore}%, beige 0%)`);
      }
    }
  }

  onStartTwo(ev: GestureDetail, whichPlayer: number): boolean | void {
    if(this.playerTwoScore != 100) {
      this.playerTwoScore++;
      this.playerTwo.nativeElement.style.setProperty(`--background`, `linear-gradient(0deg, green ${this.playerTwoScore}%, beige 0%)`);

      if(this.playerOneScore > 0 && this.playerOneScore < 100) {
        this.playerOneScore++;
        this.playerOne.nativeElement.style.setProperty(`--background`, `linear-gradient(0deg, beige ${this.playerOneScore}%, green 0%)`);
      }
    }
  }

}
