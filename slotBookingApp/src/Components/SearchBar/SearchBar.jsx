/* eslint-disable react/prop-types */
import { useMemo, useState } from "react"
import { Button,Stack,TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material'

const SearchBar = ({list, filterList}) => {
    const [inputText, setInputText] = useState('')
    //memoizing filter list 
    const filteredList = useMemo(()=>{
        if(!inputText.trim()) return list
        return list.filter((item)=> item['Hospital name']
         .tolowerCase()
         .includes(inputText.trim().toLowerCase())
    )
    },[inputText, list])
     const handleSubmit=(e)=>{
        e.preventDefault();
        filterList(filteredList);
     }
  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <TextField
          type="text"
          label="Search By Hospital"
          variant="outlined"
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          inputProps={{ maxLength: 100 }} // Limiting input to 100 characters
        />
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
      </Stack>
    </form>
  
  )
}

export default SearchBar