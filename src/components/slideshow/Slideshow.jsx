import "./slideshow.css";
import { useState, useEffect, useRef, useCallback } from "react";
import { img1, img2, img3, img4, img5, img6 } from "./index";

// logic from https://codepen.io/davelange_/pen/mdMwyoM
function InfiniteLooper({ speed, direction, children }) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const widthDeficit = parentWidth - width;

    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
      );
    }

    resetAnimation();
  }, [looperInstances]);

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <div className="looper" ref={outerRef}>
      <div className="looper__innerList" ref={innerRef} data-animate="true">
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

const Slideshow = () => (
  <div className="photography__slideshow">
    <InfiniteLooper speed="27" direction="right">
      <div className="contentBlock contentBlock--one">
        <img src={img1} alt="nigh scape" />
      </div>
      <div className="contentBlock contentBlock--one">
        <img src={img2} alt="my pet coco" />
      </div>
      <div className="contentBlock contentBlock--one">
        <img src={img3} alt="my pet coco" />
      </div>
      <div className="contentBlock contentBlock--one">
        <img src={img4} alt="my pet coco" />
      </div>
      <div className="contentBlock contentBlock--one">
        <img src={img5} alt="my pet coco" />
      </div>
      <div className="contentBlock contentBlock--one">
        <img src={img6} alt="my pet coco" />
      </div>
    </InfiniteLooper>
  </div>
);

export default Slideshow;
