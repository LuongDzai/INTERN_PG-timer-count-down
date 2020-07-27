import React, { useState, useEffect } from "react";

export default function Timer() {
  const [counter, setCounter] = useState(10);

  // useEffect(() => {
  //   // const timer =
  //   counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  //   // return () => clearTimeout(timer);
  // }, [counter]);

  // // First Attempts
  // setInterval(() => setCounter(counter - 1), 1000);

  // // Second Attempts
  // React.useEffect(() => {
  //   counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  // }, []);

  // // Second Attempts - Inspection
  // React.useEffect(() => {
  //   counter > 0 &&
  //     setInterval(() => {
  //       console.log(counter);
  //       setCounter(counter - 1);
  //     }, 1000);
  // }, []);

  // Third Attempts
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (counter > 0)
      timer = setInterval(() => setCounter(counter - 1), 1000);
    // nếu counter <=0 thì truyền vào id cái timer để huỷ và chuyển sang việc ko đếm n
    return () => clearInterval(timer);
  }, [counter]);

  return <div className="timer">Countdown: {counter}</div>;
}
