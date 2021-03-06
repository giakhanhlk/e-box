export const isMac = () => {
  try {
    return (
      navigator &&
      !!navigator.platform &&
      !!(navigator.platform.toUpperCase().indexOf("MAC") >= 0)
    );
  } catch (error) {
    return false;
  }
};
