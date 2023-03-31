import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import data from '../data/drugs';

const Prescribing = () => {

/* All Drug list */
  const [allDrugList,setallDrugList]= useState(data)

  /* Initial List*/
  const initList = data.filter((rx)=> {
  if(rx.Pharmacistchoice ==='*')
  return rx
  })
  const [drugList,setDrugList] =useState([])

  useEffect(()=>{
    setDrugList (initList)
  },[]);  
/* new list */
const updateList = (Condition)=>{
  const modList = data.filter((rx)=>{
    if (rx.Condition ===Condition)
    return setDrugList(modList)
  })

}
    return (
   
      <Container>
         <div className='row'>
    {drugList.map((val)=>{
      return(
        <div className='col-md-4' key={val.id} >
        <Card style={{ width: '20rem' }} >
      <Card.Body>
        <Card.Title>{val.Category}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{val.Drug}</Card.Subtitle>
        <Card.Text>
          {val.Dose}
        </Card.Text>
        <Card.Text>{val.DIN}</Card.Text>
        <Button variant="primary" onClick={()=> {updateList(val.Condition)}}>Alternatives</Button>
      </Card.Body>
    </Card>
    </div>
      )})}
      <Button variant="danger" onClick={() => window.open("https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/pharmacare-for-bc-residents/what-we-cover/prescription-contraceptives", '_blank')}>
            Birth Control
        </Button>
    </div>
    </Container>
     
    )  
};
  
  export default Prescribing;

  