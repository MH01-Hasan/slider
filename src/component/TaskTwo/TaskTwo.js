import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import axios from 'axios';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import React, { useEffect, useState } from 'react';
import './TaskTwo.css'


const TaskTwo = () => {
    const[result, setResult]=useState({})
    const[allData, setAllData]= useState([])
    let number = 0;
 
    useEffect(() => {
        try {
            setInterval(async () => {
                const res = await axios(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${number}`)
                number++
                if (res.data) {              
                    setResult(res?.data);
                    setAllData((prev) => [...prev,res?.data ])
                }
            },10000)
          } catch(e) {
            console.log(e);
          }
    }, [])


    return (
        <Container maxWidth="xl">
          {!allData.length?  <Box sx={{ width: '50%', mt:40 ,mx: "auto"
        }}>
      <LinearProgress />
    </Box>  :  <TableContainer  sx={{ maxHeight: 650 , mt:5}}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead  >
          <TableRow sx={{ bgcolor:'info.main'}} >
            <TableCell  sx={{ fontSize: 22, fontWeight: 700  }}>Titel</TableCell>
            <TableCell sx={{ fontSize: 22,fontWeight: 700  }} >created_at</TableCell>
            <TableCell  sx={{ fontSize: 22 ,fontWeight:700 }}>Url</TableCell>          
          </TableRow>
        </TableHead>
        <TableBody> 
            {
              allData?.map(res =>(res?.hits?.map(data=> (
                <TableRow >
                <TableCell >{data?.title}</TableCell>
                <TableCell >{data?.created_at}</TableCell>
                <TableCell >{data?.url}</TableCell>
              </TableRow>

              ))))  
            }         
        </TableBody>
      </Table>
    </TableContainer>
          }     
    </Container>
    );
};

export default TaskTwo;