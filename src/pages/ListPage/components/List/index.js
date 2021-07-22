import React from 'react';
import PropType from 'prop-type';
import CounterView from "../../../commonComponents/CounterView/index.js";

const ListsLayout = ({counterList}) => {
    return (
        <div>
            {counterList.map((counter, index) =>{
                return (
                    <CounterView/>
                );
            })}
        </div>
    );
};

export default ListsLayout; 