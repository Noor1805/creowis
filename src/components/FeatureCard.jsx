import { FiArrowUpRight } from "react-icons/fi";

const FeatureCard = ({ featureName }) => {
  return (
    <div
      className="
        shrink-0
        bg-[#1e1e1e]/90
        border border-white/10
        flex items-end
        px-5 py-5
        relative
        whitespace-pre-line
        group
        transition-all duration-300 ease-in-out
        hover:border-[#00BB77]
        rounded-[20px]    rounded-br-2xl     
      "
      style={{ width: "388px", height: "320px" }}
    >
      <span className="text-white font-medium text-2xl leading-snug">
        {featureName}
      </span>

      <FiArrowUpRight
        className="
          absolute top-1/2 left-1/2
          transform -translate-x-1/2 -translate-y-1/2
          text-[#00BB77]
          opacity-0 scale-75
          transition-all duration-300 ease-in-out
          group-hover:opacity-100
          group-hover:scale-150
          group-hover:translate-x-[350%]
          group-hover:-translate-y-[350%]
        "
        size={32}
      />
    </div>
  );
};

export default FeatureCard;
