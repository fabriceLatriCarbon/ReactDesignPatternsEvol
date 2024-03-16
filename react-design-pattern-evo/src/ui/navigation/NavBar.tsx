import { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImSun } from "react-icons/im";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useNavigationDrawer } from "@commonHooks/useNavigationDrawer";
import useAppTheme from "@commonHooks/useAppTheme";
import ClassicSwitch from "@ui/switchs/ClassicSwitch";

const Navbar = () => {
  const refInner = useRef<HTMLButtonElement | null>(null);
  const refOuter = useRef<HTMLDivElement | null>(null);

  const { appTheme, setAppTheme } = useAppTheme();


  const menuItems = [
    { text: "HOC", link: '/high-order-component' },
    { text: "Render Props", link: '/render-props' },
    { text: "Custom Hooks", link: '/custom-hooks' },
    { text: "Prop Getters", link: '/prop-getters' },
    { text: "Provider", link: '/provider' }
  ];

  const navigateTo = (href: string) => {
    navigate(href);
  };

  const navigate = useNavigate();

  const openDrawer = useNavigationDrawer(refInner, refOuter);

  return (
    <div className="bg-gradient-indogo-to-pink h-16">
      <div className="mx-auto flex justify-between items-center p-4 shadow-sm bg-white dark:bg-ardoise">
        {/* Left side */}
        <div className="flex w-full items-center justify-between">
          <button ref={refInner} className="flex-none cursor-pointer">
            <AiOutlineMenu size={30} className=" dark:text-gray-200" />
          </button>
          <div className="grow"></div>
          <div className="flex-none mr-12">
            <ClassicSwitch isChecked={appTheme === 'dark'} id={"nav-bar-theme-switch"} onChange={() => { setAppTheme() }} label={appTheme === 'dark' ? <BsFillMoonStarsFill /> : <ImSun />} />
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        {openDrawer ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/* Side drawer menu */}
        <div
          className={
            openDrawer
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
          ref={refOuter}
        >
          <h2 className="text-2xl p-4 font-bold">
            Menu
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800 items-center">
              {menuItems.map(({ text, link }, index) => {
                return (
                  <div key={index} className=" py-4">
                    <li>
                      <button className="text-xl cursor-pointer  w-[100%] rounded-full py-2 px-8 hover:text-white hover:bg-black flex-grow" onClick={(_) => navigateTo(link)}>{text}</button>
                    </li>
                  </div>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;