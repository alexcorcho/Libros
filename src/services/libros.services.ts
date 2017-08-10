import { Injectable } from '@angular/core';

@Injectable ()
export class LibroService{
   libros =[
    {id:1, title:'libro 1', Autor:'autor del libro 1',Npage:'350',descripcion:'libro muy bueno'},
    {id:2, title:'libro 2', Autor:'autor del libro 2',Npage:'120',descripcion:'recomendado '},
    {id:3, title:'libro 3', Autor:'autor del libro 3',Npage:'290',descripcion:'libo malo pero en buen estado'},
    {id:4, title:'libro 4', Autor:'autor del libro 4',Npage:'120',descripcion:'recomendado '},
    {id:5, title:'libro 5', Autor:'autor del libro 5',Npage:'500',descripcion:'recomendado '}
  ]; 
public getLibros(){
    return this.libros;
    }
  public getLibro(id){
    return this.libros.filter(function(e, i){return e.id == id })[0] || {id: null, title:null, Autor:null, Npage:null, descripcion:null};
  }
}