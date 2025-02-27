"use client"
import { Recuadros } from "@/components/cuadros";
import EventCard from "@/components/eventCard";
import ImageCard from "@/components/imageCard";
import RequestCard from "@/components/requestCard";
import Welcome from "@/components/welcome";
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
      <div className="mt-0 w-full flex justify-center px-16 py-24"> 
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="col-span-1 flex justify-center">
            <ImageCard />
          </div>
          <div className="col-span-1 flex flex-col gap-4 h-full">
            <EventCard className="flex-1" />
            <RequestCard className="flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
