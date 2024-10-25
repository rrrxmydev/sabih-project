import { useState, useEffect } from "react";
import { thikrType } from "../../types/ThikrTypes";
import "../../styles/athkar/thikr.css";

const Athkar = (props: thikrType & { reset: boolean }) => {
  const [repete, setRepete] = useState<number>(props.repete);

  const handleClick = () => {
    if (repete > 0) {
      setRepete((prev) => prev - 1);
    }
  };

  useEffect(() => {
    // Reset counter when reset prop changes
    if (props.reset) {
      setRepete(props.repete);
    }
  }, [props.reset, props.repete]);
  //rendu conditionnel de fadl
  const fadl = (fadl: null | string) => {
    if (fadl != null) {
      return (
        <div dir="rtl" className="fadl">
          <span>الفضل : </span>
          <span>{props.fadl}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="scriptContainer">
        <div dir="rtl" className="script">
          <p className="">{props.script}</p>
        </div>
      </div>
      <div className="fadlRepeteContainer">
        <div dir="rtl" className="repete" onClick={handleClick}>
          <span className="text-l"> عدد التكرار</span>
          <span className="text-4xl">{repete}</span>
        </div>
        {fadl(props.fadl)}
      </div>
    </div>
  );
};

export default Athkar;
