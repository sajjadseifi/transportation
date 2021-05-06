import React from "react";
import { PanelListTable } from "../../components/table";
import { carDetale } from "../../common/list";
import { Icon } from "rsuite";
import momentJalali from "moment-jalaali";
const IcoCondition = ({ yes }) => {
  return (
    <span style={{ color: yes ? "lime" : "red" }}>
      <Icon icon={yes ? "check" : "close"} />
    </span>
  );
};
export const UsersListAdminScreen = () => {
  const builtOwnData = ({ data = [], errors, maxPages, page, loading }) => {
    const table = data.map((dt) => {
      return {
        rowId: dt.id,
        name: dt.name,
        brand: dt.brand,
        number_of_wheels: dt.number_of_wheels,
        tonnage: <IcoCondition yes={dt.tonnage} />,
        tanker: <IcoCondition yes={dt.tanker} />,
        refrigerator: <IcoCondition yes={dt.refrigerator} />,
        transit: <IcoCondition yes={dt.transit} />,
        // create_at: momentJalali(new Date(dt.create_at)).format("YYYY/MM/DD"),
        // updated_at: momentJalali(new Date(dt.updated_at)).format("YYYY/MM/DD"),
      };
    });
    
    return table;
  };
  const managmenHandler = (name, row) => {
    if ((name = "delete")) {
    }
  };
  const props = {
    builtOwnData,
    managmenHandler,
    ...carDetale,
  };

  return <PanelListTable {...props} />;
};

export default UsersListAdminScreen;
