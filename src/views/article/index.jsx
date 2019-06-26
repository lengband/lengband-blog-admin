import React from "react";
import { observer, inject } from "mobx-react";
import Add from "@material-ui/icons/Add";
import MaterialTable from "@/components/base/MaterialTable";
import { withRouter } from "react-router-dom";
import axios from "axios";

@inject("menuStore")
@observer
@withRouter
export default class RemoteData extends React.Component {
  render() {
    return (
      <MaterialTable
        title="Remote Data Preview"
        columns={[
          {
            title: "Avatar",
            field: "avatar",
            render: rowData => (
              <img
                style={{ height: 36, borderRadius: "50%" }}
                src={rowData.avatar}
                alt=""
              />
            )
          },
          { title: "Id", field: "id" },
          { title: "First Name", field: "first_name" },
          { title: "Last Name", field: "last_name" },
          { title: "email", field: "email" }
        ]}
        data={query => {
          return new Promise(resolve => {
            // let url = "https://reqres.in/api/users?";
            // url += "per_page=" + query.pageSize;
            // url += "&page=" + (query.page + 1);
            const url = `https://reqres.in/api/users?per_page=${
              query.pageSize
            }&page=${query.page + 1}`;
            axios(url).then(({ data }) => {
              resolve({
                data: data.data,
                page: data.page - 1,
                totalCount: data.total
              });
            });
          });
        }}
        actions={[
          {
            icon: props => <Add {...props} />,
            tooltip: "添加文章",
            isFreeAction: true,
            onClick: () => {
              this.props.history.push("/write");
              this.props.menuStore.setActive("write");
            }
          }
        ]}
      />
    );
  }
}
