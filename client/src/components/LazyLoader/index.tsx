import { useState, useEffect } from "react";
import { SpinnerProps } from "./types";
import { LazyLoaderContainer } from "./styles";

const LazyLoader = (props: SpinnerProps) => {
  const { show = false, delay = 0 } = props;
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!show) {
      setShowSpinner(false);
      return;
    }

    if (delay === 0) {
      setShowSpinner(true);
    } else {
      timeout = setTimeout(() => setShowSpinner(true), delay);
    }

    return () => {
      clearInterval(timeout);
    };
  }, [show, delay]);

  return showSpinner ? (
    <LazyLoaderContainer>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LazyLoaderContainer>
  ) : null;
};

export default LazyLoader;
