import { Component, OnInit } from '@angular/core';
import { SkillsModel } from '../../models/Skills';

import { SvgModel } from '../../interfaces/svg';
import { SvglService } from '../../services/svgl.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  svgList: SvgModel[] = [];
  constructor(private svglService: SvglService) { }

  ngOnInit(): void {
    this.getSvgList();
    this.deleteOthers(
      this.svgList,
      this.skillsListArray
    );
  }

  // arreglo de objetos listSkills
  skillsListArray: SkillsModel[] = [
    { id: 1, title: 'html5' },
    { id: 2, title: 'CSS' },
    { id: 3, title: 'Angular' },
    { id: 4, title: 'Javascript' },
    { id: 5, title: 'Typescript' },
    { id: 6, title: 'Nodejs' },
    { id: 7, title: 'Vue' },
    { id: 8, title: 'Laravel' },
    { id: 9, title: 'Php' },
    { id: 10, title: 'mysql' },
  ];
  deleteOthers(svgList: SvgModel[], skillsListArray: SkillsModel[]): void {
    // Filtrar solo los que están en skillsListArray
    const svgListFiltered = svgList.filter((svg) => {
      return skillsListArray.some((skill) => {
        console.log('svg.title', svg.title.toLowerCase());
        return svg.title.toLowerCase() === skill.title.toLowerCase();
      });
    });
    console.log('svgListFiltered', svgListFiltered);
    // Actualizar svgList con los elementos filtrados
    svgList.length = 0;
    svgList.push(...svgListFiltered);
  }

  getSvgList(): void {
    this.svglService.getSvg().subscribe(
      (data: SvgModel[]) => {
        this.svgList = data;
        console.log('API response:', data);

        // Llamar a deleteOthers después de haber asignado los datos
        // this.deleteOthers(this.svgList, this.skillsListArray);
      },
      error => {
        console.error('Error fetching SVG list:', error);
      }
    );
  }
}


