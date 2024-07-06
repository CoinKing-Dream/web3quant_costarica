import { Link } from "react-router-dom";
import LightBox from "../components/LightBox";
import GhostButton from "../components/GhostButton";

const imageCaption = [
  "2023 was particularly challenging for a lot of Trend traders. So many extreme news-flows and FUD (from USDC depeg to Binance collapse scare to ETF application pumps to SEC losing battles) which resulted in 10 days of massive up moves led by a lot of chops and sideways movement. It's a good test for any indicator. Web3Quant Indicator got you in by end of Dec 2022. Pretty much at the bottom when folks were calling for 10K BTC. Exited at opportune times too. Even got you in by end of Sep 2023. The sentiment was really bearish then too.",
  "Indicator Exited by Mid-November 2021. That was pretty much the TOP of the bull cycle. We had a couple of fakeouts in between. Those can be eliminated/reduced with the Regime Filter. Will write more in the future posts.",
  'indicator exited before the COVID crash. Got you in shortly after. Most importantly kept you in the trade from Oct 2020 to April 2021. Exited when there was a mini "bear" phase. Got you in for the next upmove with one fakout. and Finally exited In Nov 2021.',
  `Caught the entire "Echo bubble" of 2019 without fakeouts.`,
  `Exited the markets in Jan 2018. Multiple fake entries but exited them quickly too. Again those can be reduced with regime filter. `,
  ``,
  `Caught both the waves in the 2013 cycle. Whats really interesting is it did not turn red in the flash crash but later on.`,
  `Caught both the up moves in 2021. One was 20x and the other 5x. Exited Nov 21. Caught some mini-upmoves too. Went long in Sep and caught the current frenzy too.`,
  `First upmove was 50x. Exited before it took the massive dip (not sure many of you remember that one.. in the early days Do Kwon appreared on the right track tring to build a consumer app.) Next leg up was 10x.`,
  `Exited BEFORE the so-called "Black Swan" Event which caused a 98% drop in days.`,
  `Entry is easy. Re-entry is HARD. 100x move in DOGE.`,
  `Caught the upmove in the mania but exited in Sep 2021. That turned out to be the top of ADA too. Much before the entire market topped out. That's why its important to play every coin/asset on its own flows rather than a fixed mindset. Again fakeouts can be reduced with Regime filters.`,
  `TSLA is THE most popular retail stock. Its also the most misunderstood too. The indicator caught the most explosive upside move from $15 to over $300 but the real highlight is, It did NOT turn red during the COVID crash. It kept you in the trade. It also got out pretty much at the top saving you from a massive drawdown.`,
  `One of the hottest stories of 2023 is AI. And NVDA was the direct beneficiary of this. Caught the move from the bottom and still going strong. It also kept you out of during the entire down move that happend in 2022. It was also long from 2019 all the way up to 2021 with minimal fakouts.`,
  `But NVDA is not just AI fad story. Its been one of the biggest winners of last decade. It kept you in the trade from 2015 to 2019. Overall in aggregate it captured 200x move. This is EXCLUDING the fact it got you before the biggest downturns. If you compounded that then its a lot more gains.`,
  `Got you out of Meta well before the carnage from over $300 to $80. Also got you in at 120 to 330.`,
  `Got you out of Netflix well before the crash from over $600 to $160. Also got you in at 200 to now at 440.`,
  `GME started the whole retail movement so to speak. While you can make up any "fundamentals" as you want, it really is a meme play. Got you in $1 all the way. More importantly, kept you in the trade even during the fake down move.`,
  `Crypto Stock BTC miner MARA. Firstly it did not turn Green during the whole echo bubble of 2019. Only went Green in less than $1 to 40. Rode it all the way without fake outs. Also got you out and end of the bull cycle. Saving you from an eye-watering 90% losses.`,
  `Riot - Another BTC miner with similar price action and signals. Also got you in at the end of 2022 and rode a neat 4x`,
  `Not sure if you remember Voyager. One of the crypto exchanges that went bankrupt in the lasy cycle. Caught the upmove from under 0.5 to 20s. But more importantly kept you out WELL before the whole thing went down.`,
  `COIN has not seen a bull run. The important thing to note is, in spite of all the news-flow and the SEC cases etc etc. It went green at the end of 2022 and has stayed that way.`,
  `Same as RIOT and MARA. Rode the entire upmove from 1 to 30. Kept you out from the 90% losses. Got you back in pretty much at the lows at the begining of 2023 and almost a 3x since.`,
  `Bond investors have had a rough time. Many kept predicting FED pivot at every little upmove. It kept you out from 50% downmove in bonds. `,
  `Kept you out of the entire 2022 bear phase. Got you in at the beginning of 2023`,
  `Same during the GFC of 2008. I was trading back then but had no access to any tools. Naturally learned some rough lessons like everyone else. It's not just about risk off but also risk on during favorable times.`,
  `I kept referring to Regime filters in the last post. USD is one of the many I use to determine Risk on RIsk off regimes. Just map the times indicator went red and see how crypto did during that period. Theres no better signal than liquidity.`,
];

