import { useState } from 'react';
import { portfolioData } from '../data';
import LikeButton from './LikeButton';

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const filteredPhotos = filter === 'All' 
    ? portfolioData 
    : portfolioData.filter(photo => photo.category === filter);

  return (
    <section id="gallery" className="max-w-[1100px] mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="font-heading text-4xl font-normal mb-6 text-main">Selected Work</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['All', 'Landscape', 'Architecture'].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-xs font-medium tracking-widest uppercase border transition-all ${
                filter === category 
                  ? 'bg-accent text-white border-accent' 
                  : 'bg-transparent text-main border-borderWarm hover:border-main'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="flex flex-col">
            <img 
              src={photo.image} 
              alt={photo.alt} 
              className="w-full h-[380px] object-cover mb-3"
            />
            <p className="text-xs tracking-[1.5px] uppercase text-muted mb-1">
              {photo.caption}
            </p>
            <LikeButton />
          </div>
        ))}
      </div>
    </section>
  );
}