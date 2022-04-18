import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  employeeData = JSON.parse(localStorage.getItem('employeeData') || JSON.stringify({
    nameValue: '',
    birthValue: '',
    codeOfIdValue: '',
    emailValue: '',
    passwordValue: '',
    sexSelectValue:'',
    termsValue: false
  }));

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
      localStorage.setItem('employeeData', JSON.stringify(this.employeeData));
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
      this.employeeData.sexSelectValue.trim().length &&
      this.employeeData.termsValue
    ){
      return false
    }
    return true
  }

  getInputValue(data: string, typeInput: string){
    switch(typeInput){
      case "name": 
        this.employeeData.nameValue = data;
        break;
      case "birth":
        this.employeeData.birthValue = data;
        break;
      case "codeOfId":
        this.employeeData.codeOfIdValue = data;
        break;
      case "email":
        this.employeeData.emailValue = data;
        break;
      case "password":
        this.employeeData.passwordValue = data;
        break;
      case "sex":
        this.employeeData.sexSelectValue = data;
        break;
    }
  }

  getCheckValue(isCheck: boolean){
    this.employeeData.termsValue = isCheck;
  }
}
