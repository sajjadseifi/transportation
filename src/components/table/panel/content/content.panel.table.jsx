//default
import React from "react";
import { FlexBox } from "../../../box";
import { HealthyLoading } from "../../../loading";
import ListTable from "../../list.table";
import DataMapperTable from "./data.mapper.table";

const ContentPanelTable = ({ managment, loading, columns = [], data = [] }) => {
  if (loading)
    return (
      <FlexBox className="py-5 my-5" alignCenter justCenter>
        <HealthyLoading />
      </FlexBox>
    );

  return (
    <section>
      <DataMapperTable {...{ managment, data, columns }}>
        {({ columns, data,index }) => (
          <div className="full-table">
            <ListTable key={index} {...{ columns, data }} />
          </div>
        )}
      </DataMapperTable>
    </section>
  );
};

export default ContentPanelTable;
