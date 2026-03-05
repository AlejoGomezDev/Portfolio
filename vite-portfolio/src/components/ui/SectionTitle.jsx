
export  const SectionTitle = ({ text, color = "bg-blue-500" }) => {
  return (
    <div className="w-[25%] h-min flex flex-col gap-2">
      <h3 className="text-xl 2xl:text-4xl font-bold italic uppercase ml-1">
        {text}
      </h3>
      <span className={`min-h-[.3em] rounded-full ${color} w-full block`} />
    </div>
  );
};