import { TEXT_SIZES } from "@/constants/styles";
import TableHeader from "./content/TableHeader";
import UserCard from "./content/UserCard";
import { User } from "@/types/user";

const USERS: User[] = [
  { id: 1, image: '/woman-with-wig.png', name: 'Aisha Thompson', username: '@aisha_t', location: 'nairobi,kenya', isSarah: true },
  { id: 2, image: '/man-with-laptop.png', name: 'Lucas Johnson', username: '@kemi', location: 'Ibadan, Oyo State' },
  { id: 3, image: '/man-in-yellow-bandana.png', name: 'Lucas Johnson', username: '@kemi', location: 'Ibadan, Oyo State' },
  { id: 4, image: '/man-in-pink.png', name: 'Lucas Johnson', username: '@kemi', location: 'Ibadan, Oyo State' },
  { id: 5, image: '/woman-with-wig.png', name: 'Aisha Thompson', username: '@aisha_t', location: 'nairobi,kenya' }
];

export default function MainContent() {
  return (
    <div className="px-4 lg:px-6 pt-4 lg:pt-[20px] h-full overflow-y-auto hide-scrollbar">
      <h2 className={`${TEXT_SIZES.xl} lg:${TEXT_SIZES['2xl']} font-semibold text-black mb-2 lg:mb-1`}>
        Manage all members
      </h2>

      <div className="space-y-3 lg:space-y-2">
        <TableHeader />
        {USERS.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
