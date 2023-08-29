import React, { Component } from "react";
import "./Form.css";
import Cancel from "./Images/x-button.png";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputValue: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleButtonClick = () => {
    const { inputValue, items } = this.state;
    if (inputValue.trim() !== "") {
      this.setState({
        items: [...items, inputValue],
        inputValue: "",
      });
    }
  };

  handleRemoveSkill = (index) => {
    const { items } = this.state;
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    this.setState({ items: updatedItems });
  };
  handleSubmitButton = async () => {
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: document.getElementById("NameValue").value,
          email: document.getElementById("MailValue").value,
          phoneNumber: document.getElementById("PhoneNumberValue").value,
          address: document.getElementById("AddressValue").value,
          skills: this.state.items,
        }),
      });

      if (response.ok) {
        alert("Form data submitted successfully");
      } else {
        // Handle error
        alert("Error submitting form data");
      }
    } catch (error) {
      alert("Error submitting form data", error);
    }
    var w = window.innerWidth;
    alert(w)
  };
 
  render() {
    const { items, inputValue } = this.state;
    return (
      <div>
        <div className="FormComponent">
          <div className="title">Basic Details</div>
          <div className="BasicDetais">
            <div className="Name Feilds">
              <label htmlFor="Name" className="Lable">
                Name
              </label>
              <div className="divider">:</div>
              <input type="text" className="InputFeild" id="NameValue" />
            </div>
            <div className="Mail Feilds">
              <label htmlFor="Mail" className="Lable">
                Email ID
              </label>
              <div className="divider">:</div>
              <input type="email" className="InputFeild" id="MailValue" />
            </div>
            <div className="PhoneNumber Feilds">
              <label htmlFor="PhoneNumber" className="Lable">
                Moblie No
              </label>
              <div className="divider">:</div>
              <input
                type="tel"
                className="InputFeild"
                id="PhoneNumberValue"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
            <div className="Address Feilds">
              <label htmlFor="Address" className="Lable">
                Address
              </label>
              <div className="divider">:</div>
              <textarea type="text" className="Addressf" id="AddressValue" />
            </div>
          </div>
          <div className="title">Skills</div>
          <div className="app-container">
            <div className="Feilds">
              <div className="SkillLable">
                <label htmlFor="Skill">Add your Skills</label>
              </div>
              <div className="SkillAddButton">
                <input
                  type="text"
                  className="InputFeildSkills"
                  value={inputValue}
                  onChange={this.handleInputChange}
                />
                <button onClick={this.handleButtonClick}>Add</button>
              </div>
            </div>
          </div>
          <div className="items-list">
            {items.map((item, index) => (
              <div className="ListKey" key={index}>
                {item}
                <img
                  src={Cancel}
                  alt="C"
                  style={{
                    width: "20px",
                    padding: "5px",
                    display: "flex",
                    margin: "4px",
                  }}
                  onClick={() => this.handleRemoveSkill(index)}
                />
              </div>
            ))}
          </div>

          <div className="title">Projects</div>
          <div className="Projects">
            <div className="projectURL Feilds">
              <label htmlFor="Name" className="Lable">
                Project Title
              </label>
              <div className="divider">:</div>
              <input type="text" className="InputFeild" id="NameValue" />
            </div>
            <div className="projectURL Feilds">
              <label htmlFor="Name" className="Lable">
                Project URL
              </label>
              <div className="divider">:</div>
              <input type="text" className="InputFeild" id="NameValue" />
            </div>
            <div className="projectURL Feilds">
              <label htmlFor="Name" className="Lable">
                Project Discription
              </label>
              <div className="divider">:</div>
              <textarea type="text" className="Addressf" id="ProjectDiscriptionValue" />
            </div>
            <div className="Dates Feilds">
              <label htmlFor="Name" className="Lable">
                Start Date
              </label>
              <div className="dividers">:</div>
              <input type="Date" className="InputFeild" id="ProjectStartDateValue" />
              <label htmlFor="Name" className="Lable">
                End Date
              </label>
              <div className="dividers">:</div>
              <input type="Date" className="InputFeild" id="ProjectEndDateValue" />
            </div>
          </div>

          <div className="SubmitButton">
            <button type="submit" onClick={this.handleSubmitButton}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
