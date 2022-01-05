import { Component } from 'react'
import './todo.css'

class Table extends Component {



    render() {

        console.log(this.props.data);
        var row = this.props.data.map((value, index) =>
            <tr key={index}>
                <td>{value.day}</td>
                <td>{value.date}</td>
                <td>{value.quantity}</td>
            </tr>
        )

        return <table>
            <tbody>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Quantity</th>
                </tr>

                {row}

            </tbody>
        </table>
    }

}
export default Table