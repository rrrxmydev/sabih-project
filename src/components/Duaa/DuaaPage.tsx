import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { DarkModeContext } from "../../../contexts/DarkModeContext";
import Duaa from "../Duaa";
const DuaaPage = () => {
  const [duaas, setDuaas] = useState([] as { id: number; script: string }[]);
  const DarkMode = useContext(DarkModeContext);
  const getDuaas = async () => {
    const response = await axios.get(
      "http://localhost:3000/sabihAPI/v1/getDuaaList"
    );
    setDuaas(response.data.data);
  };
  useEffect(() => {
    getDuaas();
  }, []);
  return (
    <div className={DarkMode.state ? "dark" : ""}>
      <div className=" overflow-x-hidden dark:bg-blue1">
        <h1 className="font-changa font-semibold dark:text-white text-blue1 text-3xl translate-x-[45%] md:translate-x-[49%] mt-4">
          أدعية
        </h1>
        <br />
        <br />
        {duaas.map((element) => {
          return <Duaa script={element.script} Title={null} key={element.id} />;
        })}
      </div>
    </div>
  );
};

export default DuaaPage;
