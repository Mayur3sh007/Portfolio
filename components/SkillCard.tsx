import React from 'react';
import { GlareCard } from './ui/GlareCard';
import { Icons } from './Icons'; // Assuming Icons are exported from a file named Icons.ts or Icons.js

interface SkillCardProps {
  title: string; // Title for the skill
  iconName: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, iconName }) => {
  const IconComponent = Icons[iconName.toLowerCase() as keyof typeof Icons];

  return (
    <GlareCard className="flex flex-col items-center justify-center p-4">
      {IconComponent && <IconComponent className="w-24 h-24 text-purple-500" />} {/* Adjust size and color as needed */}
      <p className="text-white font-bold text-3xl mt-10">{title}</p>
    </GlareCard>
  );
}

export default SkillCard;
