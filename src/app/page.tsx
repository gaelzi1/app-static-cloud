"use client"
import Header from "@/components/Header";
import Welcome from "@/components/welcome";
import { Recuadros } from "@/components/cuadros";
import { RecuadroData } from "@/data/dataCuadros";
import AdoptionScreen from "@/components/adoptionScreen";
import "../app/globals.css";



export default function Home() {
  return (
    <div className="text-4xl flex flex-col  font-polise ">
    <div className="bg-gris1 bg-gris2 bg-gris3"></div>
      <Welcome />
    <div className="mt-56">
      <Recuadros data={RecuadroData} />
      <AdoptionScreen />
      </div>
    </div>
  );
}
