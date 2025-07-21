import React, { useState, useEffect } from 'react';
import roomsData, { Room } from '../data/roomsData';
import RoomCarousel from './RoomCarousel';
import Toolbar from './Toolbar';

const RoomVisualizer = () => {
  const [isRoomsMode, setIsRoomsMode] = useState(false);
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [rooms, setRooms] = useState(roomsData);
  const [isAnimating, setIsAnimating] = useState(false);

  const activeRoom = rooms[activeRoomIndex];

  const handleToggleRoomsMode = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsRoomsMode(!isRoomsMode);
    
    // Reset state
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const handleRoomSelect = (room: Room, index: number) => {
    if (index !== activeRoomIndex) {
      setActiveRoomIndex(index);
    }
  };

  const handleAddRoom = () => {
  };

  const handleShare = (room: Room) => {
  };

  const handleFavorite = (room: Room) => {
  };

  const handleDuplicate = (room: Room) => {
    const newRoom = {
      ...room,
      id: `${room.id}_copy_${Date.now()}`,
      name: `${room.name} (Copy)`,
    };
    
    const newRooms = [...rooms];
    const originalIndex = rooms.findIndex(r => r.id === room.id);
    newRooms.splice(originalIndex + 1, 0, newRoom);
    
    setRooms(newRooms);
  };

  const handleDelete = (room: Room) => {
    if (rooms.length === 1) {
      return;
    }

    const newRooms = rooms.filter(r => r.id !== room.id);
    setRooms(newRooms);
    
    if (activeRoomIndex >= newRooms.length) {
      setActiveRoomIndex(newRooms.length - 1);
    }
  };

  return (
    <div className={`room-visualizer ${isRoomsMode ? 'rooms-mode' : ''}`}>
      {/* Toolbar */}
      <Toolbar 
        isRoomsMode={isRoomsMode}
        onToggleRoomsMode={handleToggleRoomsMode}
        onChangeRoom={handleToggleRoomsMode}
        onShare={() => handleShare(activeRoom)}
      />

      {/* Main Content */}
      {isRoomsMode ? (
        <div 
          className={`absolute inset-0 ${isAnimating ? 'slide-up-enter' : ''}`}
          style={{ paddingTop: '80px' }}
        >
          <RoomCarousel
            rooms={rooms}
            activeRoomIndex={activeRoomIndex}
            onRoomSelect={handleRoomSelect}
            onAddRoom={handleAddRoom}
            onShare={handleShare}
            onFavorite={handleFavorite}
            onDuplicate={handleDuplicate}
            onDelete={handleDelete}
          />
        </div>
      ) : (
        <div 
          className={`absolute inset-0 ${isAnimating ? 'zoom-in-enter' : ''}`}
        >
          <div className="relative w-full h-full">
            <img 
              src={activeRoom.imageUrl}
              alt={activeRoom.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {isAnimating && (
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  );
};

export default RoomVisualizer;