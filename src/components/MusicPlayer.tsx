"use client";

import { useEffect, useRef, useState } from "react";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  return (
    <div className="flex items-center gap-2">
      <audio ref={audioRef} src="/audio/ambient-loop.wav" loop preload="none" />
      <button
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Musik pausieren" : "Musik abspielen"}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink transition hover:border-tan"
      >
        {playing ? (
          <span className="flex items-end gap-[2px]" aria-hidden>
            <span className="eq-bar h-2 w-[3px] bg-tan" />
            <span className="eq-bar h-3 w-[3px] bg-tan" style={{ animationDelay: "120ms" }} />
            <span className="eq-bar h-1.5 w-[3px] bg-tan" style={{ animationDelay: "260ms" }} />
          </span>
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7L8 5Z" />
          </svg>
        )}
      </button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.05}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        aria-label="Lautstärke"
        className="hidden w-16 accent-tan sm:block"
      />
      <style jsx>{`
        .eq-bar {
          animation: eq 0.9s ease-in-out infinite;
          transform-origin: bottom;
        }
        @keyframes eq {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
