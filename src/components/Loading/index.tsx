import React from "react";
import "./styles.scss";

const Loading = () => {
  return (
    <div className="araya-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default React.memo(Loading, () => true);
