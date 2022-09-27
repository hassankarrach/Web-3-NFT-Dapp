import React , {useState, useEffect, useContext} from 'react';
import { styled as styledd } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components'
import Loader from './Loader';
import { motion } from "framer-motion"
//Context
import { StateContext } from '../Contexts/StateContext';

import Navbar from '../Components/Navbar/Navbar'

//FireBase
import {db} from '../Firebase';
import {
  collection,
  where,
  query,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";



  

function Admin() {
  const {HandleConnectWallet, currentAccount} = useContext(StateContext); 
  
  
  const [WhiteListedDetails, setWhiteListedDetails] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [IsAdmin, setIsAdmin] = useState(false);

  useEffect(()=>{
    getWhiteListed();
  },[])
  //FireBase
  const CollectionRef = collection(db, "whitelist");

  const getWhiteListed = async () => {
    const res = await getDocs(CollectionRef);
    //setTotalWhiteListed(res.size);
    const WhiteListed = [];
    res.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data().address);
      //console.log(doc.data().address);
      WhiteListedDetails.push(doc.data());
    });
    setLoadingData(false);
    console.log(WhiteListedDetails);
  }

  const StyledTableCell = styledd(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#321955',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styledd(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  const HandleConnectWallet_ = () =>{
      if(!currentAccount){
        HandleConnectWallet();
      }
      else{
        alert('Please, change your account by clicking on Metamask icon!');
      }
  }



  return (
    <StyledAdmin>
    <Navbar/>
    {
        loadingData?
        <Loader/>:
        currentAccount && currentAccount === '0x1adcf51858bb23020aa70f814f5e88e2e1184fbc'?
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Discord Name</StyledTableCell>
              <StyledTableCell align="right">Balance</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {WhiteListedDetails.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.address}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.Discord_name}</StyledTableCell>
                <StyledTableCell align="right">{row.Balance}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>: <h4>Please,<span onClick={()=>{HandleConnectWallet_()}}>Click Here</span> Connect your Admin Account!</h4>

    }
    </StyledAdmin>
  )
}


const StyledAdmin = styled.div`
   height : 100vh;
   display :flex;
   justify-content : center;
   flex-direction : column;
   align-items : center;
   padding : 10px 8%;


   h4{
       color :white;
       font-size :20px;
       font-family: 'Ubuntu';

       span{
           cursor :pointer;
           transition : 0.2s ease-in-out;
           &:hover{
            color : #1c0e2f;
           }
       }
   }
`

export default Admin