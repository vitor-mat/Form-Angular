import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  employeeData = {
    nameValue: '',
    birthValue: '',
    codeOfIdValue: '',
    emailValue: '',
    passwordValue: '',
    repasswordValue:'',
    sexSelectValue:'',
    termsValue: false
  };

  disableState = true;

  allowEditMode(btnEdit: HTMLButtonElement, btnSave: HTMLButtonElement) {
    btnEdit.setAttribute("style", "display: none;")
    btnSave.setAttribute("style", "display: block;")
    this.disableState = false;
    return;
  }

  saveData(btnEdit: HTMLButtonElement, btnSave: HTMLButtonElement, alertError: HTMLDivElement) {
      
    if(this.validationUserInput()){
      btnEdit.setAttribute("style", "display: block;")
      btnSave.setAttribute("style", "display: none;")
      this.disableState = true;
      return;
    }

    alertError.setAttribute("style", "display: flex;")
    return;
  }

  validationUserInput(){
    if(this.inputsIsNotEmpty()){
      return false
    }
    return true
  }

  inputsIsNotEmpty(){
    if(
      this.employeeData.nameValue.trim().length &&
      this.employeeData.birthValue.trim().length &&
      this.employeeData.codeOfIdValue.trim().length &&
      this.employeeData.emailValue.trim().length &&
      this.employeeData.passwordValue.trim().length &&
      this.employeeData.repasswordValue.trim().length &&
      this.employeeData.sexSelectValue.trim().length &&
      this.employeeData.termsValue
    ){
      return false
    }
    return true
  }

}
