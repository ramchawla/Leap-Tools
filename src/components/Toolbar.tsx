import React from 'react';
import { SignOut, ArrowsOut, SquaresFour, Share, Check } from 'phosphor-react';

interface ToolbarProps {
  isRoomsMode: boolean;
  onToggleRoomsMode: () => void;
  onChangeRoom: () => void;
  onShare: () => void;
  className?: string;
}

const Toolbar: React.FC<ToolbarProps> = ({ // added additional props but didn't have time to implement them
  isRoomsMode, 
  onToggleRoomsMode, 
  onChangeRoom, 
  onShare,
  className = "" 
}) => {
  return (
    <div className={`toolbar ${className}`}>
      {isRoomsMode ? (
        <button 
          className="toolbar-button flex items-center gap-2"
          onClick={onToggleRoomsMode}
        >
          <Check size={16} weight="regular" />
          DONE
        </button>
      ) : (
        <>
          <button 
            className="toolbar-button flex items-center gap-2 opacity-50 cursor-not-allowed"
            onClick={() => {}}
          >
            <SignOut size={16} weight="regular" />
            Exit
          </button>
          
          <button 
            className="toolbar-button flex items-center gap-2 opacity-50 cursor-not-allowed"
            onClick={() => {}}
          >
            <ArrowsOut size={16} weight="regular" />
            Change Room
          </button>
          
          <button 
            className="toolbar-button active flex items-center gap-2"
            onClick={onToggleRoomsMode}
          >
            <SquaresFour size={16} weight="regular" />
            Rooms
          </button>
          
          <button 
            className="toolbar-button flex items-center gap-2 opacity-50 cursor-not-allowed"
            onClick={() => {}}
          >
            <Share size={16} weight="regular" />
            Share
          </button>
        </>
      )}
    </div>
  );
};

export default Toolbar;