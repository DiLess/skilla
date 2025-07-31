import React, { useState, useRef, useEffect } from "react";
import { PlayButton, PauseButton, DownloadIcon, CloseIcon } from "../UI/UI";
const Player = ({
  recordId,
  setIsPlayingId,
  isPlayingId,
  callId,
  audioFile,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [hoverTime, setHoverTime] = useState(null);
  const [hoverPosition, setHoverPosition] = useState(0);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setIsPlayingId(null);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioFile]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      setIsPlayingId(callId);
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    if (!audioRef.current) return;
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleMouseMove = (e) => {
    if (!progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const hoverTimeValue = pos * duration;

    setHoverTime(hoverTimeValue);
    setHoverPosition(pos * 100);
  };

  const handleMouseLeave = () => {
    setHoverTime(null);
  };

  const handleDownload = () => {
    if (audioFile) {
      const link = document.createElement("a");
      link.href = audioFile;
      link.download = `record-${recordId}.mp3`;
      link.click();
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  if (!audioFile) return <p>Загрузка записи</p>;

  return (
    <div className="audio-player" style={{ height: "48px" }}>
      <div className="time-display">{formatTime(duration - currentTime)}</div>
      <span
        onClick={togglePlay}
        style={{ cursor: "pointer", width: "24px", height: "24px" }}
      >
        {isPlaying ? <PauseButton /> : <PlayButton />}
      </span>

      <div
        className="progress-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={progressBarRef}
        style={{ display: "flex" }}
      >
        {hoverTime !== null && (
          <div className="time-tooltip" style={{ left: `${hoverPosition}%` }}>
            {formatTime(duration - hoverTime)}
          </div>
        )}
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleProgressChange}
          className="progress-bar"
          disabled={!audioFile}
          style={{
            background: `linear-gradient(to right, #1a73e8 ${(currentTime / duration) * 100}%, #e0e0e0 ${(currentTime / duration) * 100}%)`,
          }}
        />
      </div>

      <span
        onClick={handleDownload}
        style={{ cursor: "pointer", width: "24px", height: "24px" }}
      >
        <DownloadIcon />
      </span>

      <span
        style={{ cursor: "pointer", width: "24px", height: "24px" }}
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
            isPlayingId == callId && setIsPlayingId(null);
          }
        }}
      >
        <CloseIcon />
      </span>

      <audio ref={audioRef} src={audioFile} />
    </div>
  );
};

export default Player;
