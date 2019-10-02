import React from "react";
import { withRouter } from "react-router-dom";
import MaterialTable from "@/components/base/MaterialTable";

@withRouter
export default class Users extends React.Component {
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
          { title: "Last Name", field: "last_name" }
        ]}
        data={query =>
          new Promise((resolve, reject) => {
            let url = "https://reqres.in/api/users?";
            url += `per_page=${query.pageSize}`;
            url += `&page=${query.page + 1}`;
            fetch(url)
              .then(response => response.json())
              .then(result => {
                resolve({
                  data: result.data,
                  page: result.page - 1,
                  totalCount: result.total
                });
              })
              .catch(err => {
                reject(err);
              });
          })
        }
      />
    );
  }
}
