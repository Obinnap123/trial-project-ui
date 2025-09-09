import Image from 'next/image';

export default function SideBar() {
  const navigationItems = [
    { name: 'Dashboard', icon: '/Category.svg' },
    { name: 'Analytics', icon: '/internet-speed-wifi 1.svg' },
    { name: 'Inbox', icon: '/Message.svg' },
    { name: 'Activity', icon: '/Notification Bing.svg' },
    { name: 'Edit Profile', icon: '/Edit 2.svg' },
    { name: 'Settings', icon: '/Setting 2.svg' },
  ];

  return (
    <aside className="w-[232px] h-full border border-gray-200 rounded-t-[30px] bg-white overflow-y-auto">
      <nav className="py-[10px] px-5">
        {navigationItems.map((item, idx) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center gap-3 py-3 text-gray-700 hover:bg-gray-50 group ${idx !== navigationItems.length - 1 ? 'border-b border-gray-200' : ''}`}
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.name}
                width={16}
                height={16}
              />
            </div>
            <span className="font-medium text-[13px]">{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
