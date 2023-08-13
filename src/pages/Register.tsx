import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon } from "@mui/material";
import Register1 from "../components/Register1";

const Register: FunctionComponent = () => {
  return (
    <div className="relative [background:linear-gradient(#fff,_#fff),_#fff] w-full h-[812px] overflow-hidden text-center text-mini text-black font-montserrat">
      <Register1 />
      <TextField
        className="[border:none] bg-[transparent] absolute h-[6.4%] w-[91.47%] top-[21.67%] right-[4.27%] bottom-[71.92%] left-[4.27%]"
        sx={{ width: 343 }}
        color="primary"
        variant="standard"
        type="text"
        label="Email address"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute h-[6.4%] w-[91.47%] top-[30.05%] right-[4.27%] bottom-[63.55%] left-[4.27%]"
        sx={{ width: 343 }}
        color="primary"
        variant="standard"
        type="text"
        label="Create password"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <button className="cursor-pointer p-0 bg-black absolute h-[6.4%] w-[91.47%] top-[38.42%] right-[4.27%] bottom-[55.17%] left-[4.27%] rounded-md box-border border-[2px] border-solid border-black">
        <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_18.21px)] text-[13px] tracking-[0.04em] uppercase font-black font-components-button-large text-white text-center">
          next
        </div>
      </button>
      <img
        className="relative w-[12.21px] h-[11.35px]"
        alt=""
        src="/union.svg"
      />
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-11">
        <img
          className="absolute top-[15px] right-[14px] w-[68px] h-4"
          alt=""
          src="/ui.svg"
        />
        <div className="absolute top-[8px] left-[21px] w-14 h-[23px]">
          <div className="absolute w-[calc(100%_-_2px)] top-[calc(50%_-_5.5px)] left-[0.33px] tracking-[-0.33px] font-semibold inline-block">
            9:27
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
