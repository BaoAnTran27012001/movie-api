import USDollar from "./formatNumber";

const cleanNum = (value) => {
  let result = USDollar.format(value);
  let dotIndex = result.indexOf(".");
  let convert = result.slice(0, dotIndex);
  return convert;
};
export default cleanNum