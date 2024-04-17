import { useEffect, useState } from "react";
import { BREAKPOINTS } from "/src/assets/style/breakpoints";

const useBreakpoints = () => {
  const [slidesToShow, setSlidesToShow] = useState(4); // Default value for desktop

  useEffect(() => {

    const mediaQueries = {
      mobile: window.matchMedia(`(${BREAKPOINTS.mobile})`),
      tablet: window.matchMedia(`(${BREAKPOINTS.tablet})`),
      desktop: window.matchMedia(`(${BREAKPOINTS.desktop})`),
    };

    const handleBreakpointChange = () => {
      if (mediaQueries.mobile.matches) {
        setSlidesToShow(1);
      } else if (mediaQueries.tablet.matches) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };

    for (const key in mediaQueries) {
      mediaQueries[key].addEventListener("change", handleBreakpointChange);
    }
    handleBreakpointChange();

    return () => {
      for (const key in mediaQueries) {
        mediaQueries[key].removeEventListener("change", handleBreakpointChange);
      }
    };
  }, []);

  return slidesToShow;
};

export default useBreakpoints;
