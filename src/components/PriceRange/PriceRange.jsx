import { useCallback, useRef, useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import "./PriceRange.css";

const cssValues = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  gap: "2px",
  paddingTop: "10px",
};

const PriceRange = ({
  min,
  max,
  trackingColor = "#000000",
  onChange,
  rangeColor = "#ff0303",
  valueStyle = cssValues,
  width = "280px",
  currencyText = "",
  initialValues = { min: 100, max: 5000 }, // Accept initial values as a prop
}) => {
  const [minValue, setMinValue] = useState(initialValues.min);
  const [maxValue, setMaxValue] = useState(initialValues.max);
  const [isOpen, setIsOpen] = useState(true);

  const minValRef = useRef(minValue);
  const maxValRef = useRef(maxValue);
  const range = useRef(null);

  const getPercentage = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 1000),
    [min, max]
  );

  // Update slider range visuals
  useEffect(() => {
    const minPercentage = getPercentage(minValue);
    const maxPercentage = getPercentage(maxValue);

    if (range.current) {
      range.current.style.left = `${minPercentage}%`;
      range.current.style.width = `${maxPercentage - minPercentage}%`;
    }
  }, [minValue, maxValue, getPercentage]);

  // Call onChange only if minValue or maxValue changes from the previous state
  useEffect(() => {
    if (minValue !== minValRef.current || maxValue !== maxValRef.current) {
      minValRef.current = minValue;
      maxValRef.current = maxValue;
      onChange?.({ min: minValue, max: maxValue });
    }
  }, [minValue, maxValue, onChange]);

  // Update local state if `min` or `max` props change
  useEffect(() => {
    setMinValue(initialValues.min);
    setMaxValue(initialValues.max);
  }, [initialValues]);

  const toggleSlider = () => {
    setIsOpen((prevState) => !prevState);
  };

  const formatDistance = (distance) => {
    return distance >= 1000 ? `${distance / 1000}km` : `${distance}m`;
  };

  return (
    <div className="w-full flex items-center flex-col space-y-4">
      <div
        className="w-full flex justify-between px-6 font-poppin items-center text-xl rounded-lg p-2 focus:outline-none"
        onClick={toggleSlider}
      >
        <h1>Distance From Hotel</h1>
        {isOpen ? (
          <FaAngleUp className="text-gray-500 cursor-pointer" />
        ) : (
          <FaAngleDown className="text-gray-500 cursor-pointer" />
        )}
      </div>

      <div
        className={`price_range_slider transition-all ease-out overflow-hidden ${
          isOpen ? "max-h-[500px] block" : "max-h-0 hidden"
        }`}
        style={{ width }}
      >
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={(e) => {
            const value = Math.min(Number(e.target.value), maxValue - 1);
            setMinValue(value);
          }}
          className="thumb thumb-left"
          style={{
            width,
            zIndex:
              minValue > max - 100 || minValue === maxValue ? 5 : undefined,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={(e) => {
            const value = Math.max(Number(e.target.value), minValue + 1);
            setMaxValue(value);
          }}
          className="thumb thumb-right"
          style={{
            width,
            zIndex:
              minValue > max - 100 || minValue === maxValue ? 4 : undefined,
          }}
        />

        <div className="slider">
          <div
            className="track-slider"
            style={{ backgroundColor: trackingColor }}
          />
          <div
            className="range-slider"
            style={{ backgroundColor: rangeColor }}
          />
        </div>

        <div className="w-full mt-6 flex items-center justify-between gap-x-5">
          <p className="text-sm text-[#37454D] font-semibold">{minValue}m</p>
          <div className="flex-1 border-dashed border-neutral-500 mt-1"></div>
          <p className="text-sm text-[#37454D] font-semibold">
            {formatDistance(maxValue)}
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto h-[1px] bg-gray-200"></div>
    </div>
  );
};

export default PriceRange;
