import { useState, MouseEvent } from "react";

const OPTIONS = [
  { text: "all", min: 0, max: 0 },
  { text: "< 4", min: 0, max: 240 },
  { text: "4-20", min: 240, max: 1_200 },
  { text: "> 20", min: 1_200, max: 0 },
];

type FilterTabsProps = {
  handleFilter: (min: number, max: number) => void;
};

export default function FilterTabs({ handleFilter }: FilterTabsProps) {
  const [active, setActive] = useState(0);

  const onFilterClick = (e: MouseEvent, index: number) => {
    e.preventDefault();
    setActive(index);
    handleFilter(OPTIONS[index].min, OPTIONS[index].max);
  };

  return (
    <div className="self-stretch flex-col justify-start items-start gap-1 flex">
      <div className="text-black text-base font-bold lowercase">FILTER BY</div>
      <div className="self-stretch p-1 bg-gray-50 rounded-2xl justify-between items-start inline-flex gap-1">
        {OPTIONS.map((range, index) => {
          return (
            <button
              key={index}
              onClick={(e) => onFilterClick(e, index)}
              className={`grow shrink basis-0 h-11 p-3 rounded-xl justify-center items-center flex ${
                active === index
                  ? "bg-[#7222C2] text-white"
                  : "hover:bg-gray-100 text-gray-300"
              }`}
            >
              <div className="text-sm font-bold  lowercase">{range.text}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
