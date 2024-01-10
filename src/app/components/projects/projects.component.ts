import { Component } from '@angular/core';
import { ProjectsModel } from '../../models/Projects';

// icons
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  viewProviders: [provideIcons({ featherAirplay, heroUsers })]
})
export class ProjectsComponent {
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
