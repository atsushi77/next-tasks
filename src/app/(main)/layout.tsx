import SideMenu from "@/components/SideMenu/SideMenu";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    // h-screen: 100vh(画面の高さ一杯に描画)
    <div className="flex h-screen">
      <SideMenu />
      {/* flex-1(横幅一杯) overflow-auto(要素次第でscroll可)*/}
      <main className="bg-slate-50 flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
