"use client";
// Muted, looping background video for the home page banner, with a pause button
// (needed for accessibility: moving content longer than 5 seconds must be pausable).
// Visitors who prefer reduced motion see the still photo instead.
import { useEffect, useRef, useState } from "react";

export default function HeroVideo({ src, poster, focus }: { src: string; poster: string; focus?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const v = ref.current;
    if (!v || mq.matches) return;
    v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  if (reduced) return null;

  return (
    <>
      <video
        ref={ref}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        style={{ objectPosition: focus ?? "center" }}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        className="absolute bottom-3 left-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 sm:left-auto sm:right-3 sm:bottom-8"
        aria-label={playing ? "Pause background video" : "Play background video"}
      >
        {playing ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" /><rect x="14" y="5" width="4" height="14" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
        )}
      </button>
    </>
  );
}
