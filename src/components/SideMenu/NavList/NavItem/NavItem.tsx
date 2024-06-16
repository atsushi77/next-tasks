"use client"; //reactHooksを利用する為、directiveが必要

// NavListからnavigation要素(props)を受け取る為、型定義を行う
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  // 例: link: "http://localhost3000:/home/menu"
  link: string;
  // 説明: このプロパティはメニュー項目のアイコンを表します。React.ReactNode型で定義されています。これはReactコンポーネントとしてレンダリングされるものです。例えば、アイコンライブラリからのアイコンやカスタムアイコンコンポーネントです。
  // 例: <HomeIcon />や<img src="/icon.png" alt="home icon" />
  icon: React.ReactNode;
}

// NavItemコンポーネントは下記のpropsを受け取る必要がある
const NavItem: React.FC<NavItemProps> = ({ label, link, icon }) => {
  // usePathnameで現在のpathを取得しvariableに格納
  const pathname = usePathname();
  return (
    <Link
      href={link}
      // class内でvariableをを扱う場合は(`と$と{}が必要)
      className={`flex p-4 w-full items-center hover:bg-gray-700 font-medium ${
        pathname === link
          ? "bg-gray-600 border-r-4 border-green-500 text-green-500"
          : ""
      }`}
    >
      <div>{icon}</div>
      <div className="ml-1">{label}</div>
    </Link>
  );
};

export default NavItem;
