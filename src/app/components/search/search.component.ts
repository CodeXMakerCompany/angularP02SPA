import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GaleriaService } from '../../servicios/galeria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  pictures:any[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
                private _galeriaService: GaleriaService,
                  private router:Router) {

                 }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.pictures = this._galeriaService.buscarImagenes( params ['termino'] );
        console.log( this.pictures );
    });
  }

  verPicture( idx:number ){
    this.router.navigate( ['/picture',idx] );
  }

}
