import Logo from "./Logo";
const Header = () => (
  <div className="h-[225px] bg-white pt-4">
    <div className="flex pb-6">
      <Logo />
      <div className="px-4 font-[400] border-l border-[#777776] text-sm text-[#777776] font-poppins leading-4 ">
        <p>Fikcyjny</p>
        <p>Instytut</p>
        <p>Edukacyjny</p>
      </div>
    </div>
    <a href="#">- Blog</a>
    <hr />
    <h1 className="px-12 py-8 font-bold">Blog Edukacyjny</h1>
  </div>
);
export default Header;
