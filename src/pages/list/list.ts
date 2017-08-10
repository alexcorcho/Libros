import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LibroService } from  '../../services/libros.services';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  libros = [];
   @ViewChild('myNav') nav: NavController
    constructor(public navCtrl: NavController, public LibroService : LibroService  ) {
    this.libros = LibroService.getLibros();
    }
    public Detalle(id){
      this.navCtrl.push(ItemDetailsPage,{id:id});
    }
  }

