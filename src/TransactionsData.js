import React from 'react'

export const TransactionsData = ({ data }) => {
    return (
        data.map(d => {
            return <tr id="t_row">
                <td id="t_data">{d.id}</td>
                <td id="t_data">{d.bal}</td>
                { d.action=="Add" ?
                <td id="t_added">{d.action}</td>
                :
                <td id="t_remove">{d.action}</td>
        }
            </tr>
        }))
}
