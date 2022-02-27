interface NotificationProps {
  className: string;
}

export const Notification: React.FC<NotificationProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg
        width={34}
        height={36}
        viewBox="0 0 34 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity={0.5} stroke="#444" strokeWidth={2} strokeLinecap="square">
          <path d="M4 23V13h16v10" />
          <path clipRule="evenodd" d="M23 27v8H1v-8h7v3h8v-3h7z" />
          <path d="M9 18h6M9 22h6" />
        </g>
        <rect
          x={13}
          y={1.11621}
          width={20}
          height={20}
          rx={10}
          fill="#2995DA"
          stroke="#fff"
          strokeWidth={2}
        />
        <path
          d="M23.036 14.248c1.705 0 2.772-.89 2.772-2.145 0-1.133-1.001-1.705-1.705-1.782.748-.12 1.584-.693 1.584-1.683 0-1.22-1.056-1.969-2.64-1.969-1.221 0-2.112.484-2.684 1.155l.66.803c.528-.539 1.144-.814 1.903-.814.814 0 1.485.352 1.485 1.023 0 .671-.649.968-1.518.968-.286 0-.715 0-.836-.01v1.165c.11-.01.528-.022.836-.022 1.056 0 1.628.32 1.628 1.045 0 .671-.561 1.122-1.529 1.122-.781 0-1.551-.34-2.024-.89l-.704.846c.506.66 1.474 1.188 2.772 1.188z"
          fill="#fff"
        />
      </svg>
    </div>
  );
};
