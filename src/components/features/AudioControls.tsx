import { motion } from 'framer-motion';
import { activeTheme } from '@/config/theme-config';

interface AudioControlsProps {
  isPlaying: boolean;
  onToggle: () => void;
  currentTrack: string;
}

export default function AudioControls({ isPlaying, onToggle, currentTrack }: AudioControlsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 left-8 z-40"
    >
      <button
        onClick={onToggle}
        className="flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
        style={{ color: activeTheme.text }}
      >
        {isPlaying ? (
          <>
            <PauseIcon className="w-5 h-5" />
            <span className="text-sm">Pause Music</span>
          </>
        ) : (
          <>
            <PlayIcon className="w-5 h-5" />
            <span className="text-sm">Play Music</span>
          </>
        )}
      </button>
      
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-xs text-center text-white/80"
        >
          Now Playing: {currentTrack}
        </motion.div>
      )}
    </motion.div>
  );
}

interface IconProps {
  className?: string;
  fill?: string;
  viewBox?: string;
  stroke?: string;
}

function PlayIcon(props: IconProps) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function PauseIcon(props: IconProps) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