let imageData = imageCaption.map((val, ind) => ({
  caption: val,
  link: `/image/indicator_${ind}.png`,
}));

const Indicator = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen pt-16">
        <div className="flex flex-col text-left w-[40%] gap-5">
          <div className="big-title">Indicator</div>
          <div className="general-text">
            <div className="leading-normal">
              Acquiring a food processor doesn’t make one a chef, just as
              purchasing a sword doesn’t make one a ninja.
            </div>
            <div className="leading-normal">
              Similarly, an indicator is only a tool. It is effective as long as
              you apply other aspects of trading strategy correctly.
            </div>
            <div className="leading-normal">
              But having access to a good tool that just works can make life
              very simple.
            </div>
            <div className="leading-normal">
              The goal here is for you to have an All-in-One indicator that you
              can rely on for
            </div>
            <div className="leading-normal">
              - Real-time for LTF trading, <br />
              - Scaling in and out of model positions, <br />- Using it on
              assets not actively covered in Web3Quant updates.
            </div>
            <div className="leading-normal">
              NOT claiming this as the best indicator out there, If you have a
              working system that works better for you then just stick to that.
            </div>
            <div className="leading-normal">
              This is designed to be{" "}
              <span className="font-bold">Simple & objective </span> which can
              be used in
              <span className="font-bold"> confluence</span> with the Web3Quant
              model updates.
            </div>

            <hr className="w-full my-10" />

            <div className="leading-normal">
              As always even before the HOW (solution), let's do the WHAT
              (problem) first.
            </div>
            <div className="medium-title">Problem#1 Overcrowding</div>
            <div className="leading-normal">
              Too many indicators are like a person who talks a lot but doesn't
              say anything. All they do is add noise.
            </div>
            <div className="leading-normal">
              <span className="font-bold"> Solution:</span> Web3Quant is an "All
              in one" Indicator that tells you exactly when to long/short with
              support/resistance levels. It will help one make decisions
              instantly without any subjective analysis.
            </div>

            <div className="medium-title">Problem#2 Over-fitting</div>
            <div className="leading-normal">
              If too many indicators weren't enough, most need to work on
              different settings/values to make it work on different assets.
              Like what would work for BTC might not work on Gold or Bonds.
            </div>
            <div className="leading-normal">
              Also when you find an indicator, there's this itch to keep
              changing values and tinkering and going back and forth. Been
              there, Done that.
            </div>
            <div className="leading-normal">
              This usually results in analysis paralysis as you never can settle
              on a single working system.
            </div>
            <div className="leading-normal">
              It's been tested on 100s of assets across multiple timeframes.
              from Crypto to Stocks to bonds to Forex to Commodities.
            </div>

            <div className="medium-title">
              Problem#3 Optimize for Lag or Smoothness?
            </div>
            <div className="leading-normal">
              No indicator will have a 100% hit rate. As a dev, you need to
              prioritize if you want{" "}
              <span className="text-underline">cleaner</span> signals or more{" "}
              <span className="text-underline">responsive</span> signals.
            </div>
            <div className="leading-normal">
              For example: If you plot a Buy/Sell signal based on a 200 moving
              average you will get fewer cleaner signals but it comes with a
              significant lag.
            </div>
            <div className="leading-normal">
              50ma will be responsive but you will get a lot of fake signals and
              most gains would be chopped in a sideways market.
            </div>
            <div className="leading-normal">
              Market{" "}
              <span className="text-underline">
                trends 30% of the time and ranges for 70%.
              </span>{" "}
              That's why most indicators do not work on their own.
            </div>
            <div className="leading-normal">
              What trade-off you choose to accept depends a lot on your style
              and strategy.
            </div>
            <div className="leading-normal">
              <span className="font-bold">Solution </span> - Web3Quant indicator
              is optimized to be balanced with a high signal-to-noise ratio.
            </div>

            <div className="medium-title">
              Problem#4 Doesn't work in All conditions
            </div>
            <div className="leading-normal">
              There are many trading styles but the majority can be slotted into
              2 categories.
            </div>
            <div className="leading-normal">
              Trend/Breakout and Mean Reversion.
            </div>
            <div className="leading-normal">
              When the markets are ranging/sideways your trend indicators don't
              work and when they are trending hard mean reversion ones fail.
            </div>
            <div className="leading-normal">
              <span className="font-bold"> Solution:</span> All assets are
              tested since their inception factoring wide range of conditions.
              You can check all the results and make an assessment.
            </div>

            <hr className="w-full my-10" />

            <div className="medium-title">What makes an indicator useful?</div>
            <ul className="pl-10 flex flex-col gap-3 list-disc">
              <li className="leading-normal ">
                It needs to be able to give{" "}
                <span className="font-bold">definitive </span> - Buy & Sell as
                early as possible. Otherwise, you only get ambiguity and noise.
                Not Signal.
              </li>
              <li className="leading-normal ">
                The signal needs to be{" "}
                <span className="font-bold">clean without flips/flops.</span>{" "}
                which allows you to stay in the trade for as long as possible to
                ride the full move Otherwise, Whipsaws/sideways markets will
                kill most gains.
              </li>
              <li className="leading-normal ">
                Should be universal (in both,{" "}
                <span className="font-bold">settings</span> and asset{" "}
                <span className="font-bold">coverage</span>). Otherwise, it will
                never be practical unless you are a single-asset trader.
              </li>
              <li className="leading-normal ">
                Should work on a{" "}
                <span className="font-bold">consistent time frame</span> which
                can be set as HTF/LTF. Otherwise, you will forever be in
                analysis paralysis mode for every new asset.
              </li>
            </ul>

            <hr className="w-full my-10" />
            <div className="medium-title">
              How does the Web3Quant indicator work?
            </div>
            <div className="leading-normal">
              Green indicates a buy; red, a sell. No guesswork.
            </div>
            <div className="leading-normal">
              Those lines also act as support/resistance levels respectively.
            </div>

            <hr className="w-full my-10" />

            <div className="medium-title">
              What are the best-suited timeframes for the indicator and the use
              cases for each?
            </div>
            <div className="leading-normal">3Day, Daily, 4hour.</div>
            <div className="leading-normal">
              3Day - For Investors who operate with a value thesis but need an
              instant quant-based decision.
            </div>
            <div className="leading-normal">
              <span className="font-bold text-underline">3Day</span> - For
              Investors who operate with a value thesis but need an instant
              quant-based decision.
            </div>
            <div className="leading-normal">
              For traders, it's a great Bull/Bear regime filter.
            </div>
            <div className="leading-normal">
              For traders, it's a great Bull/Bear regime filter.
            </div>
            <div className="leading-normal">
              For traders, it's a great Bull/Bear regime filter.
            </div>
            <div className="leading-normal">
              Coz they don't know when the music has stopped. They keep trading
              or bag-holding and give everything back during the bear.
            </div>
            <div className="leading-normal">
              Only a few can <span className="font-bold">mentally</span> recover
              from the pain of round-tripping the bull run gains.
            </div>
            <div className="leading-normal">
              A regime filter will ensure both investors and traders are always
              on the right side of the trade.
            </div>
            <div className="leading-normal">
              <span className="font-bold text-underline"> Daily</span> - This
              will be the universal High Time Frame (HTF).
            </div>
            <div className="leading-normal">
              <span className="font-bold text-underline"> 4-hour</span> - This
              will be the universal Low Time Frame (LTF).
            </div>
            <div className="leading-normal">
              These are suitable for positional trades. Good enough to ride
              50-100x as you will see in the results.
            </div>
            <div className="leading-normal">
              Indicator works on scalping timeframes too but will cover that in
              a separate post as it's a very different ball game.
            </div>
            <div className="leading-normal">
              Depending on trading style one can only operate on HTF, LTF, or a
              combination of both.
            </div>
            <div className="leading-normal">
              In the coming days, I will publish a lot of insights on different
              ways one can use this indicator for
            </div>

            <ul className="pl-10 flex flex-col gap-3 list-disc">
              <li className="leading-normal ">
                Building Regime Filters in both Crypto and TradFi.
              </li>
              <li className="leading-normal ">
                Relative Strength for Alt Cross Pairs. Alt/BTC, SOL/ETH, etc
              </li>
              <li className="leading-normal ">
                How to gauge Alt/BTC Season and other Dominance Plays.
              </li>
              <li className="leading-normal ">
                How to play on-chain names that do not have much fundamental
                info or price history.
              </li>
              <li className="leading-normal ">
                Options trading, Income-generating strategies on VIX, covered
                call ETFs, etc.
              </li>
              <li className="leading-normal ">
                Psychological aspects and combining indicators with subjective
                elements around us and many more things that you would like me
                to cover.
              </li>
            </ul>

            <div className="leading-normal">
              All of this will be more of a value-add than just giving access to
              the indicator alone IMO.
            </div>

            <hr className="w-full my-10" />

            <div className="medium-title">
              How is it different from the W3Q model?
            </div>
            <div className="leading-normal">WHAT? WHEN? HOW? to buy/sell.</div>
            <div className="leading-normal">
              How much aka allocation is very personal to each individual but
              the
            </div>
            <div className="leading-normal">
              WHAT and WHEN can be standardized. Hence Web3Quant only focuses on
              those.
            </div>
            <div className="leading-normal">
              <span className="text-underline">What</span> - is solved by a
              quantitative scanner. It signals what coins to long/short. This is{" "}
              <span className="font-bold">critical</span> as everyone has a
              finite capital but there are 1000s of new Coins/Stocks.
            </div>
            <div className="leading-normal">
              <span className="text-underline">When</span> - is solved by a
              signaling indicator.
            </div>
            <div className="leading-normal">
              <span className="font-bold">NOTE:</span> You are{" "}
              <span className="font-bold">NOT</span> getting access to the
              scanner or the indicator that I use ( that will not be made
              public). Those insights will only be shared via regular updates.
            </div>
            <div className="leading-normal">
              Instead, this is an indicator developed for the subs specifically.
            </div>
            <div className="leading-normal">
              Also, you can achieve 70% of the results with a simple moving
              average crossover or a super-trend indicator with smoothed
              settings.
            </div>
            <div className="leading-normal">
              Most folks who SELL their indicators/trading systems have some
              form of the above.
            </div>
            <div className="leading-normal">
              Without the curated scanner output and/or some form of insights
              and updates, they{" "}
              <span className="text-underline">
                don't add any more value than a simple crossover
              </span>
              would IMO.
            </div>
            <div className="leading-normal">
              That is why at W3Q it's not a separate product. Instead, as a
              value-add to an existing product.
            </div>
            <div className="leading-normal">
              Only someone who tried to develop these models would tell you pain
              points and that the effort & difficulty go exponentially higher
              when you try to improve the results from 70% {"-> 80% -> 90%."}
            </div>
            <div className="leading-normal text-underline">
              Even a delay of a couple of price candlesticks can make a strategy
              non-profitable.
            </div>
            <div className="leading-normal">
              That is the reason crossovers/supertrends aren't{" "}
              <span className="font-bold">profitable as a system</span> unless
              one is a discretionary trader.
            </div>

            <hr className="w-full my-10" />

            <div className="semi-medium-title">
              Let's get into the results...
            </div>
            <div className="leading-normal">
              To keep this post short we will only cover indicators HTF Signals
              on Daily Time Frame.
            </div>
            <div className="leading-normal">
              Will go through selective coins to cover the different
              "categories" of coins.
            </div>
            <div className="leading-normal">
              Rest you play with when you get access to the indicator or we can
              during AMAs.
            </div>
            <div className="leading-normal">
              BTC should give an idea of the entire space. <br /> SOL - Extreme
              winner. Extreme FUD. Most hated coin. <br /> DOGE - OG meme play.{" "}
              <br /> LUNA - Meteoric rise and Fall to Zero.
              <br /> ADA - Light on fundamentals but heavy on cultish following.
            </div>
            <div className="leading-normal">
              Nothing against others but chose these as they are a lot harder to
              play with conventional value thesis or due to extreme
              sentiments/newsflow/noise.
            </div>
          </div>
          <div className="medium-title text-underline">BITCOIN</div>
        </div>
        <div className="flex flex-col text-left w-[60%] gap-5">
          <LightBox imageData={imageData.slice(0, 7)} />
        </div>

        <div className="medium-title text-underline w-[40%] text-left">SOL</div>
        <div className="flex flex-col text-left w-[60%] gap-5">
          <LightBox imageData={imageData.slice(7, 8)} />
        </div>

        <div className="medium-title text-underline w-[40%] text-left">
          LUNA - The Rise
        </div>
        <div className="flex flex-col text-left w-[60%] gap-5">
          <LightBox imageData={imageData.slice(8, 9)} />
        </div>

        <div className="medium-title text-underline w-[40%] text-left">
          LUNA - The fall
        </div>
        <div className="flex flex-col text-left w-[60%] gap-5">
          <LightBox imageData={imageData.slice(9, 10)} />
        </div>

        <div className="medium-title text-underline  w-[40%] text-left">
          DOGE
        </div>
        <div className="flex flex-col text-left w-[60%] gap-5">
          <LightBox imageData={imageData.slice(10, 11)} />
        </div>

        <div className="medium-title text-underline  w-[40%] text-left">
          ADA
        </div>
        <div className="flex flex-col text-left w-[60%] gap-5">
          <LightBox imageData={imageData.slice(11, 12)} />
        </div>

        <div className="leading-normal w-[40%] text-left font-bold py-1">
          Let's move to the TradFI results. Here we will look at results on a
          3Day timeframe to give you a big-picture perspective.
        </div>
        <div className="leading-normal w-[40%] text-left font-bold py-1">
          NOTE: This is the exact same indicator you saw in earlier with the
          same settings. Just run on a 3Day timeframe.
        </div>

        <div className="flex flex-col text-left w-[60%] gap-5">
          <LightBox imageData={imageData.slice(12, 23)} />
        </div>

        <div className="leading-normal w-[40%] text-left font-bold py-1">
          <div className="semi-medium-title">MACRO</div>
          <div className="general-text">
            <div className="leading-normal">
              It's a fascinating subject to discuss at parties and argue with
              strangers over the internet till your face turns blue.
            </div>
            <div className="leading-normal">
              The reason many "gurus" get away with saying anything coz it can
              take years for something to play out and by then no one remembers
              what you said anyway.
            </div>
            <div className="leading-normal">
              There are only 2 kinds of people.
            </div>
            <div className="leading-normal">
              1- Those who don't know sh*t about macro.
              <br />
              2- Those who don't know that they don't know sh*t about Macro.{" "}
              <br />
            </div>
            <div className="leading-normal">
              The only folks worth following for Macro are those who use some
              sort of charts/price action to back their thesis and stitch the
              story. Coz they are more grounded in reality than fiction.
            </div>
            <div className="leading-normal">
              I choose to go a step ahead and only focus on Data and ignore the
              story coz I have learned the hard way that
            </div>
            <div className="leading-normal">
              Prices precede narratives and not vice versa.
            </div>
            <div className="leading-normal">
              Show me the price, I will tell you the news.
            </div>
            <div className="leading-normal">
              If the chair of the US Federal Reserve cannot reliably predict how
              hot inflation can run or what would be the interest rates down the
              line and chooses to be "Data Driven" then so should you.
            </div>
            <div className="leading-normal font-bold">
              Here are the ONLY 3 macro variables you will ever need to predict
              everything.
            </div>
            <div className="leading-normal">
              Bond Market (TLT) <br />
              Equities (S&P 500) <br />
              Worlds Reserve Currency (USD)
            </div>
          </div>
        </div>

        <div className="flex flex-col text-left w-[60%] gap-5 items-center">
          <LightBox imageData={imageData.slice(23, 27)} />

          <Link to={"/program"}>
                <GhostButton text={"Refer Now"} font={"text-2xl"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Indicator;
