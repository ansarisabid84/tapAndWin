import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonToolbar, IonTitle, IonContent, IonText, IonCard, IonIcon ,IonModal, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { helpOutline, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonModal, IonIcon, IonCard, IonText, IonToolbar, IonTitle, IonContent, IonLabel, RouterLink],
})
export class HomePage {
  constructor() { 
    addIcons({helpOutline, settingsOutline});
  }
}
