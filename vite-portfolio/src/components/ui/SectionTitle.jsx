
export  const SectionTitle = ({ text, color = "bg-blue-500" }) => {
  return (
    <div className="w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-[20%] h-min flex flex-col gap-2">
      <h3 className="text-xl 2xl:text-4xl font-bold italic uppercase ml-1">
        {text}
      </h3>
      <span className={`min-h-[.3em] rounded-full ${color} w-full block`} />
    </div>
  );
};