const GhostButton = ({text, font}) => {
  return (
    <>
      <span className={`text-white ${font} text-center px-8 rounded-lg py-2 font-bold bg-[--ghost-accent-color]`}>{text}</span>
    </>
  );
};

export default GhostButton;
