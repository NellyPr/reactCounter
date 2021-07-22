//rsc
import React, { useState } from "react";
import ListsLayout from "../components/List";

const ListPageContainer = () => {
  const [counterList, setCounterList] = useState([]);
  return <ListsLayout counterList={counterList} />;
};

export default ListPageContainer;
