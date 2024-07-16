import SubscribeButton from "../components/SubscribeButton";

const Home = () => {
  return (
    <div className="w-screen bg-[--ghost-accent-color] flex justify-center py-10">
      <div className="w-[500px] flex flex-col justify-center items-center gap-6 text-white">
        <div className="semi-medium-title">Subscribe to Web3Quant</div>
        <div className="text-xl">
          Don’t miss out on the latest issues. Sign up now to get access to the
          library of members-only issues.
        </div>
        <div className="mt-8">
          <SubscribeButton flag={2}></SubscribeButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
