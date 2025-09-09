export default function SectionTopBar() {
  return (
    <div className="px-3 sm:px-6 py-3 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between sm:items-center">
      <h1 className="text-[16px] font-semibold text-black">Moderators</h1>
      <button 
        className="px-[15px] sm:px-[25px] py-[10px] flex items-center justify-center sm:justify-start gap-[5px] text-white rounded-[50px] w-full sm:w-auto"
        style={{ 
          background: 'linear-gradient(to right, rgba(66, 133, 244, 1), rgba(210, 9, 163, 1))'
        }}
      >
        <span>+</span>
        <span className="font-semibold text-[14px]">Add members</span>
      </button>
    </div>
  );
}
