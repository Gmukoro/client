import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-600 text-white w-full py-6 px-16 font-bold text-3xl">
      <Link to="/">Spire</Link>
    </div>
  );
};
export default Header;
