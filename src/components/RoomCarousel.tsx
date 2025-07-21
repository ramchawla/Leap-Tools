import React, { useRef, useEffect, useState } from 'react';
import { Plus } from 'phosphor-react';
import RoomCard from './RoomCard';
import { Room } from '../data/roomsData';

interface RoomCarouselProps {
  rooms: Room[];
  activeRoomIndex: number;
  onRoomSelect: (room: Room, index: number) => void;
  onAddRoom: () => void;
  onShare: (room: Room) => void;
  onFavorite: (room: Room) => void;
  onDuplicate: (room: Room) => void;
  onDelete: (room: Room) => void;
}

const RoomCarousel: React.FC<RoomCarouselProps> = ({ 
  rooms, 
  activeRoomIndex, 
  onRoomSelect, 
  onAddRoom,
  onShare,
  onFavorite,
  onDuplicate,
  onDelete
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Center the active room when the component mounts or activeRoomIndex changes
  useEffect(() => {
    if (carouselRef.current && activeRoomIndex >= 0) {
      const cardWidth = Math.min(1000, window.innerWidth * 0.95);
      const containerWidth = carouselRef.current.offsetWidth;
      const targetScrollLeft = (activeRoomIndex * (cardWidth + 16)) - (containerWidth / 2) + (cardWidth / 2);
      
      carouselRef.current.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: 'smooth'
      });
    }
  }, [activeRoomIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current!.offsetLeft);
    setScrollLeft(carouselRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };



  const handleRoomClick = (room: Room, index: number) => {
    if (!isDragging) {
      onRoomSelect(room, index);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div 
        ref={carouselRef}
        className="flex gap-4 h-full px-4 py-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ 
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          paddingLeft: 'calc(50vw - min(500px, 47.5vw))', // Center the first card
          paddingRight: 'calc(50vw - 32px)' // Ensure we can scroll to see the plus button fully
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {rooms.map((room, index) => (
          <div 
            key={room.id}
            className="flex-shrink-0"
            style={{ 
              scrollSnapAlign: 'center',
              width: 'min(1000px, 95vw)'
            }}
          >
            <RoomCard
              room={room}
              isActive={index === activeRoomIndex}
              isVisible={true}
              onClick={() => handleRoomClick(room, index)}
                  onShare={onShare}
                  onFavorite={onFavorite}
                  onDuplicate={onDuplicate}
                  onDelete={onDelete}
            />
          </div>
        ))}
        
        {/* Add Room button */}
        <div className="flex-shrink-0 w-32 flex items-center">
          <div 
            className="w-16 h-16 border-2 border-dashed border-white/30 rounded-full flex items-center justify-center cursor-pointer hover:border-white/50 transition-colors group"
            onClick={onAddRoom}
          >
            <Plus size={24} weight="regular" className="text-white group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCarousel;