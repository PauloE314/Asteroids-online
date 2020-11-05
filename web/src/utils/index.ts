export const configs = {
  apiUrl: "http://localhost:3333",
  loginStorageKey: "login",
};

export function Delay(time: number) {
  return new Promise((resolver) => setTimeout(resolver, time));
}

export function getCanvasDimensions(screenWidth: number, screenHeight: number) {
  const offSet = 30;
  const dimensionsBasedOnWidth = { w: screenWidth - offSet, h: (screenWidth - offSet) * 0.5 };
  const dimensionsBasedOnHeight = { w: (screenHeight - offSet) * 2, h: screenHeight - offSet };


  if (dimensionsBasedOnWidth.h > screenHeight)
    return dimensionsBasedOnHeight;
  return dimensionsBasedOnWidth;
}
