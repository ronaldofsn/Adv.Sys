import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Cadastrar',
      url: '/registrar',
      icon: 'cafe'
    },
    {
      title: 'Lista',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Processos',
      url: '/processos',
      icon: 'briefcase'
    },
    {
      title: 'Agendar',
      url: '/agendar',
      icon: 'calendar'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
