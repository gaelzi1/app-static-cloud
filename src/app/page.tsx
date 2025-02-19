"use client"
import Header from "@/components/Header";
import Welcome from "@/components/welcome";
import { Recuadros } from "@/components/cuadros";
import { RecuadroData } from "@/data/dataCuadros";
import "../app/globals.css";



export default function Home() {
  return (
    <div className="text-4xl flex flex-col  font-polise ">
      <Header />
     
    <div className="bg-gris1 bg-gris2 bg-gris3"></div>
      <Welcome />
    <div className="mt-56">
      <Recuadros data={RecuadroData} />
      </div>
    </div>
  );
}
