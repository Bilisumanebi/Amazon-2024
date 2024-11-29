import React, { useState, useEffect} from 'react'
import classes from './result.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../API/endPoints'
import Productcard from '../../Components/Product/Productcard'

function Results ()  {
      const [results, setResults] = useState([])

      const {categoryName} = useParams()
      useEffect(()=>{

      
      // console.log(categoryName)

      axios.get(`${productUrl}/products/category/${categoryName}`)
            .then((res)=> {
                  // console.log(res)
                  setResults(res.data)
                  
            }).catch((err)=>{
                  console.log(err);
                  
            })
      },[])
      
      return (
            <LayOut>
                  <section>
                        <h1 style={{padding: "30px"}} >Results</h1>
                        <p style={{padding:"30px"}} > Category/{categoryName} </p>
                        <hr />
                        <div className={classes.products_container} >
                              {results?.map((product)=>(
                                    <Productcard
                                    key={product.id}
                                    product={product}
                                    renderDesc={false}
                                    renderAdd={true}
                                    />
                              ))}
                        </div>
                  </section>
                  
            </LayOut>
           
      )}


export default Results

// const Results = () => {
//   const [results, setResults] = useState([]);
//   const { categoryName } = useParams();

//   useEffect(() => {
//     if (categoryName) {
//       console.log(categoryName);

//       axios.get(`${productUrl}/category/${categoryName}`)
//         .then((res) => {
//           console.log(res);
//           setResults(res.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       console.log('Category name is undefined');
//     }
//   }, [categoryName]);

//   return (
//     <LayOut>
//       <div>Results</div>
//       <ul>
//         {results.map((result, index) => (
//           <li key={index}>{result.name}</li> // Adjust based on your data structure
//         ))}
//       </ul>
//     </LayOut>
//   );
// }

// export default Results;
