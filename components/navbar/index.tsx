import Image from "next/image";
import SearchBar from "./search-bar";
import AddRecipe from "./add-recipe";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-6 navbar bg-base-100">
        <Image src="/images/logo.png" alt="forkify" className="object-contain h-auto w-26" width={120} height={20} />
        <SearchBar />
        <AddRecipe />
    </div>
  );
};

export default Navbar;