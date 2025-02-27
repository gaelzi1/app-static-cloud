"use client";

interface RecuadroData {
  title: string;
  subtitles: SubtitleData[];
  color: string; // Clase CSS para el fondo de la tarjeta
}

interface SubtitleData {
  name: string;
  texts: { text: string; style?: string }[]; // Añadimos un campo opcional `style`
}

interface RecuadrosProps {
  data: RecuadroData[];
}

export function Recuadros({ data }: RecuadrosProps) {
  return (
    <div className="grid grid-cols-3 font-poppins px-16 py-24">
      {data.map((item) => (
        <div key={item.title} className={`p-6 ${item.color}`}>
         
         <h2 className="ml-4 text-xl font-bold mb-2">{item.title}</h2>
          
          {item.subtitles.map((subtitle, subtitleIndex) => (
            <div key={subtitleIndex} className="mb-2">
              <h3 className="ml-4 text-lg ">{subtitle.name}</h3>
              <ul className="  cardParagraph text-base font-light">
              {subtitle.texts.map(({ text, style }, textIndex) => (
                  <li 
                  key={textIndex}
                  className={`${style||""} mt-1 pl-4 `} >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
