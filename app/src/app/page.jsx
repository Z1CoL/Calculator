import Image from "next/image";
import { PrimeButton } from "@/components/props";

const buttons = [
  { value: "(", isPrimary: false },
  { value: ")", isPrimary: false },
  { value: "%", isPrimary: false },
  { value: "AC", isPrimary: true },
  { value: "7", isPrimary: false },
  { value: "8", isPrimary: false },
  { value: "9", isPrimary: false },
  { value: "÷", isPrimary: true },
  { value: "4", isPrimary: false },
  { value: "5", isPrimary: false },
  { value: "6", isPrimary: false },
  { value: "•", isPrimary: true },
  { value: "1", isPrimary: false },
  { value: "2", isPrimary: false },
  { value: "3", isPrimary: false },
  { value: "-", isPrimary: true },
  { value: "0", isPrimary: false },
  { value: ".", isPrimary: false },
  { value: "=", isPrimary: true },
  { value: "+", isPrimary: true },
];

const Home = () => {
  return (
    <div>
      <input type="text" className="border px-2 py-1 mb-4 w-[420px]" />
      <div className="flex flex-wrap w-[420px] gap-4">
        {buttons.map((btn, index) => (
          <PrimeButton key={btn.value + index} isPrimary={btn.isPrimary}>
            {btn.value}
          </PrimeButton>
        ))}
      </div>
    </div>
  );
};

export default Home;
