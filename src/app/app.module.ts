import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { CurriculumComponent } from './portfolio/curriculum/curriculum.component';
import { DiplocertiComponent } from './portfolio/diplocerti/diplocerti.component';
import { HardwareComponent } from './portfolio/hardware/hardware.component';
import { LogrosComponent } from './portfolio/logros/logros.component';
import { ProyectosComponent } from './portfolio/proyectos/proyectos.component';
import { EditdisenComponent } from './hobbies/editdisen/editdisen.component';
import { EventcomidComponent } from './hobbies/eventcomid/eventcomid.component';
import { TutosyguiasComponent } from './hobbies/tutosyguias/tutosyguias.component';
import { VideojuegosComponent } from './hobbies/videojuegos/videojuegos.component';
import { ToolsaiComponent } from './hobbies/toolsai/toolsai.component';
import { IntroComponent } from './intro/intro.component';
import { from } from 'rxjs';
import {MatListModule} from '@angular/material/list'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HobbiesComponent,
    CurriculumComponent,
    DiplocertiComponent,
    HardwareComponent,
    LogrosComponent,
    ProyectosComponent,
    EditdisenComponent,
    EventcomidComponent,
    TutosyguiasComponent,
    VideojuegosComponent,
    ToolsaiComponent,
    IntroComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainLayoutComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
