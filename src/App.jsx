/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import StepFourAnimationState, { StepFourAnimationColor } from "./step4";
import "./App.css";

function App() {
  const [animationState, setAnimationState] = useState(0);
  const svgObjectRef = useRef({
    c1Fill: "url(#c1_state1)",
    c2Fill: "url(#c2_state1)",
    c1x: 264.5,
    c1y: 265.5,
    c2x: 264.5,
    c2y: 265.5,
    c1Opacity: 0.3,
    c2Opacity: 0.3,
    c1Scale: 40.5,
    c2Scale: 40.5,
  });

  if (animationState === 0) {
    svgObjectRef.current = {
      ...svgObjectRef.current,
      c1Opacity: 0,
      c2Opacity: 0,
    }
  }

  if (animationState === 1) {
    svgObjectRef.current = {
      c1Fill: "url(#c1_state1)",
      c2Fill: "url(#c2_state1)",
      c1x: 264.5,
      c1y: 265.5,
      c2x: 264.5,
      c2y: 265.5,
      c1Opacity: 0.3,
      c2Opacity: 0.3,
      c1Scale: 40.5,
      c2Scale: 40.5,
    }

  }

  if (animationState === 2) {
    svgObjectRef.current = {
      c1Fill: "url(#c1_state2)",
      c2Fill: "url(#c2_state2)",
      c1x: 323.5,
      c1y: 221.5,
      c2x: 226.5,
      c2y: 307.5,
      c1Opacity: 1,
      c2Opacity: 1,
      c1Scale: 142.5,
      c2Scale: 142.5,
    };
  }

  if (animationState === 3) {
    svgObjectRef.current = {
      ...svgObjectRef.current,
      c1Fill: "url(#c1_state3)",
      c2Fill: "url(#c2_state3)",
      c1Opacity: 1,
      c2Opacity: 1,
      c1x: 264.5,
      c1y: 265.5,
      c2x: 264.5,
      c2y: 265.5,
      c1Scale: 142.5,
      c2Scale: 142.5,
    };
  }

  if (animationState === 4) {
    svgObjectRef.current = {
      ...svgObjectRef.current,
      c1Fill: "url(#c1_state3)",
      c2Fill: "url(#c2_state3)",
      c1Opacity: 0.4,
      c2Opacity: 0.4,
      c1x: 264.5,
      c1y: 265.5,
      c2x: 264.5,
      c2y: 265.5,
      c1Scale: 113.5,
      c2Scale: 113.5,
    };
  }

  if (animationState === 5) {
    svgObjectRef.current = {
      ...svgObjectRef.current,
      c1Fill: "url(#c1_state4)",
      c2Fill: "url(#c2_state4)",
      c1Opacity: 0.4,
      c2Opacity: 0.4,
      c1x: 264.5,
      c1y: 265.5,
      c2x: 264.5,
      c2y: 265.5,
      c1Scale: 113.5,
      c2Scale: 113.5,
    };
  }

  const {
    c1Fill,
    c2Fill,
    c1x,
    c1y,
    c2x,
    c2y,
    c1Opacity,
    c2Opacity,
    c1Scale,
    c2Scale,
  } = svgObjectRef.current;

  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-gray-900 flex">
        <div className="w-[530px] h-[530px] bg-white mx-auto mt-[90px] duration-500">
          <svg
            width="530"
            height="530"
            viewBox="0 0 530 530"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="530" height="530" fill="white" />
            {/* circle */}
            <circle
              className="duration-500"
              cx={c1x}
              cy={c1y}
              r={c1Scale}
              fill={c1Fill}
              fillOpacity={c1Opacity}
            />
            <circle
              className="duration-500"
              cx={c2x}
              cy={c2y}
              r={c2Scale}
              fill={c2Fill}
              fillOpacity={c2Opacity}
            />
            {/* box */}
            <path
              className="duration-500"
              opacity={
                animationState === 3 ? 0.3 : animationState > 3 ? 0.5 : 0
              }
              d={
                animationState === 3
                  ? "M265.698 299V258.667L297.198 240.438V280.562L265.698 299Z"
                  : "M266 451V258.5L416.5 171.5V363L266 451Z"
              }
              fill={
                animationState === 3
                  ? "url(#right_box_state3)"
                  : "url(#right_box_state4)"
              }
              stopOpacity="0.3"
            />
            <path
              className="duration-500"
              opacity={
                animationState === 3 ? 0.3 : animationState > 3 ? 0.5 : 0
              }
              d={
                animationState === 3
                  ? "M265.698 299V258.667L234.198 240.438V280.562L265.698 299Z"
                  : "M265.5 451V258.5L115 171.5V363L265.5 451Z"
              }
              fill={
                animationState === 3
                  ? "url(#left_box_state3)"
                  : "url(#left_box_state4)"
              }
              stopOpacity="0.3"
            />
            <path
              className="duration-500"
              opacity={
                animationState === 3 ? 0.3 : animationState > 3 ? 0.5 : 0
              }
              d={
                animationState === 3
                  ? "M265.437 258.457L297.198 240.175L265.437 222L234.198 240.175L265.437 258.457Z"
                  : "M264.252 259.5L416 172.242L264.252 85.5L115 172.242L264.252 259.5Z"
              }
              fill={
                animationState === 3
                  ? "url(#upper_box_state3)"
                  : "url(#upper_box_state4)"
              }
              stopOpacity="0.3"
            />
            {/* line */}
            <line
              className="duration-500"
              opacity={animationState > 2 ? 1 : 0}
              x1="264.882"
              y1="259.09"
              x2="264.882"
              y2="407"
              stroke="url(#under_stroke)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              className="duration-500"
              opacity={animationState > 2 ? 1 : 0}
              x1="1"
              y1="-1"
              x2="211.125"
              y2="-1"
              transform="matrix(-0.866013 0.500021 -0.499979 -0.866037 447.693 152)"
              stroke="url(#right_stroke)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              className="duration-500"
              opacity={animationState > 2 ? 1 : 0}
              x1="1"
              y1="-1"
              x2="211.125"
              y2="-1"
              transform="matrix(0.866013 0.500021 -0.499979 0.866037 81.6938 154.307)"
              stroke="url(#left_stroke)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* rect */}
            <rect
              className="duration-500"
              opacity={animationState > 2 && animationState < 5 ? 0.5 : 0}
              x="46"
              y="166"
              width="18"
              height="18"
              fill="#00FFA7"
            />
            <rect
              className="duration-500"
              opacity={animationState > 2 && animationState < 5 ? 0.5 : 0}
              x="466"
              y="46"
              width="18"
              height="18"
              fill="#00FFA7"
            />
            <rect
              className="duration-500"
              opacity={animationState > 2 && animationState < 5 ? 0.5 : 0}
              x="109"
              y="409"
              width="12"
              height="12"
              fill="#00FFA7"
            />
            <rect
              className="duration-500"
              opacity={animationState > 2 && animationState < 5 ? 0.5 : 0}
              x="407"
              y="466"
              width="18"
              height="18"
              fill="#00FFA7"
            />
            <StepFourAnimationState isShow={animationState === 5} duration="500" />
            <defs>
              {/* state 1 */}
              <radialGradient
                id="c1_state1"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(264.5 265.5) rotate(90) scale(40.5)"
              >
                <stop stopColor="#00FFA7" />
                <stop offset="1" stopColor="#009964" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="c2_state1"
                x1="235.084"
                y1="237.221"
                x2="294.484"
                y2="291.221"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA7" />
                <stop offset="1" stopColor="#009964" stopOpacity="0.3" />
              </linearGradient>
              {/* state 2 */}
              <radialGradient
                id="c1_state2"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(323.5 221.5) rotate(90) scale(142.5)"
              >
                <stop stopColor="#00FFA7" />
                <stop offset="1" stopColor="#009964" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="c2_state2"
                x1="123"
                y1="208"
                x2="332"
                y2="398"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA7" />
                <stop offset="1" stopColor="#009964" stopOpacity="0.3" />
              </linearGradient>
              {/* state 3  */}
              <radialGradient
                id="c1_state3"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(264.5 265.5) rotate(90) scale(142.5)"
              >
                <stop stopColor="#00FFA7" />
                <stop offset="1" stopColor="#009964" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="c2_state3"
                x1="161"
                y1="166"
                x2="370"
                y2="356"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA7" />
                <stop offset="1" stopColor="#009964" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient
                id="right_box_state3"
                x1="281.448"
                y1="240.438"
                x2="281.448"
                y2="299"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#667085" />
                <stop offset="1" stopColor="#667085" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="left_box_state3"
                x1="249.948"
                y1="240.438"
                x2="249.948"
                y2="299"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#667085" />
                <stop offset="1" stopColor="#667085" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="upper_box_state3"
                x1="265.698"
                y1="222"
                x2="265.698"
                y2="258.457"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#667085" /> f
                <stop offset="1" stopColor="#667085" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="under_stroke"
                x1="263.382"
                y1="258.09"
                x2="263.382"
                y2="408"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="right_stroke"
                x1="0"
                y1="0.5"
                x2="212.125"
                y2="0.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
              <linearGradient
                id="left_stroke"
                x1="0"
                y1="0.5"
                x2="212.125"
                y2="0.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
              {/* state 4  */}
              <radialGradient
                id="c1_state4"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(264.5 265.5) rotate(90) scale(142.5)"
              >
                <stop stopColor="#00FFA7">
                  <stop offset={1} stopColor="#009964" stopOpacity={0}></stop>
                </stop>
              </radialGradient>
              <linearGradient
                id="c2_state4"
                x1={161}
                y1={166}
                x2={370}
                y2={356}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA7">
                  <stop offset={1} stopColor="#009964" stopOpacity="0.3"></stop>
                </stop>
              </linearGradient>
              <linearGradient
                id="right_box_state4"
                x1="341.25"
                y1="171.5"
                x2="341.25"
                y2="451"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#667085" />
                <stop offset="1" stopColor="#667085" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="left_box_state4"
                x1="190.25"
                y1="171.5"
                x2="190.25"
                y2="451"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#667085" />
                <stop offset="1" stopColor="#667085" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="upper_box_state4"
                x1="265.5"
                y1="85.5"
                x2="265.5"
                y2="259.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#667085" />
                <stop offset="1" stopColor="#667085" stopOpacity="0" />
              </linearGradient>
              {/* state 5 */}
              <StepFourAnimationColor />
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}

export default App;
