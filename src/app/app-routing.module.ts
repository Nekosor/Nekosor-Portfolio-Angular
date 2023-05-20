import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { CurriculumComponent } from './portfolio/curriculum/curriculum.component';
import { HardwareComponent } from './portfolio/hardware/hardware.component';
import { ProyectosComponent } from './portfolio/proyectos/proyectos.component';
import { LogrosComponent } from './portfolio/logros/logros.component';
import { DiplocertiComponent } from './portfolio/diplocerti/diplocerti.component';
import { EditdisenComponent } from './hobbies/editdisen/editdisen.component';
import { EventcomidComponent } from './hobbies/eventcomid/eventcomid.component';
import { TutosyguiasComponent } from './hobbies/tutosyguias/tutosyguias.component';
import { VideojuegosComponent } from './hobbies/videojuegos/videojuegos.component';
import { ToolsaiComponent } from './hobbies/toolsai/toolsai.component';
import  { IntroComponent } from './intro/intro.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';



const routes: Routes = [

  { path: '', component: IntroComponent },
  { path: 'portfolio', component: PortfolioComponent,  },
  { path: 'hobbies', component: HobbiesComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'curriculum', component: CurriculumComponent },
      { path: 'hardware', component: HardwareComponent },
      { path: 'proyectos', component: ProyectosComponent },
      { path: 'logros', component: LogrosComponent },
      { path: 'diplomadosycertificados', component: DiplocertiComponent },
      { path: 'edicionydiseno', component: EditdisenComponent },
      { path: 'eventosycomida', component: EventcomidComponent },
      { path: 'tutorialesyguias', component: TutosyguiasComponent },
      { path: 'videojuegos', component: VideojuegosComponent },
      { path: 'toolsai', component: ToolsaiComponent },
    ]
  },
  { path: '**', redirectTo: '/' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
