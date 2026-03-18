
export function ContactLink({ url = "", imgUrl, alt, text, target = "_self", className = "" }) {
  return (
    <a 
      href={url} 
      target={target}
      className={`${className} flex p-2 hover:scale-102 transition-all duration-150 ease-in rounded-md bg-custom-gradient gap-2`}
    >
      <div className="w-[7%]">
        <img src={imgUrl} alt={alt} className="invert w-full " />
      </div>
      
      <div className="grow text-left flex items-center">
        {text}
      </div>
    </a>
  );
}