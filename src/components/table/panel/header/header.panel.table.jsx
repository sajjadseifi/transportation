//default
import React from "react";
import { SearchBoxPanelTable, SizingBoxPanelTable } from ".";
import { FlexBox } from "../../../box";
const HeaderPanelTable = ({ selections, upateActionForm, title }) => {
  return (
    <header>
      <h3 className="title px-4">{title}</h3>
      <FlexBox alignCenter justifyContent="between" className="p-5 py-0 pt-5">
        <SearchBoxPanelTable upateActionForm={upateActionForm} />
        <SizingBoxPanelTable
          selections={selections}
          upateActionForm={upateActionForm}
        />
      </FlexBox>
    </header>
  );
};

export default HeaderPanelTable;
