// 可読性向上の為、page以外の要素はappディレクトリの外に配置
import NavList from "./NavList/NavList";

const SideMenu = () => {
  return (
    <div className="w-56 pt-8 bg-gray-800 text-white">
      <div>
        {/* h1(AppTitle) */}
        <h1 className="px-4 text-2xl font-bold">Next Tasks</h1>
        <NavList />
      </div>
    </div>
  );
};

export default SideMenu;
