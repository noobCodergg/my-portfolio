import React, { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import { getPrize } from "../Api/prizeApi";
import Swal from "sweetalert2";
import { checkUser, postUser } from "../Api/userApi";

const PrizeWheel = () => {
  const [prizes, setPrizes] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const wheelRef = useRef(null);
  const spinDegreesRef = useRef(0);

  useEffect(() => {
    const fetchPrizes = async () => {
      try {
        const response = await getPrize();
        const filteredPrizes = response.data.filter((item) => item.status);
        setPrizes(filteredPrizes);
      } catch (error) {
        console.log("error occurred");
      }
    };
    fetchPrizes();
  }, []);

  useEffect(() => {
    if (!isSpinning && wheelRef.current) {
      wheelRef.current.style.transition = "none";
      const currentDegrees = spinDegreesRef.current % 360;
      wheelRef.current.style.transform = `rotate(${currentDegrees}deg)`;
      void wheelRef.current.offsetHeight;
    }
  }, [isSpinning]);

  useEffect(() => {
    const onlyNumbers = /^\d+$/;
    if (phone.length !== 11 && phone.length > 0) {
      setError("Phone number must be exactly 11 digits");
    } else if (!onlyNumbers.test(phone) && phone.length > 0) {
      setError("Phone number must contain only digits");
    } else {
      setError("");
    }
  }, [phone]);

  const spinWheel = async () => {
    if (isSpinning) return;

    try {
      const response = await checkUser(phone);
      const userExists = response.data;

      if (userExists) {
        Swal.fire({
          icon: "info",
          title: "Already Played!",
          text: "You have already earned your reward.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Okay",
        });
        return;
      }

      setIsSpinning(true);
      setResult(null);

      const additionalDegrees = 360 * 5 + Math.floor(Math.random() * 360);
      const newTotalDegrees = spinDegreesRef.current + additionalDegrees;
      spinDegreesRef.current = newTotalDegrees;

      if (wheelRef.current) {
        wheelRef.current.style.transition = "transform 4s ease-out";
        wheelRef.current.style.transform = `rotate(${newTotalDegrees}deg)`;
      }

      setTimeout(async () => {
        const normalizedDeg = newTotalDegrees % 360;
        const segmentAngle = 360 / prizes.length;
        const selectedIndex = Math.floor(normalizedDeg / segmentAngle) % prizes.length;
        const selectedPrize =
          prizes[(prizes.length - 1 - selectedIndex + prizes.length) % prizes.length];

        setIsSpinning(false);
        setResult(selectedPrize.name);

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });

        try {
          await postUser({ phone, email, result: selectedPrize.name });
        } catch (error) {
          console.error("API Error:", error);
        }
      }, 4000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[90vh] flex flex-col md:flex-row items-center justify-center bg-[#060606] p-4 overflow-hidden">
      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
        <div className="relative w-full h-full">
          <div className="rounded-full border-[14px] border-white ring-offset-4 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.2)]">
            <svg
              viewBox="0 0 320 320"
              className="rounded-full border-[14px] border-[#d9d9d9] shadow-[inset_0px_4px_15px_0px_rgba(0,0,0,0.7)] ring-offset-4"
              ref={wheelRef}
              style={{
                transition: "transform 4s ease-out",
                transformOrigin: "50% 50%",
                width: "100%",
                height: "100%",
              }}
            >
              <defs>
                <radialGradient id="centerGradient" cx="50%" cy="50%" r="90%">
                  <stop offset="0%" style={{ stopColor: "#ffffff" }} />
                  <stop offset="80%" style={{ stopColor: "#e0e0e0" }} />
                  <stop offset="100%" style={{ stopColor: "#b0b0b0" }} />
                </radialGradient>
                <filter id="deepOuterShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
                  <feOffset dx="4" dy="4" result="offsetBlur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.8" />
                  </feComponentTransfer>
                  <feFlood floodColor="#000000" result="color" floodOpacity="0.6" />
                  <feComposite in2="offsetBlur" operator="in" result="shadow" />
                  <feMerge>
                    <feMergeNode in="shadow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="deepInnerShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
                  <feOffset dx="-3" dy="-3" result="offsetBlur" />
                  <feFlood floodColor="#000000" result="color" floodOpacity="0.5" />
                  <feComposite in2="offsetBlur" operator="in" result="shadow" />
                  <feComposite operator="in" in="color" in2="shadow" result="innerShadow" />
                  <feMerge>
                    <feMergeNode in="innerShadow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <circle
                cx="160"
                cy="160"
                r="155"
                fill="none"
                stroke="#ffffff"
                strokeWidth="10"
                filter="url(#deepOuterShadow)"
              />

              {prizes.map((prize, i) => {
                const angle = 360 / prizes.length;
                const startAngle = i * angle;
                const endAngle = startAngle + angle;
                const radius = 160;
                const radians = (deg) => (Math.PI * deg) / 180;
                const x1 = 160 + radius * Math.cos(radians(startAngle));
                const y1 = 160 + radius * Math.sin(radians(startAngle));
                const x2 = 160 + radius * Math.cos(radians(endAngle));
                const y2 = 160 + radius * Math.sin(radians(endAngle));
                const largeArc = angle >= 180 ? 1 : 0;
                const textAngle = startAngle + angle / 2;
                const textRadius = 100;
                const textX = 160 + textRadius * Math.cos(radians(textAngle));
                const textY = 160 + textRadius * Math.sin(radians(textAngle));
                const colors = ["#710C2C", "#1A1415"];
                let fillColor = colors[i % colors.length];
                if (
                  prizes.length % 2 !== 0 &&
                  i === prizes.length - 1 &&
                  prizes.length > 1 &&
                  fillColor === colors[(i - 1) % colors.length]
                ) {
                  fillColor = fillColor === colors[0] ? colors[1] : colors[0];
                }

                return (
                  <g key={i}>
                    <path
                      d={`M160,160 L${x1},${y1} A${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} Z`}
                      fill={fillColor}
                      stroke="#999"
                      strokeWidth="0.5"
                    />
                    <text
                      x={textX}
                      y={textY}
                      fill="white"
                      fontSize="20"
                      fontWeight="bold"
                      textAnchor="middle"
                      alignmentBaseline="middle"
                      transform={`rotate(${textAngle} ${textX} ${textY})`}
                    >
                      {prize.name}
                    </text>
                  </g>
                );
              })}

              <circle
                cx="160"
                cy="160"
                r="25"
                fill="url(#centerGradient)"
                stroke="white"
                strokeWidth="6"
                filter="url(#deepInnerShadow)"
              />
            </svg>
          </div>

          {/* Spinner Arrow */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-10 flex items-center space-x-[-12px]">
            <div className="relative z-10">
              <div className="relative w-0 h-0 border-y-[15px] border-y-transparent border-r-[50px] border-r-[#b3b3b3]" />
            </div>
            <div className="w-9 h-9 rounded-full transform translate-x-1 bg-white border-[8px] border-[#D9D9D9] shadow-lg z-30" />
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex flex-col items-center space-y-4 px-4 mt-6 md:mt-0 md:translate-x-[40px]">
        <h1 className="text-3xl font-bold text-white">Spin to Win</h1>
        <p className="text-lg text-center text-white">
          Enter your phone number for the chance to win <br /> a discount.
        </p>

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-80 mt-1 px-4 py-2 border border-black rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Enter your phone number"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-80 mt-1 px-4 py-2 border border-black rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Enter your email"
        />

        {error && <p className="text-red-500">{error}</p>}

        <button
          onClick={spinWheel}
          disabled={isSpinning || phone.trim() === "" || email.trim() === "" || error}
          className="w-full max-w-xs px-6 py-2 bg-black text-white font-bold rounded-xl shadow-lg hover:bg-gray-900 disabled:opacity-50 text-lg"
        >
          {isSpinning ? "Spinning..." : "Spin the Wheel"}
        </button>

        

        <p className="text-sm text-white text-center">
          You are signing up to receive communication via <br /> email.
        </p>

        {result && !isSpinning && (
          <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 ">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-[90%] text-center relative animate-pop-in">
              <button
                onClick={() => setResult(null)}
                className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold"
              >
                ×
              </button>
              <div className="text-4xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold mb-2 text-black">Congratulations!</h2>
              <p className="text-lg text-gray-700">
                You won: <span className="font-semibold text-black">{result}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrizeWheel;
