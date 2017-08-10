import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LibroService } from '../../services/libros.services';



@Component({
  selector: 'page-ingreso',
  templateUrl: 'ingreso.html',
})
export class IngresoPage {
  libros = {id: null, title:null, Autor:null, Npage:null, descripcion:null};
  id=null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public LibroService : LibroService) {
   this.id = navParams.get('id');
    this.libros = LibroService.getLibro(this.id);
  }

}
