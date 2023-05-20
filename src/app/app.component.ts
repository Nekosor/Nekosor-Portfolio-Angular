import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Nekosor";
  isPortfolioPage = false; //  OCULTAR EL CONTENIDO DEL APP COMPONENT
  isHobbiesPage = false;
  isCurriculumPage = false;
  isDiplomadosyCertificadosPage = false;
  isProyectosPage = false;
  isLogrosPage = false;
  isHardwarePage = false;
  isEdicionyDisenoPage = false;
  isEventosyComidaPage = false;
  isTutorialesyguiasPage = false;
  isVideojuegosPage = false;
  isToolsAiPage = false;

 
  

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isPortfolioPage = event.urlAfterRedirects.includes('/portfolio');
        this.isHobbiesPage = event.urlAfterRedirects.includes('/hobbies');
        this.isCurriculumPage = event.urlAfterRedirects.includes('/curriculum');
        this.isDiplomadosyCertificadosPage = event.urlAfterRedirects.includes('/diplomadosycertificados');
        this.isProyectosPage = event.urlAfterRedirects.includes('/proyectos');
        this.isLogrosPage = event.urlAfterRedirects.includes('/logros');
        this.isHardwarePage = event.urlAfterRedirects.includes('/hardware');
        this.isEdicionyDisenoPage = event.urlAfterRedirects.includes('/edicionydiseno');
        this.isEventosyComidaPage = event.urlAfterRedirects.includes('/eventosycomida');
        this.isTutorialesyguiasPage = event.urlAfterRedirects.includes('/tutorialesyguias');
        this.isVideojuegosPage = event.urlAfterRedirects.includes('/videojuegos');
        this.isToolsAiPage = event.urlAfterRedirects.includes('/toolsai');

      }
    });
  }
}
