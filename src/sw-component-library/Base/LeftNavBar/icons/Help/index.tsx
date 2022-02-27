interface HelpProps {
  className: string;
}

export const Help: React.FC<HelpProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg
        width={26}
        height={26}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity={0.5}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13zm0-4.875a1.625 1.625 0 100-3.25 1.625 1.625 0 000 3.25zm0-13c-.65 0-1.137.325-1.463.813l-.812 1.462-2.762-1.625.812-1.463C9.588 5.85 11.213 4.876 13 4.876c2.762 0 4.875 2.112 4.875 4.875 0 2.275-1.462 3.25-2.438 3.9-.812.487-.812.65-.812.975v1.625h-3.25v-1.625c0-2.113 1.3-3.088 2.275-3.738.813-.487.975-.65.975-1.137 0-.975-.65-1.625-1.625-1.625z"
          fill="#fff"
        />
      </svg>
    </div>
  );
};
