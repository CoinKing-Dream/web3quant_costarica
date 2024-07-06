import "lightbox2/dist/css/lightbox.css";
import LightBox from "../components/LightBox";
// const image = require("../assets/image/performance_0.png");

const imageCaption = [
  "BTC/USD",
  "SOL/USD",
  "Rode the 100x move in BONK/USD",
  "INJ/USD",
  "KASPA",
  "FETCH AI Worked well in entry. exit. reentry",
  "CFX",
  "IMX",
  "RNDR",
  "Rode the 100x move in DOGE without flip flop",
  "Exited Luna before the black swan crash",
  "Axie Infinity from last cycle",
  "Biggest BTC Mining Stock - Mara",
  "Coinbase",
  "NVDA",
  "Apple",
];

let imageData = imageCaption.map((val, ind) => ({
  caption: val,
  link: `/image/performance_${ind}.png`,
}));

const Performance = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen pt-16 gap-5">
        <div className="flex flex-col text-left w-[40%] gap-5">
          <div className="big-title">Performance</div>
          <div className="general-text leading-normal">
            Here is Web3Quant indicator performance.
          </div>
        </div>

        <div className="w-[50%] ">
          <LightBox imageData={imageData.slice(0, 12)} />
        </div>

        <div className="medium-title">
          Here is the same indicator without any change of setting on Stocks.
        </div>

        <div className="w-[50%] ">
          <LightBox imageData={imageData.slice(12, 16)} />
        </div>

      </div>
    </>
  );
};

export default Performance;
