import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio';
pantalla="";
pantalla2="";
operador="";
uno(uno:string){
  this.pantalla=this.pantalla+uno;
}
dos(dos:string){
  this.pantalla=this.pantalla+dos;
}
tres(tres:string){
  this.pantalla=this.pantalla+tres;
}
cuatro(cuatro:string){
  this.pantalla=this.pantalla+cuatro;
}
cinco(cinco:string){
  this.pantalla=this.pantalla+cinco;
}
seis(seis:string){
  this.pantalla=this.pantalla+seis;
}
siete(siete:string){
  this.pantalla=this.pantalla+siete;
}
ocho(ocho:string){
  this.pantalla=this.pantalla+ocho;
}
nueve(nueve:string){
  this.pantalla=this.pantalla+nueve;
}
cero(cero:string){
  this.pantalla=this.pantalla+cero;
}
coma(coma:string){
  this.pantalla=this.pantalla+coma;
}
mas(){
  this.pantalla2=this.pantalla;
  this.pantalla="";
  this.operador="mas"
}
menos(){
  this.pantalla2=this.pantalla;
  this.pantalla="";
  this.operador="menos"
}
division(){
  this.pantalla2=this.pantalla;
  this.pantalla="";
  this.operador="division"
}
C(){
  this.pantalla="";
  this.pantalla2="";
}
multiplicacion(){
  this.pantalla2=this.pantalla;
  this.pantalla="";
  this.operador="multiplicacion"
}
igual(){
  let v1=Number(this.pantalla);
  let v2=Number(this.pantalla2);
  if(this.operador=="mas"){
    let sum=Number (v1)+Number(v2);
    this.pantalla = sum.toString();
    this.pantalla2 = "";

  }else if(this.operador=="menos"){
    let sum=Number (v2)-Number(v1);
    this.pantalla = sum.toString();
    this.pantalla2 = ""; 
  }else if(this.operador=="multiplicacion"){
    let sum=Number (v1)*Number(v2);
    this.pantalla = sum.toString();
    this.pantalla2 = ""; 
  }else if(this.operador=="division"){
  let sum=Number (v2)/Number(v1);
  this.pantalla = sum.toString();
  this.pantalla2 = ""; 
}else if(this.operador=="porcentaje"){
  let sum=Number (v1)%Number(v2);
  this.pantalla = sum.toString();
  this.pantalla2 = ""; 
}
}}