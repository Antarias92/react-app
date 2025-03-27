import React, { useState } from "react";

function ItemForm({ initialData , onSubmit})
{
    const [formData, setFormData] = useState(initialData)

    function handleChange(event)
    {
        setFormData({...formData , [event.target.name]: event.target.value})
    }
    function handleSubmit(event)
    {
        event.preventDefault();
        onSubmit(formData);
    }
    function handleStatusChange(){
      setFormData({...formData, status: !formData.status});
      if(!formData.status){
        alert("Status Changed");
      }
    }
    
    return (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Item Name</label>
            <input
              type="text"
              name="itemName"
              className="form-control"
              value={formData.itemName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              name="description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      );
}

export default ItemForm;