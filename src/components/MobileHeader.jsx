import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import MobileCartWidget from "./MobileCartWidget";

const MobileHeader = () => {
  return (
    <div className="lg:hidden flex bg-white shadow-lg justify-between px-10 items-center fixed w-full z-50 h-[110px]">
      <MobileCartWidget />
      <div className="">
        <Logo />
      </div>
      <MobileMenu />
    </div>
  );
};

export default MobileHeader;
