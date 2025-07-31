import React from 'react'
import phone1Image from '../../public/images/phone1.jpg'
import phone2Image from '../../public/images/phone2.jpg'
import styled from 'styled-components'

const Button = styled.button`
    background-color: green;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 18px
`

function Images() {
    const h2Style = {
        color: "red",
        fontSize: "30px",
        textAlign: "center",
        
    }

    const imageStyle = {
        width: "400px",
        height: "400px",
        borderRadius: "10px"
    }
  return (
    <div>
        <h2 style={h2Style}>My Image List</h2>
        <img src={phone1Image} alt="Phone image" style={imageStyle}/>
        <img src={phone2Image} alt="Phone image" style={imageStyle}/>

        <Button>Click Me</Button>
    </div>
  )
}

export default Images