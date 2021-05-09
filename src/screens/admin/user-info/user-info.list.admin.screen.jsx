import React from "react";
import PanelListTable from "../../../components/table/panel.list.table";
import { userInfoDetale } from "../../../common/list";
import momentJalali from "moment-jalaali";
export const UserInfoListAdminScreen = () => {
  const builtOwnData = ({ data = [], errors, maxPages, page, loading }) => {
    const table = data.map((dt) => {
      return {
        rowId: dt.id,
        pic: (
          <div>
            <img src={dt.pic} height={50} width={50} />
          </div>
        ),
        role: dt.role,
        user: dt.user,
        sex: dt.sex,
        phone_number: dt.phone_number,
        birth_date: momentJalali(new Date(dt.birth_date)).format("YYYY/MM/DD"),
        national_code: dt.national_code,
        degree: dt.degree,
      };
    });

    return table;
  };
  const props = {
    builtOwnData,
    ...userInfoDetale,
  };
  return <PanelListTable {...props} />;
};

export default UserInfoListAdminScreen;
