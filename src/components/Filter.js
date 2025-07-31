import React, { useState, useRef, useEffect } from "react";
import { ArrowUpIcon, ArrowDownIcon, CloseIcon } from "../UI/UI";

const Filter = ({ callType, setCallType, setCount, setSortBy }) => {
  const options = [
    { id: 1, name: "Все типы", value: "all" },
    { id: 2, name: "Входящие", value: "1" },
    { id: 3, name: "Исходящие", value: "0" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState();
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="filter-container"
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <div
        ref={selectRef}
        style={{
          position: "relative",
          borderRadius: "12px",
        }}
      >
        <div style={{}} onClick={() => setIsOpen(!isOpen)}>
          <span
            style={{
              color: callType ? "rgba(31, 70, 251, 1)" : "rgb(94, 119, 147)",
            }}
          >
            {selected?.name || "Все типы"}
            {isOpen ? (
              <ArrowDownIcon width={"18px"} height={"21px"} />
            ) : (
              <ArrowUpIcon width={"18px"} height={"21px"} />
            )}
          </span>
        </div>

        {isOpen && (
          <div
            className="select-options"
            style={{
              position: "absolute",
              top: "100%",
              width: "133px",
              background: "rgba(255, 255, 255, 1)",
              borderRadius: "8px",
              boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.08)",
              zIndex: 100,
            }}
          >
            {options.map((option) => (
              <div
                key={option.id}
                className="option"
                onClick={() => {
                  setSelected(option);
                  setCallType(option.value);
                  setIsOpen(false);
                }}
                style={{
                  color:
                    selected?.value === option.value
                      ? "rgba(31, 70, 251, 1)"
                      : "rgba(43, 45, 51, 1)",
                }}
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <span
        onClick={() => {
          setCallType(null);
          setCount(0);
          setSortBy(null);
        }}
      >
        Сбросить фильтр <CloseIcon width={"15px"} height={"15px"} />
      </span>
    </div>
  );
};

export default Filter;
