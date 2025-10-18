import bodyImage from "../assets/images/bodyImage.png";
import Icon from "../assets/images/Icon.png";

const Body = () => {
  return (
    <>
      <div className="flex justify-center bg-black w-auto h-[900px]">
        <img src={bodyImage} alt="" className="h-[725px]" />;
      </div>

      <div className="bg-[#1a1a1a] flex flex-col items-center justify-center gap-12 w-auto h-[900px]">
        <h2 className="text-white text-5xl">
          An extraordinary note <br /> for{" "}
          <span className="text-[#00BB77]">makers, creators..</span>
        </h2>
        <span>
          <img src={Icon} alt="" className="w-[160px] h-[160px]" />
        </span>
        <p className="text-white text-xl text-center">
          Creators around the planet use this app <br />
          for creating <span className="text-[#00BB77]">magic.</span>
        </p>
      </div>
    </>
  );
};

export default Body;
