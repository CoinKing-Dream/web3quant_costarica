import { Link } from "react-router-dom";
import GhostButton from "../components/GhostButton";

const Program = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen pt-16">
        <div className="flex flex-col text-left w-[40%] gap-5 items-center">
          <div className="big-title">Referral Program</div>

          <div className="general-text">
            <div className="leading-normal text-3xl pt-5">
              Refer 2 friends, Get a All-Access subscription
            </div>
          </div>

          <div className="flex flex-row gap-5">
            <input
              placeholder="Your Mail Address*"
              className="px-3 flex-xl py-2 px-3 border rounded-lg border-black"
            ></input>
            <GhostButton text={"Refer Now!"} font={"text-base"} />
          </div>

          <div className="flex flex-row justify-center pt-12 gap-12">
            <div className="w-52">
              Here you can see the rewards you won when your friends signed-up.
            </div>
            <div className="bg-[#DADADA] rounded-lg px-3 py-1 flex flex-col justify-center items-center">
              <div>Referrals</div>
              <div className="text-2xl font-bold">{0}</div>
            </div>
          </div>

          <hr className="w-full my-10" />
        </div>

        <div className="flex flex-col text-left w-[40%] gap-5">
          <div className="general-text ">
            <div className="leading-normal ">Here's the process:</div>
            <ul className="pl-10">
              <li className="leading-normal list-disc">
                Click on "Refer Now" to generate your unique referral link.
              </li>
              <li className="leading-normal list-disc">
                Share it on your preferred socials.
              </li>
              <li className="leading-normal list-disc">
                When 2 of your referrals sign up, You get an All Access
                subscription
              </li>
              <li className="leading-normal list-disc">
                If you're already a subscriber, credits will be added to your
                account for upgrading or the next renewal.
              </li>
              <li className="leading-normal list-disc">
                There's also a widget on the page that will keep you updated on
                the number of successful referrals you've made.
              </li>
            </ul>

            <div className="semi-medium-title">
              As with anything, it's always good to establish ground rules.
            </div>

            <ul className="pl-10">
              <li className="leading-normal list-disc">
                <div className="text-underline pb-3">No Spamming</div>
                <div>
                  The integrated referral software is adept at detecting spam.
                  Anyone found spamming will be blocked and banned.
                </div>
              </li>
              <li className="leading-normal list-disc">
                <div className="text-underline pb-3">Fraud Prevention</div>
                <div>
                  Any fraudulent activities, such as creating multiple accounts
                  to earn referrals, will lead to immediate disqualification.
                </div>
              </li>
              <li className="leading-normal list-disc">
                <div className="text-underline pb-3">No Misrepresentation</div>
                <div className="my-2">
                  This is more for you than for me. It's your own reputation on
                  the line. Be wise and please represent Web3Quant accurately
                  and honestly.
                </div>
                <div className="my-2">
                  Ask them to read the{" "}
                  <Link to={"/about"} className="link-style">
                    FAQs
                  </Link>{" "}
                  first so they know what to and what{" "}
                  <span className="font-bold">NOT</span> to expect.
                </div>
              </li>
              <li className="leading-normal list-disc">
                <div className="text-underline pb-3">Successful referral</div>
                <div>
                  Each referred subscriber should be unique, and not have been a
                  subscriber in the past.
                </div>
              </li>
            </ul>

            <div className="leading-normal">
              Thank You! <br />
              W3Q
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
