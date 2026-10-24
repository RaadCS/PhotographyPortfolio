import { useState } from 'react';

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button 
      onClick={() => setIsLiked(!isLiked)}
      className={`mt-3 text-xs tracking-[2px] uppercase font-medium transition-colors ${
        isLiked ? 'text-accent' : 'text-muted hover:text-main'
      }`}
    >
      {isLiked ? '♥ Liked' : '♡ Like'}
    </button>
  );
}