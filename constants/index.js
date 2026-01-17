import { useMediaQuery } from "react-responsive";

export const useMaskSettings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  if (isMobile) {
    return {
      initialMaskPos: "50% -1500vh",
      initialMaskSize: "3100% 3100%",
      maskPos: "50% 7vh",
      maskSize: "50% 50%",
    };
  }

  if (isTablet) {
    return {
      initialMaskPos: "20% -1700vh",
      initialMaskSize: "500% 500%",
      maskPos: "20% 17vh",
      maskSize: "10% 10%",
    };
  }

  return {
    initialMaskPos: "50% 22%",
    initialMaskSize: "3700% 3700%",
    maskPos: "50% 22%",
    maskSize: "22% 22%",
  };
};