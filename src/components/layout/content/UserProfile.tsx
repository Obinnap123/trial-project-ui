'use client';

import { BORDER_RADIUS, GRADIENTS, TEXT_SIZES } from '@/constants/styles';
import { User } from '@/types/user';

type UserProfileProps = User;

interface StatItemProps {
  label: string;
  value: string | number;
  isTag?: boolean;
}

const StatItem = ({ label, value, isTag = false }: StatItemProps) => (
  <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
    <span className={`${TEXT_SIZES.base} text-gray-600`}>{label}</span>
    {isTag ? (
      <span className={`pt-1 px-3 pb-1 ${TEXT_SIZES.sm} ${BORDER_RADIUS.full} bg-gradient-to-r ${GRADIENTS.secondary} text-gray-700 font-medium`}>
        {value}
      </span>
    ) : (
      <span className={`${TEXT_SIZES.base} font-medium text-gray-900`}>{value}</span>
    )}
  </div>
);

const UserBio = ({ isSarah }: { isSarah?: boolean }) => {
  const bioLines = isSarah
    ? ['Digital artist & creator 🎨', 'Passionate about design and', 'bringing ideas to life ✨']
    : ['Adventurer by nature 🌄', 'lover 🎨 | Eager to collaborate and', 'inspire through creativity...'];

  return (
    <div className="flex flex-col">
      {bioLines.map((line, index) => (
        <span key={index} className={`${TEXT_SIZES.base} lg:${TEXT_SIZES.xs} text-gray-500`}>
          {line}
        </span>
      ))}
    </div>
  );
};

export default function UserProfile({ image, name, username, location, isSarah }: UserProfileProps) {
  return (
    <div className="flex items-start lg:items-center lg:space-x-3 lg:w-[420px]">
      <div className="lg:hidden ml-auto">
        <button className={`w-8 h-8 flex items-center justify-center ${BORDER_RADIUS.full} bg-gray-100 hover:bg-red-100 cursor-pointer`}>
          <img src="/trash.png" alt="Delete" className="w-4 h-4" />
        </button>
      </div>

      <img
        src={image}
        alt={name}
        className="w-[56px] lg:w-[60px] h-[56px] lg:h-[60px] rounded-lg object-cover"
      />

      <div className="flex-1 mt-0 ml-4 lg:ml-0 lg:mt-0">
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <div className="flex flex-col mb-2 lg:mb-0">
            <span className={`${TEXT_SIZES.md} lg:${TEXT_SIZES.sm} font-semibold text-gray-900`}>
              {name}
            </span>
            <span className={`${TEXT_SIZES.base} lg:${TEXT_SIZES.xs} text-gray-500`}>
              {username}
            </span>
            <span className={`${TEXT_SIZES.base} lg:${TEXT_SIZES.xs} text-gray-400`}>
              {location}
            </span>
          </div>
          <UserBio isSarah={isSarah} />
        </div>

        <div className="mt-3 lg:hidden grid grid-cols-2 gap-2">
          <StatItem label="Data" value={13} />
          <StatItem label="Data" value={1394} />
          <StatItem label="Data" value="High" />
          <StatItem label="Tag" value="Data" isTag />
        </div>
      </div>
    </div>
  );
}
