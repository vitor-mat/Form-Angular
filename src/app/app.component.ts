import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  disableState = true;

  allowEditMode(btnEdit: HTMLButtonElement, btnSave: HTMLButtonElement) {
    btnEdit.setAttribute("style", "display: none;")
    btnSave.setAttribute("style", "display: block;")
    this.disableState = false;
    return;
  }

  saveData(btnEdit: HTMLButtonElement, btnSave: HTMLButtonElement) {
      btnEdit.setAttribute("style", "display: block;")
      btnSave.setAttribute("style", "display: none;")
      this.disableState = true;
      return;
  }

}
