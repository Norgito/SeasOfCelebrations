import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import MobileCartWidget from "./MobileCartWidget";

const MobileHeader = () => {
  return (
    <div className="top-0 z-50 w-screen">
      <div className="lg:hidden absolute flex bg-white shadow-lg justify-between px-10 items-center w-full z-50 h-[70px]">
        <MobileCartWidget />
        <div className="bg-white shadow-1 shadow-white rounded-full h-[200px] mr-6 flex items-center">
        <Logo />
        </div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default MobileHeader;
