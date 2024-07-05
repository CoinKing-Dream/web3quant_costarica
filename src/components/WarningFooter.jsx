const WarningFooter = () => {
  return (
    <>
      <div className="flex justify-center w-screen">
        <div className="w-[40%] flex flex-col">
          <hr className="w-full my-10" />

          <div className="general-text leading-normal text-left">
            ** Web3Quant is not registered with any financial regulatory
            agencies. Web3Quant content is purely for research, education, and
            entertainment purposes and should NOT be considered personalized
            financial advice. Do your own research and consult your financial
            advisor.**
          </div>
        </div>
      </div>
    </>
  );
};

export default WarningFooter;
