import { Injectable } from '@angular/core';

@Injectable()
export class GaleriaService {

  private galeria:Galeria[] = [
    {
      nombre: "Chica con alas",
      bio: "Esta es una prueba de texto para la card prototypeA",
      img: "assets/images/cute.png",
      aparicion: "1941-11-01",
      marca:"codex"
    },
    {
      nombre: "Chica con sueter",
      bio: "Esta es una prueba de texto para la card prototypeB",
      img: "assets/images/cuteLady.png",
      aparicion: "1939-05-01",
      marca:"codex"
    },
    {
      nombre: "Miku sad",
      bio: "Esta es una prueba de texto para la card prototypeC",
      img: "assets/images/idkG.png",
      aparicion: "1964-01-01",
      marca:"codex"
    },
    {
      nombre: "Chica sentada",
      bio: "Esta es una prueba de texto para la card prototypeD",
      img: "assets/images/tosa.png",
      aparicion: "1962-05-01",
      marca:"codex"
    },
    {
      nombre: "Miku sentada",
      bio: "Esta es una prueba de texto para la card prototypeE",
      img: "assets/images/miku.png",
      aparicion: "1940-06-01",
      marca:"codex"
    },
    {
      nombre: "Miku con conejo",
      bio: "Esta es una prueba de texto para la card prototypeF",
      img: "assets/images/mikuRab.png",
      aparicion: "1962-08-01",
      marca:"codex"
    }
  ];



  constructor() {

      console.log("Servicio listo para su uso");

   }


   getGaleria(){
     return this.galeria;
   }

}

export interface Galeria{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  marca: string;

};
