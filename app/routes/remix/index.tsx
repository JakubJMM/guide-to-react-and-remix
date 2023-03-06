import { Smile } from "react-feather";

function Remix() {
  return (
    <div className="relative">
      <div>
        <h1 className="mt-16 text-center text-4xl font-black leading-relaxed text-white">
          Pick a lesson from the list to begin...
        </h1>

        <Smile
          className="mx-auto mt-8 stroke-amber-200"
          size="8rem"
          strokeWidth={1}
        />
      </div>
    </div>
  );
}

export default Remix;
