import {
  Card,
  FlexBox,
  Icon,
  CardHeader,
  Panel,
  Text,
  Button,
  Input,
} from "@ui5/webcomponents-react";
import React, { useState, useEffect } from "react";

import "@ui5/webcomponents-icons/dist/delete";
import "@ui5/webcomponents-icons/dist/home";
import "@ui5/webcomponents-icons/dist/call";
import "@ui5/webcomponents-icons/dist/phone";
import "@ui5/webcomponents-icons/dist/building";
import "@ui5/webcomponents-icons/dist/flag";
import "@ui5/webcomponents-icons/dist/save";

export const ContactCard = (props) => {
  const { id, name, email, number, address, isProfessional, company, cNumber, isImportant } =
    props.contact;

  useEffect(() => {
      fetch('GET http://localhost:4004/contact/Contact?')
          .then(response => response.json());
  }, []);

  const iconname = isImportant === true ? "flag" : "";
  const per = isProfessional === false ? "home": "employee";
  const [edit, setEdit] = useState(true);

  return (
    <>
      <FlexBox style={{ marginLeft: "30px" }}>
        <Card
          style={{ width: "80%" }}
          header={
            <CardHeader
              avatar={<Icon name={per} />}
              subtitleText={email}
              titleText={name}
              action={
                <Icon
                  name={iconname}
                />
              }
            />
          }
        >
          <Panel
            collapsed
            headerText="View Details"
            onToggle={function ka() {}}
          >
            <Icon name="call" /> &emsp;
            <Input
              name="call"
              style={{ opacity: "100%" }}
              value={number}
              disabled={edit}
            
            ></Input>
            <br />
            <Icon name="home" /> &emsp;
            <Input
              name="home"
              style={{ opacity: "100%" }}
              value={address}
              disabled={edit}
            ></Input>
            <br />
            {isProfessional ? (
              <>
                <Icon name="building" /> &emsp;
                <Input
                  name="building"
                  style={{ opacity: "100%" }}
                  value={company}
                  disabled={edit}
                ></Input>
                <br />
                <Icon name="phone" /> &emsp;
                <Input
                name="phone"
                  style={{ opacity: "100%" }}
                  value={cNumber}
                  disabled={edit}
                 
                ></Input>
                <br/>
              </>
            ) : (
              ""
            )}
            <Button
              style={{ marginLeft: "500px" }}
              disabled={!edit}
              onClick={() => setEdit(false)}
            >
              <Icon name="edit" /> <Text>Edit</Text>
            </Button>
            <Button
              style={{ marginLeft: "20px" }}
              disabled={edit}
              onClick={() => setEdit(true)}
            >
              <Icon name="save" /> <Text>Save</Text>
            </Button>
          </Panel>
        </Card>
        <Icon
          style={{ margin: "20px" }}
          interactive
          name="delete"
          onClick={() => props.clickHander(id)}
        />
      </FlexBox>
      <br />
    </>
  );
};
