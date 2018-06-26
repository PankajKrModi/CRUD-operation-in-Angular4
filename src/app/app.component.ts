import { Component } from '@angular/core';
import { isNull } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  emp_list=[
    {"name":"John","pos":"Manager"},
    {"name":"Sam","pos":"Del Manager"}
  ];
  modal:any={};
  addEmp(){
    if(this.modal!=null)
     this.emp_list.push(this.modal);
    this.modal={};
    }
  
  delete(i){
    this.emp_list.splice(i,1);
  }


  myValue:number;
  modal2:any={};
  edit(k:number){ 
    this.myValue=k;
    this.modal2.name=this.emp_list[k].name;
    this.modal2.pos=this.emp_list[k].pos;
  }
  save(){
    let k=this.myValue;
    this.emp_list[k] = this.modal2;
    this.modal2={};
  }
}
