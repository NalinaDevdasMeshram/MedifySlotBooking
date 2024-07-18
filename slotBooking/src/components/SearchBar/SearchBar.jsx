/* eslint-disable react/prop-types */
import {Button, Stack, TextField } from "@mui/material"
import { useState,useMemo } from "react"
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({list, filterList}) => {
const [inputText, setInputText] = useState('');
const filteredList = useMemo(()=>{
    if(!inputText.trim()) return list;
    return list.filter((item) =>
        item['hospital name']
        .toLowercase()
       .includes(inputText.trim().toLowercase())
 );
 
},[inputText, list])

const handleSubmit = (e)=>{
 e.preventDefault();
 filterList[filteredList]
}
  return (
    <form onSubmit={handleSubmit} >
        <Stack direction = 'row' spacing={2}>
            <TextField 
            type="text"
            label="Search by Hospitals"
            variant="outlined"
            fullWidth 
            value={inputText}
            onChange={(e)=>setInputText(e.target.value)}
            inputProps={{maxLength:100}}
            />

         <Button type="submit"
          variant ='contained'
           size="large"
           startIcon={<SearchIcon/>}
           sx={{ py: "15px", px: 8, flexShrink: 0 }}
          disableElevation
          >
            Search
         </Button>

        </Stack>
    </form>
  )
}

export default SearchBar