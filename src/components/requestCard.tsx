import send from "../img/send.svg";

interface RequestCardProps {
  className?: string;
}

const RequestCard: React.FC<RequestCardProps> = ({ className }) => {
  return (
    <div className={`bg-black text-white rounded-lg p-4 shadow-lg flex flex-col items-center justify-center ${className}`}>
      <span className="text-5xl mb-4">ENVIAR SOLICITUD</span>
      <button className="flex items-center justify-center py-2 px-4 rounded-lg">
        <img src={send.src} alt="Send Icon" className="mr-2 w-[6vw] h-[6vw]" />
      </button>
    </div>
  );
};

export default RequestCard;
