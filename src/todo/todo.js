import './todo.css'
import { useState } from "react";
import Table from './table'
function Todo() {
    var data = JSON.parse(localStorage.getItem('data')) || []
    let { quantity, setQuantity } = useState('')
    // var data = JSON.parse(localStorage.getItem('Data')) || [];
    // var totalData = []

    function Check() {
        var a = new Date()
        var month = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];

        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        var dailydata = {
            day: dayNames[a.getDay()],
            date: `${a.getDate()}-${month[a.getMonth()]}-${a.getFullYear()}`,
            quantity: quantity
        }
        data.unshift(dailydata)
        localStorage.setItem('data', JSON.stringify(data));
        console.log(data);
        window.location.reload();


    }

    function handleChange(event) {
        // console.log(event.target.value);
        var a = event.target.value
        // console.log(a)
        quantity = a
    }


    function deleteItem() {
        localStorage.removeItem("data");
        window.location.reload();
    }
    return (<div>

        <h1>Shop Weekly Work</h1>
        <div>
            <input placeholder="Amount" onChange={handleChange} /> <button onClick={() => {
                Check();
            }}>Add</button>
        </div>
        <Table data={data} />
        <button className='deleteAll' onClick={() => deleteItem()}>Delete All</button>
    </div>)
}
export default Todo;