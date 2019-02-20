import { Component, OnInit } from '@angular/core';
import { GaleriaService, Galeria } from '../../servicios/galeria.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html'
})
export class GaleriaComponent implements OnInit {

  galeria:Galeria[] = [];

  constructor( private _galeriaService:GaleriaService ) {



   }

  ngOnInit() {


    this.galeria = this._galeriaService.getGaleria();

    console.log( this.galeria );

  }

}
