import { Component } from '@angular/core';
import { ProjectsModel } from '../../models/Projects';

// icons
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

interface EventItem {
  status?: string;
  date?: string;
  description?: string;
  color?: string;
  puesto?: string;
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIconComponent, TimelineModule, CardModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  viewProviders: [provideIcons({ featherAirplay, heroUsers })]
})
export class ProjectsComponent {
  events: EventItem[];

  constructor() {
    this.events = [
      {
        status: 'Medifarma',
        date: 'Dic. 2017 – En. 2018 | Dic. 2018 – En. 2019',
        description: 'Contabilizar el movimiento y almacenamiento de materias primas, productos (acabados o inacabados), herramientas y equipos.',
        color: '#9C27B0',
        puesto: 'Contable de inventario',
      },
      {
        status: 'ConsigueVentas E.I.R.L',
        date: 'Oct. 2021 – Ene. 2022',
        description: `A cargo del equipo de desarrollo de Apis para el sistema de asistencia y Sistema ERP de la empresa, despliegue de proyectos en Hostinger, manejo de versiones en Github, documentación de Apis.`,
        color: '#673AB7',
        puesto: ' Programador Backend',
      },
      {
        status: 'MDN Hatun S.A.C',
        date: 'Abril 2022 – Enero 2023',
        description: `• Desarrollo de la aplicación web CCAKU (Plataforma de transporte de maquinaria pesada).
                      • Desarrollo de la aplicación web LARA.
                      • Resolver requerimientos solicitados en el desarrollo de las plataformas, manejo de base de datos y despliegue en producción.`,
        color: '#3F51B5',
        puesto: 'Programador FullStack',
      },
      {
        status: 'Alarcon Management Group AMG',
        date: 'Enero 2023 – Diciembre 2023',
        description: `• Integración de Tecnologías
                      • Desarrollo y Mantenimiento del Software Interno
                      • Colaboración y Trabajo en Equipo
                      • Integración de herramientas externas y servicios para mejorar la funcionalidad del software interno`,
        color: '#2196F3',
        puesto: 'Software Engineer',
      }
    ];
  }
  projectsListArray: ProjectsModel[] = [{
    "id": 1,
    "nombre": "IMMEQ",
    "imagen": "../../../assets/images/immeq.png",
    "github": "https://github.com/jairo1397/IMMEQ",
    "enlace": "https://immeq.netlify.app/",
    "tecnologias": ["Html", "Scss", "Javascript"]
  },
  {
    "id": 2,
    "nombre": "AMAUTA",
    "imagen": "../../../assets/images/amauta.png",
    "github": "https://github.com/jairo1397/amauta",
    "enlace": "https://jairo1397.github.io/amauta/inicio",
    "tecnologias": ["Angular", "Html", "Css", "Typescript"]
  },
  {
    "id": 3,
    "nombre": "SpotiApp",
    "imagen": "../../../assets/images/spotiapp.png",
    "github": "https://github.com/jairo1397/spotiapp",
    "enlace": "",
    "tecnologias": ["Angular", "Html", "Css", "Typescript"]
  },
  {
    "id": 4,
    "nombre": "The last of us Part II",
    "imagen": "../../../assets/images/tlou.png",
    "github": "https://github.com/jairo1397/tlou",
    "enlace": "https://proyecto-tlou.netlify.app/",
    "tecnologias": ["Html", "Scss", "Javascript"]
  },
  {
    "id": 5,
    "nombre": "App de Salon de Belleza",
    "imagen": "../../../assets/images/peluqueria.png",
    "github": "https://github.com/jairo1397/AppSalon",
    "enlace": "https://app-salon-belleza.netlify.app/",
    "tecnologias": ["Html", "Scss", "Javascript"]
  },
  {
    "id": 6,
    "nombre": "Bienes Raices",
    "imagen": "../../../assets/images/bienes-raices.png",
    "github": "https://github.com/jairo1397/BienesRaices",
    "enlace": "",
    "tecnologias": ["Php", "Html", "Scss", "Javascript"]
  }
  ]

}
