import React, { useState, useRef } from "react";

const OtpComponent = ({ numberOfElements,otpInput,setOtpInput }) => {
  
  const otpInputBoxReference = useRef([]);

  /**
   * The `handleOtpInput` function updates the input otpInput with the entered value and moves focus to
   * the next input box if the current box is filled.
   */
  const handleOtpInput = (e, index) => {
    if(isNaN(e.target.value)) return;
    const newOtpInput = [...otpInput];
    newOtpInput[index] = e.target.value;
    setOtpInput(newOtpInput);

    // Move to the next input box if it exists and the current box is filled
    if (index < numberOfElements - 1 && e.target.value != "") {
      otpInputBoxReference.current[index + 1].focus();
    }
  }

 /**
  * The `handleKeyPress` function in JavaScript React handles key events for navigating through input
  * otpInput in an OTP form. It handles the `Backspace` and `Enter` keys to move between input otpInput.
  */
  const handleKeyPress = (e,index)=>{
    if(e.key==="Backspace" && otpInput[index]==="" && index>0){
        otpInputBoxReference.current[index-1].focus();
    }
    else if(e.key==="Enter" && otpInput[index]!=="" && index<numberOfElements-1){
        otpInputBoxReference.current[index + 1].focus();
    }
  }

  return (
    <div>
      <h1>OTP Component Scalable</h1>
      <div>
        {otpInput.map((item, index) => {
          return (
            <input
              type="text"
              maxLength={1}
              key={index}
              ref={(referenceElement) =>
                (otpInputBoxReference.current[index] = referenceElement)
              }
              onChange={(e) => handleOtpInput(e, index)}
              onKeyUp={(e)=>handleKeyPress(e,index)}
              className="m-2 p-2 w-12 text-white border rounded-md border-r-amber-50 bg-black bg-opacity-50"
            />
          );
        })}
      </div>
    </div>
  );
};

export default OtpComponent;
