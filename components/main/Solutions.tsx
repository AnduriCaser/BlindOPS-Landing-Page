import SolutionsCard from "../sub/SolutionsCard";

const Solutions = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mt-[-80px] mb-4"
      id="solutions"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Solutions
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <SolutionsCard
          src="/dark1.png"
          desc="Easily and quickly manage all assets."
        />
        <SolutionsCard
          src="/dark2.png"
          desc="Analyze vulnerabilities graphically."
        />
        <SolutionsCard
          src="/dark3.png"
          desc="7/24 live support for all users."
        />
      </div>
    </div>
  );
};

export default Solutions;
