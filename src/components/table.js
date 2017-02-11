import React from 'react';

const Table = ({data}) => {
 let table = '';

 if (data && data.length) {
     table = data.map(function (item, idx) {
         return <tr key={idx}>
             <td>{item.key}</td>
             <td>{item.value}</td>
             <td>{item.others}</td>
         </tr>
     });
 }


 return (
     <table>
         <thead>
             <tr>
                 <th>第一个</th>
                 <th>第二个</th>
                 <th>第三个</th>
             </tr>
         </thead>
         <tbody>{table}</tbody>
     </table>
 );
}

export default Table;
