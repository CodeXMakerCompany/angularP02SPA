import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GaleriaService } from '../../servicios/galeria.service';


@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html'
})
export class PictureComponent  {

  picture:any = {};


  constructor( private activatedRoute: ActivatedRoute,
                private _galeriaService: GaleriaService
                  ) {

    this.activatedRoute.params.subscribe ( params =>{
      this.picture = this._galeriaService.getPicture( params['id'] );
      console.log(this.picture);
    });

  }



}
