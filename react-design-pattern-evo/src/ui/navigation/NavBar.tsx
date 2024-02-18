import { useCallback, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  const menuItems = [
    { text: "HOC", link: '/high-order-component' },
    { text: "Render Props", link: '/renderprops' },
    { text: "Wallet" },
    { text: "Help" },
  ];

  const navigateTo = useCallback((href: string) => {
    setNav(false);
    navigate(href);
  }, [navigate]);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm">
      {/* Left side */}
      <div className="flex items-center">
        <button onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} className=" text-slate-200" />
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 font-bold">
          Menu
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 items-center">
            {menuItems.map(({ text, link }, index) => {
              return (
                <div key={index} className=" py-4">
                  <li>
                    {link && (<button className="text-xl cursor-pointer  w-[100%] rounded-full py-2 px-8 hover:text-white hover:bg-black flex-grow" onClick={(_) => navigateTo(link)}>{text}</button>)}
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;