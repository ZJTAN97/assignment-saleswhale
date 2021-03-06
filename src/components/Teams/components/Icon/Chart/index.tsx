interface ChartProps {
  className: string;
}

export const Chart: React.FC<ChartProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg
        width={30}
        height={34}
        viewBox="0 0 30 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.688 17H21.25V8.5c0-.638-.425-1.063-1.063-1.063h-2.125V5.313c0-.637-.425-1.062-1.062-1.062h-1.063V1.062C15.938.425 15.512 0 14.876 0s-1.063.425-1.063 1.063V4.25H12.75c-.637 0-1.063.425-1.063 1.063v2.125H9.563c-.638 0-1.063.425-1.063 1.062v11.688H1.062C.425 20.188 0 20.613 0 21.25v11.688C0 33.575.425 34 1.063 34h27.625c.637 0 1.062-.425 1.062-1.063V18.063c0-.638-.425-1.063-1.063-1.063zM6.375 29.75H3.187v-2.125h3.188v2.125zm0-3.188H3.187v-2.125h3.188v2.125zm4.25 3.188H7.437v-2.125h3.188v2.125zm0-3.188H7.437v-2.125h3.188v2.125zm5.313-8.5v13.813h-2.126V21.25c0-.637-.425-1.063-1.062-1.063h-2.125V9.563h2.125c.637 0 1.063-.425 1.063-1.062V6.375h2.124V8.5c0 .637.426 1.063 1.063 1.063h2.125V17H17c-.637 0-1.063.425-1.063 1.063zm6.374 11.688h-3.187v-2.125h3.188v2.125zm0-3.188h-3.187v-2.125h3.188v2.125zm0-3.187h-3.187V21.25h3.188v2.125zm4.25 6.375h-3.187v-2.125h3.188v2.125zm0-3.188h-3.187v-2.125h3.188v2.125zm0-3.187h-3.187V21.25h3.188v2.125z"
          fill="#A4A6A8"
        />
      </svg>
    </div>
  );
};
