import { Component, ViewChild } from '@angular/core';
import { NotesComponent } from './notes/notes.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '10_NotasAnonimas-Angular';

  //Declaro el hijo para llamar un metodo de el
  @ViewChild(NotesComponent) NoteChild!: NotesComponent;

  listaNotes(eventData: any) {
    //esta funcion la llama al metodo del NotesComponent
    // console.log("Listar notas")
    this.NoteChild.listNotes()

  }
}
