import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  note: string
  msgPlaceNote:string
  msgError:string

  //para llamar un metodos del padre
  @Output() alistaNotes = new EventEmitter()

  constructor(private _http: HttpService) {
    this.note = ""
    this.msgPlaceNote = ""
    this.msgError = ""
  }

  ngOnInit(): void {
  }

  newNote() {
    this.msgPlaceNote = ""
    this.msgError = ""
    this.note = this.note.trim()
    if (this.note.length < 3 || this.note.length > 60) {
      this.msgPlaceNote = "Notas de largo minimo 3 caracteres y maximo 60."
      return
    }
    this._http.newNoteService( { note: this.note } ).subscribe( {
        next: (result) => {
          // console.log('nueva nota OK : ' + JSON.stringify(result) )
          // actualizar la lista
          this.alistaNotes.emit(true)//llamo al padre
          } ,
        error: (error) => {
          // console.log('Consulta Error: ' + JSON.stringify( error ) )
          this.msgError = "Error al consultar el dato."
        }
    } )
    this.note = ""
  }
}
