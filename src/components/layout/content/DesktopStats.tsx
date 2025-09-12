import { BORDER_RADIUS, GRADIENTS } from "@/constants/styles";

interface StatItemProps {
  value: string | number;
  width: string;
  isTag?: boolean;
}

const StatItem = ({ value, width, isTag }: StatItemProps) => (
  <div className={`${width} ${isTag ? 'flex justify-center' : 'text-center'}`}>
    {isTag ? (
      <span className={`px-4 xl:px-6 py-1 text-xs ${BORDER_RADIUS.full} bg-gradient-to-r ${GRADIENTS.secondary} text-gray-700 font-medium whitespace-nowrap`}>
        {value}
      </span>
    ) : (
      <div className="text-sm text-gray-700">{value}</div>
    )}
  </div>
);

const STATS = [
  { value: 'Data', width: 'w-[90px]', isTag: true },
  { value: 13, width: 'w-[60px]' },
  { value: 1394, width: 'w-[60px]' },
  { value: 'High', width: 'w-[60px]' }
] as const;

export default function DesktopStats() {
  return (
    <div className="hidden lg:flex flex-1 items-center xl:justify-start justify-end gap-4 pr-16">
      {STATS.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
}
