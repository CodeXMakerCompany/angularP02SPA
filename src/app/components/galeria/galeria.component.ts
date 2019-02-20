import { Component, OnInit } from '@angular/core';
import { GaleriaService, Galeria } from '../../servicios/galeria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html'
})
export class GaleriaComponent implements OnInit {

  galeria:Galeria[] = [];

  constructor( private _galeriaService:GaleriaService,
                private router:Router
                ) {



   }

  ngOnInit() {


    this.galeria = this._galeriaService.getGaleria();

    //console.log( this.galeria );

  }

  verPicture( idx:number ){
    this.router.navigate( ['/picture',idx] );
  }

}
