import React from "react";
import {
  Avatar,
  Input,
  ShellBar,
  ProductSwitchItem,
  Icon,
  ProductSwitch,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/add";
import "@ui5/webcomponents-icons/dist/contacts";

export function Header() {
  return (
    <>
      <ShellBar
        logo={
          <img src="http://www.clipartbest.com/cliparts/bTy/Lk6/bTyLk6R8c.png" />
        }
        primaryTitle="Contact Book"
        // onLogoClick={handleLogoClick}
        profile={
          <Avatar>
            <Icon name="customer" style={{ color: "white" }}></Icon>
          </Avatar>
        }
      >
        {/* <ShellBarItem icon={addIcon} text="Add" /> */}
      </ShellBar>

      <ProductSwitch style={{height:"3px"}}>
        <ProductSwitchItem
          icon="add"
          
          targetSrc="http://localhost:3000/add/"
          titleText="Add New Contacts"
          subtitleText="Create"
        />
        <ProductSwitchItem
          icon="contacts"
          subtitleText="Manage"
          targetSrc="http://localhost:3000/"
          titleText="View your Contacts"
        />
        {/* <ProductSwitchItem
          icon="search"
          subtitleText="Find"
          targetSrc="http://localhost:3000/search/"
          titleText="Search your Contacts"
        />
         */}
      </ProductSwitch>
    </>
  );
}
