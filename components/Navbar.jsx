import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="w-full py-6 px-8 flex justify-center flex-wrap border-b border-solid border-gray-900">
        <div>
          <Link href="/">
            <h1 className="font-bold text-5xl text-center lg:text-left">
              <span className="text-red-600">Redemption</span> Hymns
            </h1>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
