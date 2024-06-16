import { FaRegCheckSquare, FaRegClock, FaTasks } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";

// navListに表示するnavigationItemの型定義
interface NavItemType {
  id: number;
  label: string;
  // 例: link: "http://localhost3000:/home/menu"
  link: string;
  // 説明: このプロパティはメニュー項目のアイコンを表します。React.ReactNode型で定義されています。これはReactコンポーネントとしてレンダリングされるものです。例えば、アイコンライブラリからのアイコンやカスタムアイコンコンポーネントです。
  // 例: <HomeIcon />や<img src="/icon.png" alt="home icon" />
  icon: React.ReactNode;
}

const NavList = () => {
  //　配列変数の型を定義
  const navList: NavItemType[] = [
    {
      id: 1,
      label: "All Tasks",
      link: "/",
      icon: <FaTasks className="size-5" />,
    },
    {
      id: 2,
      label: "Completed Tasks",
      link: "/completed",
      icon: <FaRegCheckSquare className="size-5" />,
    },
    {
      id: 3,
      label: "Expired Tasks",
      link: "/expired",
      icon: <FaRegClock className="size-5" />,
    },
  ];
  return (
    // navList[]をmapで展開,それらをNavItemコンポーネントへpropsを渡す
    <div className="mt-24">
      {navList.map((item) => (
        // navItemでは,(label, link, icon)を含む型定義をしている為→それらを渡す必要がある
        <NavItem
          key={item.id}
          label={item.label}
          link={item.link}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default NavList;
