import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from "react-router-dom";

class DataTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: -1,
      employees: []
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users", { method: "GET" })
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            employees: result.data
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }
  render() {
    const delbuttonstyle = {
      backgroundColor: "#F44336",
      width: 80,
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7
    };
    const edbuttonstyle = {
      backgroundColor: "#03A9F4",
      width: 70,
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7
    };

    const columns = [
      {
        Header: "ID",
        accessor: "id",
        width: 50
      },
      {
        Header: "FIRST_NAME",
        accessor: "first_name",
        minWidth: 50
      },
      {
        Header: "LAST_NAME",
        accessor: "last_name",
        minWidth: 50
      },
      {
        Header: "EMAIL",
        accessor: "email",
        minWidth: 50
      },
      {
        Header: "AVATAR",
        accessor: "avatar",
        minWidth: 50
      },
      {
        Header: "Action",
        width: 200,
        Cell: props => {
          return (
            <div>
              <button style={edbuttonstyle}>Edit</button>{" "}
              <button style={delbuttonstyle}>Delete</button>
            </div>
          );
        }
      }
    ];

    const style = {
      width: "90%",
      height: "100%",
      position: "relative",
      left: "70px"
    };

    return (
      <div>
        <div style={style}>
          <ReactTable
            columns={columns}
            data={this.state.employees}
            defaultPageSize="5"
            minRows="5"
            getTrProps={(state, rowInfo, column, instance) => {
              if (typeof rowInfo !== "undefined") {
                return {
                  onClick: (e, handleOriginal) => {
                    this.setState({
                      selected: rowInfo.index
                    });
                    if (handleOriginal) {
                      handleOriginal();
                    }
                  },
                  style: {
                    background:
                      rowInfo.index === this.state.selected
                        ? "white"
                        : "#EBEBEB",
                    color:
                      rowInfo.index === this.state.selected
                        ? "##FFFFFF"
                        : "black"
                  }
                };
              } else {
                return {
                  onClick: (e, handleOriginal) => {
                    if (handleOriginal) {
                      handleOriginal();
                    }
                  },
                  style: {
                    background: "white",
                    color: "black"
                  }
                };
              }
            }}
          />
          <Link to="/additem" className="nav-link">
            {" "}
            AddProduct
          </Link>
        </div>
      </div>
    );
  }
}
export default DataTables;
