
import {Recuadros} from '@/components/cuadros';
import { text } from 'stream/consumers';
export const RecuadroData = [
  { 
    title: "Comida para perro", 
    subtitles: [
      {
        name : "EDAD" , 
        texts : [
        {text:"Cachorro" , style:""},
        { text:"Adulto",style:" "}, 
        {text:"Senior", style:""}
        ],
      
  },
      {
        name :"NECESIDADES ESPECIALES" , 
        texts : [
        {text:"Sin granos", style:" "},
        {text:"Alta proteina", style:""},
        {text:"Manejo de peso", style:" "},
        {text:"estomagós sensibles", style:" "},
        {text:"soporte movilidad y articulaciones", style:" "},
      ],
    },     
  ],
    color: "bg-gris1" 
  },

  { 
    title: "Comida para gato", 
    subtitles: [
      {
        name : "EDAD" , 
        texts : [
        {text:"Cachorro" , style:""},
        { text:"Adulto",style:""}, 
        {text:"Senior", style:" "}
        ],
      },
      {name :"NECESIDADES ESPECIALES" , 
        texts : [
        {text:"Sin granos", style:" "},
        {text:"Alta proteina", style:" "},
        {text:"Manejo de peso", style:" "},
         {text:"estomagós sensibles", style:" "},
        {text:"soporte movilidad y articulaciones", style:" "},
      ],
    },     
  ],
    color: "bg-gris2" 
  },
  
  { 
    title: "Comunidad", 
    subtitles: [
      {texts: [
        {text:"Los perros y gatos mas que mascotas son familia", style:""}]},
      {texts: [
       { text:"Rescates y adopcion.", style:""}]}
    ], 
     
    color: "bg-gris3" 
  }
];


  