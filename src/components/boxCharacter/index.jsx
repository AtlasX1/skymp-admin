import React from "react";

const BoxCharacter = (data) => {
  return (
    <div
      style={{
        border: "solid 1px black",
        display: "flex",
        flexDirection: "column",
        margin: "5px",
        padding: "10px",
      }}
    >
      <div>
        <span>angle</span>
        x:{data.angle[0]} y:{data.angle[1]} z:{data.angle[2]}
      </div>
      <div>
        <span>baseContainerAdded</span>: {`${data.baseContainerAdded}`}{" "}
      </div>
      <div>
        <span>dynamicFields</span>: {data.dynamicFields}{" "}
      </div>
      <div>
        <span>inventory</span> :{" "}
        {data?.inv?.entries?.map((el) => JSON.stringify(el))}{" "}
      </div>
      <div>
        <span>formDesc</span>: {data.formDesc}
      </div>
      <div>
        <span>isDisabled</span>: {`${data.isDisabled}`}{" "}
      </div>
      <div>
        <span>isHarvested</span>: {`${data.isHarvested}`}{" "}
      </div>
      <div>
        <span>isOpen</span>: {`${data.isOpen}`}{" "}
      </div>
      <div>
        <span>isRaceMenuOpen</span>: {`${data.isRaceMenuOpen}`}{" "}
      </div>
      <div>
        <span>lookDump</span>: {`${data.lookDump}`}{" "}
      </div>
      <div>
        <span>nextRelootDatetime</span>: {`${data.nextRelootDatetime}`}{" "}
      </div>
      <div>
        <span>position</span> x:{data.position[0]} y:{data.position[1]} z:
        {data.position[2]}
      </div>
      <div>
        <span>profileId</span>: {data.profileId}
      </div>
      <div>
        <span>recType</span>: {data.recType}
      </div>
      <div>
        <span>worldOrCell</span>: {data.worldOrCell}
      </div>
    </div>
  );
};

export default BoxCharacter;
