import { useState, useRef, useEffect, useCallback } from 'react';
// import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding-config';
import AudioControls from './AudioControls';

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export default function MusicPlayer({ isPlaying, setIsPlaying }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const playlist = weddingConfig.music.tracks;

  const handleNextTrack = useCallback(() => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
  }, [playlist.length]);

  useEffect(() => {
    const currentAudio = audioRef.current;
    
    const handleCanPlayThrough = () => {
      setIsLoaded(true);
    };

    if (currentAudio) {
      currentAudio.addEventListener('canplaythrough', handleCanPlayThrough);
      currentAudio.addEventListener('ended', handleNextTrack);

      return () => {
        currentAudio.removeEventListener('canplaythrough', handleCanPlayThrough);
        currentAudio.removeEventListener('ended', handleNextTrack);
      };
    }
  }, [handleNextTrack]);

  const handleTogglePlayback = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying, setIsPlaying]);

  useEffect(() => {
    const currentAudio = audioRef.current;
    if (currentAudio && isLoaded) {
      if (isPlaying) {
        // Create a promise chain to handle Safari's autoplay restrictions
        const playPromise = currentAudio.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Audio started playing
            })
            .catch((error) => {
              // Handle Safari's autoplay restrictions
              if (error.name === 'NotAllowedError') {
                // Wait for user interaction before attempting to play
                const handleFirstInteraction = () => {
                  currentAudio.play()
                    .then(() => {
                      window.removeEventListener('click', handleFirstInteraction);
                      window.removeEventListener('touchstart', handleFirstInteraction);
                    })
                    .catch(() => {
                      setIsPlaying(false);
                    });
                };
                
                window.addEventListener('click', handleFirstInteraction);
                window.addEventListener('touchstart', handleFirstInteraction);
              } else {
                setIsPlaying(false);
              }
            });
        }
      } else {
        currentAudio.pause();
      }
    }
  }, [isPlaying, isLoaded, setIsPlaying]);

  const currentTrack = playlist[currentTrackIndex];

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="auto"
      />
      <AudioControls 
        isPlaying={isPlaying}
        onToggle={handleTogglePlayback}
      />
    </>
  );
}
