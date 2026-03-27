import React from 'react';

const SocialSquare = ({ children }: { children: React.ReactNode }) => (
  <div className="w-[22px] h-[22px] rounded-[4px] border border-black/50 flex items-center justify-center text-black bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-colors shadow-[0_2px_5px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.6)]">
    {children}
  </div>
);

export default SocialSquare;
