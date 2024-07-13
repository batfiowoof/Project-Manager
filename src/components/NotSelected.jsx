import noImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NotSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noImage}
        alt="Empty notebook"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        Select a Project or create one!
      </h2>
      <p className="mt-8">
        <Button>+ Create</Button>
      </p>
    </div>
  );
}
