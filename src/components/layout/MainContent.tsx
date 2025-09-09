export default function MainContent() {
  return (
    <div className="px-[20px] pt-[20px] h-full overflow-auto hide-scrollbar">
      <h2 className="text-[14px] font-semibold text-black mb-1">
        Manage all members
      </h2>

      <div className="space-y-2">
        {/* Header section */}
        <div className="bg-white rounded-[30px] pt-[12px] pr-[30px] pb-[12px] pl-[20px] border-b border-gray-200">
          <div className="h-10 flex items-center justify-between">
            {/* Left side */}
            <div className="text-[12px] font-medium text-gray-700">Data</div>

            {/* Center - aligned with bio text */}
            <div className="flex-1 flex items-center justify-end pr-[90px] gap-4">
              <span className="text-[12px] font-medium text-gray-700 w-[100px] text-center">Tag</span>
              <span className="text-[12px] font-medium text-gray-700 w-[60px] text-center">Data</span>
              <span className="text-[12px] font-medium text-gray-700 w-[80px] text-center">Data</span>
              <span className="text-[12px] font-medium text-gray-700 w-[80px] text-center">Data</span>
            </div>

            {/* Right side */}
            <div className="text-[14px] font-medium text-gray-700">Action</div>
          </div>
        </div>

        {/* First row with implementation */}
        <div className="bg-white rounded-[30px] pt-[15px] pb-[15px] pr-[10px] pl-[10px] border border-gray-200">
          <div className="flex items-center justify-between">
            {/* Left - Profile + Bio beside */}
            <div className="flex items-center space-x-3 w-[420px]">
              {/* Profile Image (NOT circular, rounded rectangle) */}
              <img
                src="/man-with-glasses.png"
                alt="Lucas Johnson"
                className="w-[60px] h-[60px] rounded-lg object-cover"
              />

              {/* Name + Username + Location + Bio side by side */}
              <div className="flex space-x-4">
                {/* Name / Username / Location */}
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-gray-900">
                    Lucas Johnson
                  </span>
                  <span className="text-[10px] text-gray-500">@kemi</span>
                  <span className="text-[10px] text-gray-400">
                    Ibadan, Oyo State
                  </span>
                </div>

                {/* Bio in three lines */}
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500">Adventurer by nature 🌄</span>
                  <span className="text-[10px] text-gray-500">lover 🎨 | Eager to collaborate and</span>
                  <span className="text-[10px] text-gray-500">inspire through creativity...</span>
                </div>
              </div>
            </div>

            {/* Aligned items with header */}
            <div className="flex-1 flex items-center justify-end pr-[90px] gap-4">
              <div className="w-[100px] flex justify-center">
                <span className="pt-[5px] pr-[30px] pb-[5px] pl-[30px] text-xs rounded-full bg-gradient-to-r from-[#eed7e9] to-[#d7e0ee] text-gray-700 font-medium">
                  Data
                </span>
              </div>
              <div className="w-[60px] text-center text-sm text-gray-700">
                13
              </div>
              <div className="w-[80px] text-center text-sm text-gray-700">
                1,394
              </div>
              <div className="w-[80px] text-center text-sm text-gray-700">
                High
              </div>
            </div>

            {/* Action (delete button) */}
            <div className="flex justify-center w-[60px]">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100">
                <img src="/trash.png" alt="Delete" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Remaining rows with same styling */}
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] pt-[15px] pb-[15px] pr-[10px] pl-[10px] border border-gray-200"
            >
              <div className="flex items-center justify-between">
                {/* Left - Profile + Bio beside */}
                <div className="flex items-center space-x-3 w-[420px]">
                  {/* Profile Image (NOT circular, rounded rectangle) */}
                  <img
                    src="/man-with-glasses.png"
                    alt="Lucas Johnson"
                    className="w-[60px] h-[60px] rounded-lg object-cover"
                  />

                  {/* Name + Username + Location + Bio side by side */}
                  <div className="flex space-x-4">
                    {/* Name / Username / Location */}
                    <div className="flex flex-col">
                      <span className="text-[11px] font-semibold text-gray-900">
                        Lucas Johnson
                      </span>
                      <span className="text-[10px] text-gray-500">@kemi</span>
                      <span className="text-[10px] text-gray-400">
                        Ibadan, Oyo State
                      </span>
                    </div>

                    {/* Bio in three lines */}
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500">Adventurer by nature 🌄</span>
                      <span className="text-[10px] text-gray-500">lover 🎨 | Eager to collaborate and</span>
                      <span className="text-[10px] text-gray-500">inspire through creativity...</span>
                    </div>
                  </div>
                </div>

                {/* Aligned items with header */}
                <div className="flex-1 flex items-center justify-end pr-[90px] gap-4">
                  <div className="w-[100px] flex justify-center">
                    <span className="pt-[5px] pr-[30px] pb-[5px] pl-[30px] text-xs rounded-full bg-gradient-to-r from-[#eed7e9] to-[#d7e0ee] text-gray-700 font-medium">
                      Data
                    </span>
                  </div>
                  <div className="w-[60px] text-center text-sm text-gray-700">
                    13
                  </div>
                  <div className="w-[80px] text-center text-sm text-gray-700">
                    1,394
                  </div>
                  <div className="w-[80px] text-center text-sm text-gray-700">
                    High
                  </div>
                </div>

                {/* Action (delete button) */}
                <div className="flex justify-center w-[60px]">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100">
                    <img src="/trash.png" alt="Delete" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
