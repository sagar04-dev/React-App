import React from "react";
import { Table } from "react-bootstrap";
import "./styles.css";

class EditItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      description: "",
      price: ""
    };
    this.onChangeItemId = this.onChangeItemId.bind(this);
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemdescription = this.onChangeItemdescription.bind(this);
    this.onChangeItemprice = this.onChangeItemprice.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }
  componentDidMount() {
    this.setState({
      name: this.props.name,
      description: this.props.description,
      price: this.props.price
    });
  }
  onChangeItemId(event) {
    this.setState({
      id: event.target.value
    });
  }

  onChangeItemName(event) {
    this.setState({
      name: event.target.value
    });
  }
  onChangeItemdescription(event) {
    this.setState({
      description: event.target.value
    });
  }
  onChangeItemprice(event) {
    this.setState({
      price: event.target.value
    });
  }
  onEditSubmit(event) {
    event.preventDefault();
    this.props.updateProducts(
      this.props.id,
      this.state.name,
      this.state.description,
      this.state.price
    );
  }
  onCancel() {
    this.props.canceFunc();
  }

  render() {
    const submitbuttonstyle = {
      backgroundColor: "#03A9F4",
      width: 90,
      height: 40,
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7
    };
    const cancelbuttonstyle = {
      backgroundColor: "#FFEB3B",
      width: 90,
      height: 40,
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7
    };

    return (
      <div className="popup">
        <div className="popup\_inner">
          <h1>Edit product details</h1>
          <form onSubmit={this.onEditSubmit}>
            <Table width="300px" height="200px" align="center">
              <tbody>
                <tr>
                  <td>
                    <label>ID: </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={this.props.id}
                      onChange={this.onChangeItemId}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label> Name: </label>
                  </td>

                  <td>
                    <input
                      type="text"
                      value={this.state.name}
                      onChange={this.onChangeItemName}
                      required
                      pattern="^[a-zA-Z0-9]*$"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>Description: </label>
                  </td>

                  <td>
                    <input
                      type="text"
                      value={this.state.description}
                      onChange={this.onChangeItemdescription}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>Price </label>
                  </td>

                  <td>
                    <input
                      type="text"
                      value={this.state.price}
                      onChange={this.onChangeItemprice}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      type="submit"
                      value="update"
                      className="btn btn-primary"
                      style={submitbuttonstyle}
                    />
                  </td>

                  <td>
                    <input
                      type="button"
                      value="cancel"
                      className="btn btn-primary"
                      style={cancelbuttonstyle}
                      onClick={this.onCancel}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </form>
        </div>
      </div>
    );
  }
}
export default EditItem;
