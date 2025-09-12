export default function SectionTopBar() {
  return (
    <div className="px-4 lg:px-6 py-3 flex justify-between items-center">
      <h1 className="text-[15px] lg:text-[16px] font-semibold text-black">Moderators</h1>
      <button 
        className="px-3 lg:px-[25px] py-2 lg:py-[10px] flex items-center justify-center gap-[5px] text-white rounded-[50px] cursor-pointer"
        style={{ 
          background: 'linear-gradient(to right, rgba(66, 133, 244, 1), rgba(210, 9, 163, 1))'
        }}
      >
        <span className="text-[15px] lg:text-base">+</span>
        <span className="font-semibold text-[13px] lg:text-[14px]">Add members</span>
      </button>
    </div>
  );
}
