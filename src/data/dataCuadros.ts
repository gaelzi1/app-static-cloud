
import {Recuadros} from '@/components/cuadros';
import { text } from 'stream/consumers';
export const RecuadroData = [
  { 
    title: "Comida para perro", 
    subtitles: [
      {
        name : "EDAD" , 
        texts : [
        {text:"Cachorro" , style:"cardGeneral"},
        { text:"Adulto",style:"cardGeneral "}, 
        {text:"Senior", style:"cardGeneral "}
        ],
      
  },
      {
        name :"NECESIDADES ESPECIALES" , 
        texts : [
        {text:"Sin granos", style:"cardGeneral "},
        {text:"Alta proteina", style:"cardGeneral "},
        {text:"Manejo de peso", style:"cardGeneral "},
        {text:"soporte movilidad y articulaciones", style:"cardGeneral "},
        {text:"estomagos sencibles", style:"cardGeneral "},
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
        {text:"Cachorro" , style:"carGeneral "},
        { text:"Adulto",style:"carGeneral "}, 
        {text:"Senior", style:"carGeneral "}
        ],
      },
      {name :"NECESIDADES ESPECIALES" , 
        texts : [
        {text:"Sin granos", style:"cardParagraph "},
        {text:"Alta proteina", style:"cardParagraph "},
        {text:"Manejo de peso", style:"cardParagraph "},
        {text:"soporte movilidad y articulaciones", style:"cardParagraph "},
        {text:"estomagos sencibles", style:"cardParagraph "}
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


  