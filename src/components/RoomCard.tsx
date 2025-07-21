import React from 'react';
import { Heart, Copy, ShareNetwork, Trash } from 'phosphor-react';
import { Room } from '../data/roomsData';
import { RoomButton } from './ui/room-button';

interface RoomCardProps {
  room: Room;
  isActive: boolean;
  isVisible: boolean;
  onClick: (room: Room) => void;
  onShare: (room: Room) => void;
  onFavorite: (room: Room) => void;
  onDuplicate: (room: Room) => void;
  onDelete: (room: Room) => void;
  style?: React.CSSProperties;
}

const RoomCard: React.FC<RoomCardProps> = ({ 
  room, 
  isActive, 
  isVisible, 
  onClick, 
  onShare, 
  onFavorite, 
  onDuplicate,
  onDelete,
  style = {} 
}) => {
  const handleCardClick = (e: React.MouseEvent) => {
    // Only trigger selection if clicking on the card itself, not the action buttons
    if ((e.target as HTMLElement).closest('.action-button')) return;
    onClick(room);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    onShare(room);
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFavorite(room);
  };

  const handleDuplicate = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDuplicate(room);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(room);
  };

  return (
    <div 
      className={`relative flex-shrink-0 w-[85vw] max-w-4xl cursor-pointer transform transition-all duration-500 ${
        isActive ? 'scale-100' : 'scale-95 opacity-70'
      } ${isVisible ? 'translate-x-0' : 'translate-x-8'}`}
      onClick={handleCardClick}
      style={style}
    >
      {/* Room Image */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <img 
          src={room.imageUrl} 
          alt={room.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Room Info and Actions Below Image */}
      <div className="flex justify-between items-start mt-6 px-2">
        {/* Left Side */}
        <div className="text-white">
          <h3 className="font-semibold text-xl mb-2 uppercase tracking-wide">{room.name}</h3>
          <div className="text-sm text-white/70 space-y-1">
            <p>Floor - {room.floor}</p>
            <p>Wall - {room.wall}</p>
          </div>
        </div>
        
        {/* Right Side */}
        <div className="flex gap-3">
          <RoomButton
            variant="room"
            size="sm"
            onClick={handleShare}
            className="gap-1.5 px-4"
          >
            <ShareNetwork size={16} />
            SHARE
          </RoomButton>
          
          <RoomButton
            variant="room"
            size="sm"
            onClick={handleFavorite}
            className="gap-1.5 px-4"
          >
            <Heart size={16} />
            FAVORITE
          </RoomButton>
          
          <RoomButton
            variant="room"
            size="sm"
            onClick={handleDuplicate}
            className="gap-1.5 px-4"
          >
            <Copy size={16} />
            DUPLICATE
          </RoomButton>

          <RoomButton
            variant="room"
            size="sm"
            onClick={handleDelete}
            className="gap-1.5 px-4 bg-red-500/25 border-red-400/50 hover:bg-red-500/40 text-white"
          >
            <Trash size={16} />
            DELETE
          </RoomButton>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;