import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: any
  msgError: string = ""

  constructor(private _http: HttpService ) { }

  ngOnInit(): void {
    this.listNotes()
  }

  listNotes() {
    this._http.listNoteService().subscribe( {
      next: (result) => {
        // console.log('lista OK : ' + JSON.stringify(result) )
        this.notes = result
        } ,
      error: (error) => {
        // console.log('Consulta Error: ' + JSON.stringify( error ) )
        this.msgError = "Error al consultar el dato."
      }
     } )
  }
}
