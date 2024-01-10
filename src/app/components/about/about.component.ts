import { Component, ViewEncapsulation  } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgbTooltipModule],
  templateUrl: './about.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './about.component.css'
})
export class AboutComponent {
  email = 'jairo.espinoza.quispe@gmail.com';
  showTooltip = false;

  constructor(private clipboardService: ClipboardService) {}

  copyToClipboard() {
    this.showTooltip = true;
    this.clipboardService.copyFromContent(this.email);
  }
}
