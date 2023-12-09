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
    <div className="w-full flex-col bg-white rounded-2xl large-box-shadow gap-2 p-4">
      <div className="text-black text-base lg:text-lg 2xl:text-xl font-bold lowercase">
        FILTER BY
      </div>
      <div className="w-full inline-flex justify-between bg-gray-50 rounded-2xl gap-1 p-1">
        {OPTIONS.map((range, index) => {
          return (
            <button
              key={index}
              onClick={(e) => onFilterClick(e, index)}
              className={`flex justify-center items-center grow shrink basis-0 rounded-xl p-3 duration-150 ${
                active === index
                  ? "bg-primary-base text-white"
                  : "hover:bg-gray-100 text-gray-300"
              }`}
            >
              <div className="text-sm lg:text-base 2xl:text-lg font-bold lowercase">
                {range.text}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
