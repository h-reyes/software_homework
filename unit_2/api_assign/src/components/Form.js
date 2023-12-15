import { useState } from "react";

export default function Form(prop){

    const[formData, setFormData] = useState({
        searchterm: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(form)
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type= "text"
                name= "searhterm"
                onChange={handleChange}
                value={formData.searchterm}
                />
                <input type= "submit" value="Find Movie"/>
            </form>
        </div>
    )
}