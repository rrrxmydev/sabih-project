import { useState, useContext } from "react";
import { Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { DarkModeContext } from "../../../contexts/DarkModeContext";
import axios from "axios";
const Feedback = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [feedback, setFeedback] = useState("");
  const sendFeedback = async () => {
    const response = await axios.post(
      "http://localhost:3000/sabihAPI/v1/feedback",
      {
        feedback: feedback,
        email: email,
        FirstName: firstName,
        LastName: lastName,
      }
    );
    setFirstName("");
    setEmail("");
    setLastName("");
    setFeedback("");
  };

  const [open, setOpen] = useState(false);
  const darkMode = useContext(DarkModeContext);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div className={darkMode.state ? "dark" : ""}>
      <div className="flex flex-col justify-center items-center h-[100vh] dark:bg-gradient-to-b from-blue1 from-50% to-blue2">
        <h1 className="font-changa text-blue1 dark:text-white font-semibold text-4xl translate-y-[-105px] md:translate-y-2 translate-x-1 md:translate-x-0">
          تواصل معنا
        </h1>
        <Link to="/">
          <button className="bg-blue2 text-[#FFFF] -mb-20 w-[50px] h-[50px] rounded-[1400px] relative md:right-[600px] right-[180px] bottom-[150px] md:bottom-[40px] dark:text-blue1 dark:bg-[#FFFF]">
            <ArrowBackRoundedIcon fontSize="large" />
          </button>
        </Link>
        <div
          className="bg-blue1 w-[90%] md:w-[60%] h-[550px] flex flex-col items-center justify-center rounded-md py-6 mt-5
        translate-x-[1px] -translate-y-[80px] md:translate-x-0 md:translate-y-0
        dark:bg-blue4 dark:bg-opacity-45 backdrop-blur-3xl dark:shadow-none
        
      "
        >
          <div className="flex flex-col items-center justify-center ">
            <label className="text-white  font-semibold my-3">
              أدخل البريد الإلكتروني الخاص بك{" "}
            </label>
            <input
              type="email"
              className="bg-white text-blue1   rounded-md py-2 px-1 outline-none w-[300px] md:w-[400px]"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label className="text-white font-semibold  my-3">
              أدخل الإسم الخاص بك{" "}
            </label>

            <input
              type="text"
              className="bg-white text-blue1   rounded-md py-2 px-1 outline-none w-[300px] md:w-[400px]"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />

            <label className="text-white font-semibold  my-3">
              أدخل اللقب الخاص بك{" "}
            </label>

            <input
              type="text"
              className="bg-white text-blue1   rounded-md py-2 px-1 outline-none w-[300px] md:w-[400px]"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <label className="text-white font-semibold  my-3">
              أكتب تعليق أو أبلغ عن خطأ
            </label>

            <textarea
              dir="rtl"
              name="feedback"
              className="outline-none w-[100%] mb-4   "
              cols={30}
              rows={5}
              value={feedback}
              onChange={(e) => {
                setFeedback(e.target.value);
              }}
            />
            <button
              type="submit"
              className="bg-[#ff3838] text-white text-l font-bold py-3 w-[100px] rounded-md md:translate-x-[130px] translate-x-[100px] translate-y-[4px] mb-3"
              onClick={() => {
                sendFeedback();
                handleClick();
              }}
            >
              أرسل
            </button>
          </div>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="نشكرك على التواصل معنا"
          action={action}
        />
      </div>
    </div>
  );
};

export default Feedback;
