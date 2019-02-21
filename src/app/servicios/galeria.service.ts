import { Injectable } from '@angular/core';

@Injectable()
export class GaleriaService {

  private galeria:Galeria[] = [
    {
      nombre: "Chica con alas",
      bio: "Esta es una prueba de texto para la card prototypeA",
      img: "assets/images/cute.png",
      aparicion: "2019-11-01",
      marca:"codex"
    },
    {
      nombre: "Chica con sueter",
      bio: "Esta es una prueba de texto para la card prototypeB",
      img: "assets/images/cuteLady.png",
      aparicion: "2018-05-01",
      marca:"maker"
    },
    {
      nombre: "Miku sad",
      bio: "Esta es una prueba de texto para la card prototypeC",
      img: "assets/images/idkG.png",
      aparicion: "2017-01-01",
      marca:"codex"
    },
    {
      nombre: "Chica sentada",
      bio: "Esta es una prueba de texto para la card prototypeD",
      img: "assets/images/tosa.png",
      aparicion: "2016-05-01",
      marca:"maker"
    },
    {
      nombre: "Miku sentada",
      bio: "Esta es una prueba de texto para la card prototypeE",
      img: "assets/images/miku.png",
      aparicion: "2015-06-01",
      marca:"codex"
    },
    {
      nombre: "Miku con conejo",
      bio: "Esta es una prueba de texto para la card prototypeF",
      img: "assets/images/mikuRab.png",
      aparicion: "2014-08-01",
      marca:"maker"
    }
  ];



  constructor() {

      console.log("Servicio listo para su uso");

   }


   getGaleria():Galeria[]{

     return this.galeria;

   }

   getPicture( idx: string ){

     return this.galeria[idx];

   }

   buscarImagenes( termino:string ):Galeria[] {

      let imagenesArr:Galeria[] = [];
      termino = termino.toLowerCase();
      // se crea la variable palabra que iterara los registros de la galeria
      for ( let i = 0; i < this.galeria.length; i ++ ){

          let palabra = this.galeria[i];
          let nombre = palabra.nombre.toLowerCase();

          if ( nombre.indexOf ( termino ) >= 0 ) {
                palabra.idx = i;
                imagenesArr.push( palabra )
          }

      }

      return imagenesArr;

   }

}

export interface Galeria{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  marca: string;
  idx?: number;
};
