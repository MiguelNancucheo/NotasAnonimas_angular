import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlLocal:string = environment.urlLocal

  constructor(private _http: HttpClient ) { }

  newNoteService (newNote:any) {
    return this._http.post( this.urlLocal + '/note', newNote)
  }
  listNoteService () {
    return this._http.get( this.urlLocal + '/notes')
  }
}
