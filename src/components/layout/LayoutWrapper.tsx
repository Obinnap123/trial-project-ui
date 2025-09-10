import SideBar from "@/components/layout/SideBar";
import SectionTopBar from "@/components/layout/SectionTopBar";
import MainContent from "@/components/layout/MainContent";

export default function LayoutWrapper() {
  return (
    <div className="flex flex-col lg:flex-row gap-[10px] h-screen overflow-hidden">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 p-2 lg:p-0">
        <div className="bg-white rounded-[30px] mb-[10px]">
          <SectionTopBar />
        </div>
        <div className="bg-white rounded-[30px] flex-1 overflow-auto">
          <MainContent />
        </div>
      </main>
    </div>
  );
}
