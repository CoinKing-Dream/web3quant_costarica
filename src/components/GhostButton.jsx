const GhostButton = ({text}) => {
  return (
    <>
      <span className="text-white text-2xl text-center w-48 px-4 rounded-lg py-2 font-bold bg-[--ghost-accent-color]">{text}</span>
    </>
  );
};

export default GhostButton;
