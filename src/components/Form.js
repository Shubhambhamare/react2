import React from "react";
import './Form.css'
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      department: "",
      rating: "",
      item: [],
    };
  }

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    if( this.state.name === "" || this.state.department === "" || this.state.rating === "" ){
      alert("ALL FIELDS MANDARORY");
    } 
    else {
      const tempArr = this.state.item;
      const tempObj = {
        name: this.state.name,
        department: this.state.department,
        rating: this.state.rating,
      };
      tempArr.push(tempObj);
      this.setState({
        item: tempArr,
      });
    }
  };
  
  render() {
    return (
      <><h1>Employee Feedback Form</h1>
        <form>
          <label>Name</label>
          <input name="name" onChange={this.inputHandler} value={this.state.name} placeholder="Enter name" className="inputFrom" /><br />
          <label>Department</label>
          <input name="department" onChange={this.inputHandler} value={this.state.department} placeholder="department" className="inputFrom"/><br />
          <label>Rating</label>
          <input name="rating" onChange={this.inputHandler} value={this.state.rating} placeholder="Rating" className="inputFrom"/><br />
          <button onClick={this.submitHandler}>Submit</button>
        </form>
        <div className="Container_1">
          {this.state.item.map((val, index) => {
            return (
              <div key={this.state.name} className="Container_2">
                Name: {val.name} || Department :{val.department} || Rating:{val.rating}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Form;