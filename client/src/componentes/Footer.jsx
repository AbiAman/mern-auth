import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-slate-200">
      <div className="flex items-center justify-center p-4 ">
        <Link to="/home">
          <h1 className="font-bold text-3xl">Auth app</h1>
        </Link>
      </div>
    </div>
  );
}
