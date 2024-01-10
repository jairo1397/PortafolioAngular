import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SvgModel } from '../interfaces/svg';
@Injectable({
  providedIn: 'root'
})
export class SvglService {
  private url = 'https://svgl.app/api/svgs';

  constructor(private http: HttpClient) { }

  getSvg(): Observable<SvgModel[]> {
    return this.http.get<SvgModel[]>(this.url);
  }
}
