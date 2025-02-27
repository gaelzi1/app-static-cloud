import calendar from "../img/calendar.svg";

interface EventCardProps {
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({ className }) => {
  return (
    <div className={`bg-black text-white rounded-lg p-4 shadow-lg flex ${className}`}>
      <div className="flex flex-col items-center justify-between w-1/2">
        <div className="flex items-center justify-center mb-4">
          <img src={calendar.src} alt="Calendar Icon" className="mr-2 w-[6vw] h-[6vw]" />
        </div>
        <button className="bg-white text-[#0a0a34] font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition duration-300">
          conoce más
        </button>
      </div>
      <div className="w-1/2 flex items-center justify-end">
        <h3 className="text-[2.5vw] font-semibold text-right mb-4">
          EVENTOS NOTICIAS Y FERIAS 2025
        </h3>
      </div>
    </div>
  );
};

export default EventCard;