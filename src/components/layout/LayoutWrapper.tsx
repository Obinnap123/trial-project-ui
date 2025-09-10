import SideBar from "@/components/layout/SideBar";
import SectionTopBar from "@/components/layout/SectionTopBar";
import MainContent from "@/components/layout/MainContent";

export default function LayoutWrapper() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[10px] h-[calc(100vh-58px)] lg:h-[calc(100vh-theme(spacing.4)-theme(spacing.4)-10px)] overflow-hidden">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 p-2 lg:p-0 overflow-hidden">
        <div className="bg-white lg:rounded-[30px] mb-[10px]">
          <SectionTopBar />
        </div>
        <div className="bg-white lg:rounded-[30px] flex-1 min-h-0 overflow-hidden">
          <MainContent />
        </div>
      </main>
    </div>
  );
}
