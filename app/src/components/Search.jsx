// import React, { useState, useEffect } from "react";
// import {
//   Input,
//   Text,
//   Select,
//   CardHeader,
//   Card,
//   Icon,
// } from "@ui5/webcomponents-react";
// import "@ui5/webcomponents-icons/dist/search";

// const Search = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [filteredResults, setFilteredResults] = useState([]);

//   const LOCAL_STORAGE_KEY = "contacts";
//   const contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

//   const searchItems = (searchValue) => {
//     setSearchInput(searchValue)
//     if (searchInput !== '') {
//         const filteredData = contacts.filter((item) => {
//             return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
//         })
//         setFilteredResults(filteredData)
//     }
//     else{
//         setFilteredResults(contacts)
//     }
// }

//   const filteredData = contacts.filter((item) => {
//     return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
//     })
//   return (
//     <>
//       <Input
//         showClearIcon
//         placeholder="Search Contact"
//         icon={<Icon name="search"></Icon>}
//         style={{ marginLeft: "30px" }}
//         onChange={(e) => searchItems(e.target.value)}
//       ></Input>
//       {searchInput.length > 1 ? (
//                     filteredResults.map((item) => {
//                         return (
//                             <Card style={{ marginLeft: "30px", width: "80%", padding:"5px" }}>
        
//                                     <CardHeader titleText={item.name}/>
                                  
//                                     <Text style={{padding:"5px"}}> {item.email}</Text>    
                                    
//                                 </Card>

//                         )
//                     })
//                 ) : (
//                     contacts.map((item) => {
//                         return (
//                             <Card style={{ marginLeft: "30px", width: "80%", padding:"5px" }}>
                        
//                         <CardHeader titleText={item.name}/>         
//                                     <Text style={{padding:"5px"}}>
//                                         {item.email}
//                                     </Text>
    
//                             </Card>
//                         )
//                     })
//                 )}
    // </>
  // );
// };
// export default Search;
