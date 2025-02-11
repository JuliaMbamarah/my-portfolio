import { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Represents the Loader component.
 * Displays an animated loader with SVG icons.
 *
 * @component
 * @param {function} setShowLoader - A function to set whether the loader should be displayed.
 */

const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    // Automatically hide the loader after a delay
    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  }, [setShowLoader]);

  // Animation variants for the SVG icons
  const iconVariant1 = {
    hidden: {
      pathLength: 0,
      fill: "rgb(19, 26, 34)",
    },
    visible: {
      pathLength: 5,
      fill: "rgb(243, 243, 243)",
      stroke: "rgb(243, 243, 243)",
      strokeWidth: 3,
      scale: 0,
      transition: {
        default: { duration: 3, ease: "easeIn" },
        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
        stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
        scale: { duration: 3, ease: [1, 1, 0.5, 0] },
      },
    },
  };

  const iconVariant2 = {
    hidden: {
      pathLength: 0,
      fill: "rgb(19, 26, 34)",
    },
    visible: {
      pathLength: 5,
      fill: "rgb(72, 163, 198)",
      stroke: "rgb(72, 163, 198)",
      scale: 0,
      strokeWidth: 3,
      transition: {
        default: { duration: 3, ease: "easeIn" },
        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
        stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
        scale: { duration: 3, ease: [1, 1, 0.5, 0] },
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* Animated SVG */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 1 920.55 921.26"
        style={{ width: "70vw", height: "30vw" }}
      >
        {/* Your provided SVG code here */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsSvgjs="http://svgjs.dev/svgjs"
          width="1500"
          height="935"
          viewBox="0 0 1500 935"
        >
          <g transform="matrix(1,0,0,1,-0.9090909090909918,0.3785425101214628)">
            <svg
              viewBox="0 0 396 247"
              data-background-color="#ffffff"
              preserveAspectRatio="xMidYMid meet"
              height="935"
              width="1500"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="tight-bounds"
                transform="matrix(1,0,0,1,0.2400000000000091,-0.09999999999999432)"
              >
                <svg viewBox="0 0 395.52 247.2" height="247.2" width="395.52">
                  <g>
                    <svg></svg>
                  </g>
                  <g>
                    <svg
                      viewBox="0 0 395.52 247.2"
                      height="247.2"
                      width="395.52"
                    >
                      <g transform="matrix(1,0,0,1,75.54432,70.3912705511811)">
                        <svg
                          viewBox="0 0 244.43135999999998 106.41745889763779"
                          height="106.41745889763779"
                          width="244.43135999999998"
                        >
                          <g>
                            <svg
                              viewBox="0 0 244.43135999999998 106.41745889763779"
                              height="106.41745889763779"
                              width="244.43135999999998"
                            >
                              <g>
                                <svg
                                  viewBox="0 0 244.43135999999998 106.41745889763779"
                                  height="106.41745889763779"
                                  width="244.43135999999998"
                                >
                                  <g>
                                    <svg
                                      viewBox="0 0 244.43135999999998 106.41745889763779"
                                      height="106.41745889763779"
                                      width="244.43135999999998"
                                    >
                                      <g id="textblocktransform">
                                        <svg
                                          viewBox="0 0 244.43135999999998 106.41745889763779"
                                          height="106.41745889763779"
                                          width="244.43135999999998"
                                          id="textblock"
                                        >
                                          <g>
                                            <svg
                                              viewBox="0 0 244.43135999999998 106.41745889763779"
                                              height="106.41745889763779"
                                              width="244.43135999999998"
                                            >
                                              <g transform="matrix(1,0,0,1,0,0)">
                                                <svg
                                                  width="244.43135999999998"
                                                  viewBox="1.27 -32.4 74.41000000000001 32.4"
                                                  height="106.41745889763779"
                                                  data-palette-color="#77d4fc"
                                                >
                                                  <path
                                                    d="M5.2-25.34L5.2-32.4 30.88-32.4 30.88-6.47 24.41 0 20.09 0 20.09-25.34 5.2-25.34ZM12.48-13.57L12.48-6.47 18.38-6.47 18.38 0 7.76 0 1.27-6.47 1.27-13.57 12.48-13.57ZM55.52 0L36.3-32.4 47.78-32.4 56.47-17.99 63.3-29.71 63.3-13.4 55.52 0ZM75.68 0L64.89 0 64.89-32.4 75.68-32.4 75.68 0ZM46.36 0L36.28 0 36.28-29.39 46.36-12.48 46.36 0Z"
                                                    opacity="1"
                                                    transform="matrix(1,0,0,1,0,0)"
                                                    fill="#77d4fc"
                                                    class="wordmark-text-0"
                                                    data-fill-palette-color="primary"
                                                    id="text-0"
                                                  ></path>
                                                </svg>
                                              </g>
                                            </svg>
                                          </g>
                                        </svg>
                                      </g>
                                    </svg>
                                  </g>
                                </svg>
                              </g>
                            </svg>
                          </g>
                        </svg>
                      </g>
                      <path
                        d="M164.988 64.391L164.988 14.041 384.107 14.041 384.107 233.159 164.988 233.159 164.988 182.809 174.585 182.809 174.585 223.563 374.51 223.563 374.51 23.637 174.585 23.637 174.585 64.391Z"
                        fill="#77d4fc"
                        stroke="transparent"
                        data-fill-palette-color="primary"
                      ></path>
                    </svg>
                  </g>
                  <defs></defs>
                </svg>
                <rect
                  width="395.52"
                  height="247.2"
                  fill="none"
                  stroke="none"
                  visibility="hidden"
                ></rect>
              </g>
            </svg>
          </g>
        </svg>
      </motion.svg>{" "}
    </div>
  );
};

export default Loader;
