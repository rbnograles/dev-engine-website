import React, { useEffect, useState } from "react";

 function CountDownTimer() {
    
    const calculateTimeLeft = () => {

        let year = new Date().getFullYear();
        // * this is were you set  the date
        // ? FORMAT YEAR-MONTH-DAY
        let difference = + new Date(`${year}-8-19`) - + new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
              "d:": Math.floor(difference / (1000 * 60 * 60 * 24)),
              "h:": Math.floor((difference / (1000 * 60 * 60)) % 24),
              "m": Math.floor((difference / 1000 / 60) % 60),
              "s": Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];
    
    Object.keys(timeLeft).forEach((interval, i) => {
        if (!timeLeft[interval]) {
            return;
        }
        timerComponents.push(
            <span className="list-style-colon" key={i}>
                {timeLeft[interval]} <span>:</span> {""}
            </span>
        );
    });

   
    return (
        <div>
            { timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    )
}

export default CountDownTimer;