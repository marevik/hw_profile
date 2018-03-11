import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name: string ="Name:";
  lastName: string ="Last Name:";
  age: string="Age:";
  job: string="Job:";
  company: string="Company:";

  // editName(event){
  //   console.log(event.target.value);
  // }
  NewElements:number=21;
  addElement(){
    this.valueAge(this.NewElements);
  }

  valueName: string="Igor";
  valueLastName: string="Chornyy";
  valueAge: any = 21;
  valueJob: string="Developer";
  valueCompany: string=" Igorko Corporation";
  isShow: boolean = true;
  onClickButton(){
    this.isShow= !this.isShow;
  }
  //---------------------------------add- skill
skill: any = ["html", "css", "js", "jquery", "bootstrap", "git"];
newSkill:string;
addSkill(){
  this.skill.push(this.newSkill);
}
isShowSkill: boolean = true;
onClickButtonSkill(){
  this.isShowSkill= !this.isShowSkill;
}



}


