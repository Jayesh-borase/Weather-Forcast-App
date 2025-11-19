import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";

export default function searchBox()
{
    let [city,setCity]=useState("");

    let changeCity=(event)=>{
        setCity(event.target.value);
        console.log(city);
    }
    let handleChange=(event)=>{
        event.preventDefault();
        //console.log(city);
        setCity("");
    }

    return(
        <div>
            <h3>Search for the Weather</h3>
            <div className="searchbox">
                <br></br>
                <form onSubmit={handleChange}>
             <TextField style={{marginLeft:"34px"}} id="outlined-size-normal" onChange={changeCity} value={city} size="small" label="Enter city name" variant="outlined" required/>
             <br></br><br></br>
             <Button style={{marginLeft:"34px"}} type="submit" variant="contained">submit</Button>
             </form>
             </div>
        </div>
    );
}