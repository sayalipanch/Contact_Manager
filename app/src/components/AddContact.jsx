import React from "react";
import {
  Button,
  Form,
  FormItem,
  Input,
  FormGroup,
  CheckBox,
  TextArea,
  Label,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import {Link} from "react-router-dom"

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    number: "",
    address: "",
    isProfessional: false,
    company: "",
    cNumber: "",
    isImportant: false,
  };

  tick = () => {
    
    this.isProfessional = !this.isProfessional
    console.log(this.isProfessional)
    this.setState({ isProfessional: !this.state.isProfessional })

  }

  add = async (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });

    alert("New Contact added!");

    const response = await fetch("http://localhost:4004/contacts/Contact",{
      method:"POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    })
    const data = response.json();
    console.log(data);    

  };
  render() {
    return (
      <>
        <Form
          backgroundDesign="Transparent"
          style={{
            marginLeft: "30px",
          }}
          titleText="Create New Contact"
          onSubmit={this.add}
        >
          <FormGroup titleText="Personal Data">
            <FormItem label="Name*">
              <Input
              showClearIcon
                required
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </FormItem>
            <FormItem label={<Label>Personal Email*</Label>}>
              <Input
              showClearIcon
                type="email"
                required
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </FormItem>
            <FormItem label={<Label>Personal Phone No.</Label>}>
              <Input
                type="Number"
                showClearIcon
                placeholder="Phone number"
                value={this.state.number}
                onChange={(e) => this.setState({ number: e.target.value })}
              />
            </FormItem>
            <FormItem
              label={
                <Label style={{ alignSelf: "start", paddingTop: "0.25rem" }}>
                  Address
                </Label>
              }
              style={{
                alignSelf: "start",
              }}
            >
              <TextArea
              showClearIcon
                value={this.state.address}
                onChange={(e) => this.setState({ address: e.target.value })}
                placeholder="Address in breif"
                rows={5}
                style={{
                  "--_ui5_textarea_margin": 0,
                  width: "210px",
                }}
              />
            </FormItem>
            <FormItem label="Professional Contact">
              <CheckBox value={this.isProfessional} onChange={this.tick}/>
            </FormItem>
          </FormGroup>
          {this.isProfessional?<FormGroup titleText="Company Data">
            <FormItem label="Company Name">
              <Input
              showClearIcon
                value={this.state.company}
                onChange={(e) => this.setState({ company: e.target.value })}
              />
            </FormItem>
            <FormItem label="Company Phone No.">
              <Input
              showClearIcon
              type="Number"
                value={this.state.cNumber}
                onChange={(e) => this.setState({ cNumber: e.target.value })}
              />
            </FormItem>

            <FormItem label="Important">
              <CheckBox value={this.isImportant} onChange={() => this.setState({ isImportant: !this.state.isImportant })}/>
            </FormItem>
          </FormGroup> : ""}

          <Link to="/"><Button design="normal" icon="add" onClick={this.add}>
            Add
          </Button></Link>
        </Form>
        <br></br>

      </>
    );
  }
}

export default AddContact;
