export function PrimeButton({ isPrimary, children }) {

  return (
    <button
      className={`h-[42px] w-[90px] rounded-[100px] ${
        isPrimary ? "bg-[#2c303d] text-[white]" : "bg-[#19181c] text-[#bfbfbf]"
      } `}
    >
      {children}
    </button>
  );
}
