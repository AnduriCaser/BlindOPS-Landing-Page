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
          title="Dark 1"
          desc="Lorem ipsum dolor sit amet cart curt flan filan"
        />
        <SolutionsCard
          src="/dark2.png"
          title="Dark 2"
          desc="Lorem ipsum dolor sit amet cart curt flan filan"
        />
        <SolutionsCard
          src="/dark3.png"
          title="Dark 3"
          desc="Lorem ipsum dolor sit amet cart curt flan filan"
        />
      </div>
    </div>
  );
};

export default Solutions;
