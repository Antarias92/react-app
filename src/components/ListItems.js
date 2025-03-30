import React, {useState} from "react";
import {Link} from "react-router-dom";


function ListItems({items , onDelete}){
   
    const [filterStatus, setFilterStatus] = useState("All");
    const filteredItems = items.filter(item => {
      return (filterStatus === "All" || (filterStatus === "Completed" && item.status) || (filterStatus === "Incomplete" && !item.status));
    });

    return (
        <div>
            <div className="mb-2 mt-2 col-3 dropMenu">
                <select className="form-select dropMenu" onChange={(e => setFilterStatus(e.target.value))}>
                <option value ="All">All</option>
                <option value ="Completed">Completed</option>
                <option value ="Incomplete">Incomplete</option>
                </select>
            </div>
            <div className="table-responsive mt-4">
                <table className="table table-bordered">
                <thead className="table-primary">
                    <tr>
                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.itemName}</td>
                            <td>{item.description}</td>
                            <td>{item.status === true ? "Completed" : "Incomplete"}</td>
                            <td>
                                <Link className="btn btn-warning btn-md me-2" to={`/edit/${item.id}`}>Edit</Link>
                                <button className="btn btn-danger btn-md me-2" onClick={() => onDelete(item.id)}>Delete</button>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
      );
}

export default ListItems;