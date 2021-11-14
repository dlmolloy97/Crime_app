import { data }  from './data/table_data.js';
import React from 'react';
const columnHeader =["Day of Week","Hour","Incidents"];

export const Table = ({ columnHeader, arr }) => {
    let header=[];
    for(var i =0; i < columnHeader.length; i++){
        header.push(<th key={columnHeader[i]}>{columnHeader[i]}</th>)
};
    let cells=[];
    for(var i =0; i < arr.length; i++){
        cells.push(
            <tr >
           <td key={arr[i].weekday}>{arr[i].weekday}</td>
           <td key={arr[i].hour}>{arr[i].hour}</td>
           <td key= {arr[i].incidents}>{arr[i].incidents}</td>
           </tr>
           )};
    return(
           <div>
        <table className="table  table-hover" class="searchable sortable">
        <thead>
            <tr>
            {header}
            </tr>
        </thead>
        <tbody>
            {cells}
        </tbody>
        </table>
           </div>
       );};
