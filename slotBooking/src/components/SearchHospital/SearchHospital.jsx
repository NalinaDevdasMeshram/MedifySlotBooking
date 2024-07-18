import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import SearchIcon from "@mui/icons-material/Search";
import {Box,Select, MenuItem, InputAdornment,Button} from '@mui/material'

const SearchHospital = () => {
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [formData, setformData] = useState({state:"", city:""})
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchState = async()=>{
          try{
            const response = await axios.get("https://meddata-backend.onrender.com/states")
            setStates(response.data)
          }
          catch(e){
            console.error('error fetching state:',e.message)
          }  
        }
        fetchState();
    },[]);
    useEffect(()=>{
        const fetchCity = async()=>{
            setCities([]);
            setformData((prev)=>({...prev, city:''}))
            try{
                const data = await axios.get(`https://meddata-backend.onrender.com/cities/${formData.state}`)
               setCities(data.data)
              console.log('data',data.data) 
            }
            catch(e){
                console.error('fetching error city',e.message)
            }
        
        }
        if(formData.state !==''){
            fetchCity();
        }
    },[formData.state])
    const handleChange =(e)=>{
        const {name, value} = e.target;
        setformData((prev)=>({...prev, [name]:value}))
    }
    const handleSubmit =(e)=>{
      e.preventDefault();
      if(formData.state && formData.city){
        navigate(`/search?state=${formData.state} ${formData.city}`)
      }
    };

  return (
    <Box 
    Component ='form'
    onSubmit={handleSubmit}
    sx={{
        display:"flex",
        gap: 4,
        justifyContent:"space-between",
        flexDirection: { xs:"column", md:"row" },
      }}
    >
     <Select
        displayEmpty
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth:200, width:"100%" }}
      >
        <MenuItem disabled value="" selected>
          State
        </MenuItem>
        {states.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>

      <Select
        displayEmpty
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={{ minWidth: 200, width: "100%" }}
      >
        <MenuItem disabled value="" selected>
          City
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>

      <Button
        type="submit"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{ py: "15px", px: 8, flexShrink: 0 }}
        disableElevation
      >
        Search
      </Button>
        
    </Box>
  )
}


export default SearchHospital