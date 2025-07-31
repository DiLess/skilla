import React, { useState, useMemo, useEffect } from "react";

export const IncomingIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5217 7.17704L17.3447 6L7.66957 15.6751V10.1739H6V18.5217H14.3478V16.8522H8.84661L18.5217 7.17704Z"
        fill="#002CFB"
      />
    </svg>
  );
};

export const OutgoingIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.00023 17.3447L7.17728 18.5217L16.8524 8.8466V14.3478H18.522V5.99999L10.1741 5.99999V7.66955L15.6754 7.66955L6.00023 17.3447Z"
        fill="#28A879"
      />
    </svg>
  );
};

export const MissedIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5217 7.17704L17.3447 6L7.66957 15.6751V10.1739H6V18.5217H14.3478V16.8522H8.84661L18.5217 7.17704Z"
        fill="#EA1A4F"
      />
    </svg>
  );
};

export const DontCallIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.00023 17.3447L7.17728 18.5217L16.8524 8.8466V14.3478H18.522V5.99999L10.1741 5.99999V7.66955L15.6754 7.66955L6.00023 17.3447Z"
        fill="#EA1A4F"
      />
    </svg>
  );
};

export const PlayButton = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" fill="white" />
      <path
        d="M9.28742 7.06938C9.3761 7.02316 9.47535 7 9.57475 7C9.67389 7 9.77311 7.02316 9.86218 7.06938L16.7125 11.5519C16.8901 11.6442 17 11.8152 17 12.0001C17 12.1849 16.8904 12.3559 16.7125 12.4481L9.86218 16.9308C9.68439 17.0231 9.46523 17.0231 9.28757 16.9308C9.10976 16.8382 9 16.6672 9 16.4825V7.51755C9 7.33278 9.10958 7.16182 9.28742 7.06938Z"
        fill="#002CFB"
      />
    </svg>
  );
};

export const PauseButton = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" fill="white" />
      <path
        d="M8 16H10.6667V8H8V16ZM13.3333 8V16H16V8H13.3333Z"
        fill="#002CFB"
      />
    </svg>
  );
};

export const DownloadIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <path
        d="M6 20H19V18.1176H6V20ZM19 9.64706H15.2857V4H9.71429V9.64706H6L12.5 16.2353L19 9.64706Z"
        fill={isHovered ? "rgba(0, 44, 251, 1)" : "#ADBFDF"}
      />
    </svg>
  );
};

export const CloseIcon = ({ width, height }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <g clipPath="url(#clip0_1_258)">
        <path
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          fill={isHovered ? "rgba(0, 44, 251, 1)" : "#ADBFDF"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_258">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowUpIcon = ({ width, height }) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_866)">
        <path
          d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z"
          fill="#ADBFDF"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_866">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowDownIcon = ({ width, height }) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_863)">
        <path
          opacity="0.8"
          d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z"
          fill="#ADBFDF"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_863">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowRight = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <svg
      width="17"
      height="24"
      viewBox="0 0 17 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <g clipPath="url(#clip0_1_831)">
        <path
          d="M9.58984 15.825L13.4065 12L9.58984 8.175L10.7648 7L15.7648 12L10.7648 17L9.58984 15.825Z"
          fill={isHovered ? "rgba(0, 44, 251, 1)" : "#ADBFDF"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_831">
          <rect width="17" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowLeft = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <svg
      width="16"
      height="24"
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <g clipPath="url(#clip0_1_825)">
        <path
          d="M6.175 15.825L2.35833 12L6.175 8.175L5 7L0 12L5 17L6.175 15.825Z"
          fill={isHovered ? "rgba(0, 44, 251, 1)" : "#ADBFDF"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_825">
          <rect width="16" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CalendarIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <path
        d="M14.4 1.60012H13.6V0.00012207H12V1.60012H4V0.00012207H2.4V1.60012H1.6C0.72 1.60012 0 2.32012 0 3.20012V16.0001C0 16.8801 0.72 17.6001 1.6 17.6001H14.4C15.28 17.6001 16 16.8801 16 16.0001V3.20012C16 2.32012 15.28 1.60012 14.4 1.60012ZM14.4 16.0001H1.6V5.60012H14.4V16.0001Z"
        fill={isHovered ? "rgba(0, 44, 251, 1)" : "#ADBFDF"}
      />
    </svg>
  );
};

export const RatingSpan = ({ type, text }) => {
  const styleConfig = {
    default: {
      background: "rgba(255, 255, 255, 1)",
      borderColor: "rgba(0, 0, 0, 1)",
      text: "Текст не введен",
      color: "rgba(18, 41, 69, 1)",
    },
    bad: {
      background: "rgba(254, 233, 239, 1)",
      borderColor: "rgba(234, 26, 79, 1)",
      text: "Плохо",
      color: "rgba(234, 26, 79, 1)",
    },
    good: {
      background: "rgba(216, 228, 251, 1)",
      borderColor: "rgba(173, 191, 223, 1)",
      text: "Хорошо",
      color: "rgba(18, 41, 69, 1)",
    },
    perfect: {
      background: "rgba(219, 248, 239, 1)",
      borderColor: "rgba(40, 168, 121, 1)",
      color: "rgba(0, 167, 117, 1)",
      text: "Отлично",
    },
  };

  const currentStyle = styleConfig[type] || styleConfig.default;

  const spanStyle = {
    padding: "6px 8px",
    background: currentStyle.background,
    border: `1px solid ${currentStyle.borderColor}`,
    borderRadius: "4px",
    fontSize: "14px",
    color: currentStyle.color,
  };

  return <span style={spanStyle}>{text || currentStyle.text}</span>;
};
