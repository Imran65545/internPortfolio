// components/Loader.js
import { Jelly } from "@uiball/loaders";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-64">
      <Jelly size={50} speed={1.5} color="#000" />
    </div>
  );
}
