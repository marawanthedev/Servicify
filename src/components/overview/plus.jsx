import React from "react";

const PlusIcon = () => {
  return (
    <svg
      style={{ marginLeft: "4rem", marginBottom: "20px" }}
      width="35"
      height="35"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M12 5.75V18.25"
      ></path>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M18.25 12L5.75 12"
      ></path>
    </svg>
  );
};

export default PlusIcon;
