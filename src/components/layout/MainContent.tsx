export default function MainContent() {
  return (
    <div className="px-4 lg:px-[20px] pt-4 lg:pt-[20px] h-full overflow-y-auto hide-scrollbar">
      <h2 className="text-[15px] lg:text-[16px] font-semibold text-black mb-2 lg:mb-1">
        Manage all members
      </h2>

      <div className="space-y-3 lg:space-y-2">
        {/* Header section - hidden on mobile */}
        <div className="hidden lg:block bg-white lg:rounded-[30px] py-3 px-4 border-b border-gray-200">
          <div className="flex items-center">
            {/* Left side - Profile Info Width */}
            <div className="w-[400px] text-[12px] font-medium text-gray-700">Data</div>

            {/* Center - aligned with bio text */}
            <div className="flex-1 flex items-center justify-end gap-4 pr-16">
              <span className="text-[12px] font-medium text-gray-700 w-[90px] text-center">Tag</span>
              <span className="text-[12px] font-medium text-gray-700 w-[60px] text-center">Data</span>
              <span className="text-[12px] font-medium text-gray-700 w-[60px] text-center">Data</span>
              <span className="text-[12px] font-medium text-gray-700 w-[60px] text-center">Data</span>
            </div>

            {/* Right side */}
            <div className="w-[60px] text-[12px] font-medium text-gray-700 text-center">Action</div>
          </div>
        </div>

        {/* Content row */}
        <div className="bg-white lg:rounded-[30px] p-4 lg:pt-[15px] lg:pb-[15px] lg:pr-[10px] lg:pl-[10px] border border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {/* Mobile: Profile section stacked */}
            <div className="flex items-start lg:items-center lg:space-x-3 lg:w-[420px]">
              {/* Delete button on mobile - top right */}
              <div className="lg:hidden ml-auto">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100">
                  <img src="/trash.png" alt="Delete" className="w-4 h-4" />
                </button>
              </div>

                  {/* Profile Image */}
                  <img
                    src="/man-with-glasses.png"
                    alt="Lucas Johnson"
                    className="w-[56px] lg:w-[60px] h-[56px] lg:h-[60px] rounded-lg object-cover"
                  />              {/* Mobile: Stack all info vertically */}
              <div className="flex-1 mt-0 ml-4 lg:ml-0 lg:mt-0">
                <div className="flex flex-col lg:flex-row lg:space-x-4">
                  {/* Name / Username / Location */}
                  <div className="flex flex-col mb-2 lg:mb-0">
                    <span className="text-[13px] lg:text-[11px] font-semibold text-gray-900">
                      Lucas Johnson
                    </span>
                    <span className="text-[12px] lg:text-[10px] text-gray-500">@kemi</span>
                    <span className="text-[12px] lg:text-[10px] text-gray-400">
                      Ibadan, Oyo State
                    </span>
                  </div>

                  {/* Bio */}
                  <div className="flex flex-col">
                    <span className="text-[12px] lg:text-[10px] text-gray-500">Adventurer by nature 🌄</span>
                    <span className="text-[12px] lg:text-[10px] text-gray-500">lover 🎨 | Eager to collaborate and</span>
                    <span className="text-[12px] lg:text-[10px] text-gray-500">inspire through creativity...</span>
                  </div>
                </div>

                {/* Mobile: Stats in grid */}
                <div className="mt-3 lg:hidden grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                    <span className="text-[12px] text-gray-600">Data</span>
                    <span className="text-[12px] font-medium text-gray-900">13</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                    <span className="text-[12px] text-gray-600">Data</span>
                    <span className="text-[12px] font-medium text-gray-900">1,394</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                    <span className="text-[12px] text-gray-600">Data</span>
                    <span className="text-[12px] font-medium text-gray-900">High</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                    <span className="text-[12px] text-gray-600">Tag</span>
                    <span className="pt-1 px-3 pb-1 text-[11px] rounded-full bg-gradient-to-r from-[#eed7e9] to-[#d7e0ee] text-gray-700 font-medium">
                      Data
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Aligned items with header */}
            <div className="hidden lg:flex flex-1 items-center justify-end gap-4 pr-16">
              <div className="w-[90px] flex justify-center">
                <span className="px-4 py-1 text-xs rounded-full bg-gradient-to-r from-[#eed7e9] to-[#d7e0ee] text-gray-700 font-medium whitespace-nowrap">
                  Data
                </span>
              </div>
              <div className="w-[60px] text-center text-sm text-gray-700">
                13
              </div>
              <div className="w-[60px] text-center text-sm text-gray-700">
                1,394
              </div>
              <div className="w-[60px] text-center text-sm text-gray-700">
                High
              </div>
            </div>

            {/* Desktop: Action button */}
            <div className="hidden lg:flex justify-center w-[60px]">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100">
                <img src="/trash.png" alt="Delete" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional rows */}
        {[
          // First mapped row (third overall) - Sarah Williams
          { id: 1, image: '/woman-with-wig.png', name: 'Aisha Thompson', username: '@aisha_t', location: 'nairobi,kenya' },
          // Remaining rows - Lucas Johnson
          { id: 2, image: '/man-with-laptop.png', name: 'Lucas Johnson', username: '@kemi', location: 'Ibadan, Oyo State' },
          { id: 3, image: '/man-in-yellow-bandana.png', name: 'Lucas Johnson', username: '@kemi', location: 'Ibadan, Oyo State' },
          { id: 4, image: '/man-in-pink.png', name: 'Lucas Johnson', username: '@kemi', location: 'Ibadan, Oyo State' },
           { id: 5, image: '/woman-with-wig.png', name: 'Aisha Thompson', username: '@aisha_t', location: 'nairobi,kenya' }
        ].map((person) => (
            <div
              key={person.id}
              className="bg-white lg:rounded-[30px] p-4 lg:pt-[15px] lg:pb-[15px] lg:pr-[10px] lg:pl-[10px] border border-gray-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                {/* Mobile: Profile section stacked */}
                <div className="flex items-start lg:items-center lg:space-x-3 lg:w-[420px]">
                  {/* Delete button on mobile - top right */}
                  <div className="lg:hidden ml-auto">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100">
                      <img src="/trash.png" alt="Delete" className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Profile Image */}
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-[56px] lg:w-[60px] h-[56px] lg:h-[60px] rounded-lg object-cover"
                  />

                  {/* Mobile: Stack all info vertically */}
                  <div className="flex-1 mt-0 ml-4 lg:ml-0 lg:mt-0">
                    <div className="flex flex-col lg:flex-row lg:space-x-4">
                      {/* Name / Username / Location */}
                      <div className="flex flex-col mb-2 lg:mb-0">
                        <span className="text-[13px] lg:text-[11px] font-semibold text-gray-900">
                          {person.name}
                        </span>
                        <span className="text-[12px] lg:text-[10px] text-gray-500">{person.username}</span>
                        <span className="text-[12px] lg:text-[10px] text-gray-400">
                          {person.location}
                        </span>
                      </div>

                      {/* Bio */}
                      <div className="flex flex-col">
                        {person.name === 'Sarah Williams' ? (
                          <>
                            <span className="text-[12px] lg:text-[10px] text-gray-500">Digital artist & creator 🎨</span>
                            <span className="text-[12px] lg:text-[10px] text-gray-500">Passionate about design and</span>
                            <span className="text-[12px] lg:text-[10px] text-gray-500">bringing ideas to life ✨</span>
                          </>
                        ) : (
                          <>
                            <span className="text-[12px] lg:text-[10px] text-gray-500">Adventurer by nature 🌄</span>
                            <span className="text-[12px] lg:text-[10px] text-gray-500">lover 🎨 | Eager to collaborate and</span>
                            <span className="text-[12px] lg:text-[10px] text-gray-500">inspire through creativity...</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Mobile: Stats in grid */}
                    <div className="mt-3 lg:hidden grid grid-cols-2 gap-2">
                      <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                        <span className="text-[12px] text-gray-600">Data</span>
                        <span className="text-[12px] font-medium text-gray-900">13</span>
                      </div>
                      <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                        <span className="text-[12px] text-gray-600">Data</span>
                        <span className="text-[12px] font-medium text-gray-900">1,394</span>
                      </div>
                      <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                        <span className="text-[12px] text-gray-600">Data</span>
                        <span className="text-[12px] font-medium text-gray-900">High</span>
                      </div>
                      <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                        <span className="text-[12px] text-gray-600">Tag</span>
                        <span className="pt-1 px-3 pb-1 text-[11px] rounded-full bg-gradient-to-r from-[#eed7e9] to-[#d7e0ee] text-gray-700 font-medium">
                          Data
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop: Aligned items with header */}
                <div className="hidden lg:flex flex-1 items-center justify-end gap-4 pr-16">
                  <div className="w-[90px] flex justify-center">
                    <span className="px-4 py-1 text-xs rounded-full bg-gradient-to-r from-[#eed7e9] to-[#d7e0ee] text-gray-700 font-medium whitespace-nowrap">
                      Data
                    </span>
                  </div>
                  <div className="w-[60px] text-center text-sm text-gray-700">
                    13
                  </div>
                  <div className="w-[60px] text-center text-sm text-gray-700">
                    1,394
                  </div>
                  <div className="w-[60px] text-center text-sm text-gray-700">
                    High
                  </div>
                </div>

                {/* Desktop: Action button */}
                <div className="hidden lg:flex justify-center w-[60px]">
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
