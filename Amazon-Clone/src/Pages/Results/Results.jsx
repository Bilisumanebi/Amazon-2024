import React, { useEffect, useState } from 'react'
// import classes from './result.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../API/endPoints'

const Results = () => {
      const [results, setResults] = useState([])
      const {categoryName}= useParams()
      useEffect(()=>{

      
      console.log(categoryName)

      axios.get(`${productUrl}/category/${categoryName}`)
            .then((res)=> {
                  console.log(res)
                  setResults(res.data)
                  
            }).catch((err)=>{
                  console.log(err);
                  
            })
      },[categoryName])
      
      return (
            <LayOut>
                  <div>Results</div>
            </LayOut>
           
      )}


export default Results
