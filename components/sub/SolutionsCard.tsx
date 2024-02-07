import Image from "next/image";

interface Props {
  src: string;
  desc: string;
}

const SolutionsCard = ({ src, desc }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt="Blindops"
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <p className="mt-2 text-gray-300 text-center text-base md:text-lg">{desc}</p>
      </div>
    </div>
  );
};

export default SolutionsCard;
