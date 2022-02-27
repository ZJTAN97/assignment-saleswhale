interface ContactsProps {
  className: string;
}

export const Contacts: React.FC<ContactsProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg
        width={32}
        height={28}
        viewBox="0 0 32 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity={0.3}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 6c0 3.237-2.621 7-6 7S4 9.237 4 6c0-3.309 2.691-6 6-6s6 2.691 6 6zm4-2h11a1 1 0 110 2H20a1 1 0 110-2zm0 6h11a1 1 0 110 2H20a1 1 0 110-2zm11 6h-6a1 1 0 100 2h6a1 1 0 100-2zm-6 6h6a1 1 0 110 2h-6a1 1 0 110-2zm-8.591-6.027c-4.4-1.302-8.551-1.277-12.826-.012A4.968 4.968 0 000 20.758V27a1 1 0 001 1h18a1 1 0 001-1v-6.228a4.971 4.971 0 00-3.591-4.799z"
          fill="#fff"
        />
      </svg>
    </div>
  );
};
