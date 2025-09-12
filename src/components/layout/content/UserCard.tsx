'use client';

import { BORDER_RADIUS } from "@/constants/styles";
import { User } from "@/types/user";
import UserProfile from "./UserProfile";
import DesktopStats from "./DesktopStats";
import DeleteButton from "./DeleteButton";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className={`bg-white lg:${BORDER_RADIUS.card} p-4 lg:pt-[15px] lg:pb-[15px] lg:pr-[10px] lg:pl-[10px] border border-gray-200`}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <UserProfile {...user} />
        <DesktopStats />
        <DeleteButton onDelete={() => console.log('Delete user:', user.id)} />
      </div>
    </div>
  );
}
