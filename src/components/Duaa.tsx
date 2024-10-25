import "../styles/Duaa.css";
const Duaa = ({ script, Title }: { script: string; Title: string | null }) => {
  return (
    <div className="DuaaContainer">
      {Title ? (
        <div className="titleContainer">
          <h1 className="Title">دعاء اليوم</h1>
        </div>
      ) : (
        <></>
      )}

      <div className="script_Container">
        <p className="script">{script}</p>
      </div>
    </div>
  );
};

export default Duaa;
