import "../../styles/home/Salat.css";

type Salatprop = {
  name: string;
  time: string;
};

const Salat = ({ name, time }: Salatprop) => {
  return (
    <div className="Salat">
      <h2>{name}</h2>
      <span dir="rtl" className="text-l font-semibold text-blue1 md:text-xl">
        {time.substring(0, 5)}
      </span>
    </div>
  );
};

export default Salat;
