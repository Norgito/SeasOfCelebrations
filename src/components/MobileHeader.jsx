import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import MobileCartWidget from "./MobileCartWidget";

const MobileHeader = () => {
  return (
    <div className="fixed z-50 bg-white w-full top-0 drop-shadow-lg">
      <div className="lg:hidden flex justify-evenly items-center h-[65px] ">
        <MobileCartWidget />
        <Logo />
        <MobileMenu />
      </div>
    </div>
  );
};

export default MobileHeader;
