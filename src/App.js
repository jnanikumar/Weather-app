import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {useState} from 'react';


function App() {

  const [city,setCity]=useState('');
  const [result,setResult]=useState('')
  
  const ChangeHandler=(e)=>{
    setResult('')
    setCity(e.target.value)
  }

  const submitHandler=e=>{
    e.preventDefault();
    // console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    .then(response=>response.json())
    .then(data=>{
      const kelvin=data.main.temp;
      const cel=kelvin-273
      setResult(`Temperature in ${city} is ${cel} C`)
    })
    .catch(err=>setResult('city not found'))
  }

  

  

  



  return (
    
    <div className='container'>
      <div className='text' style={{fontWeight:'800',color:'green',fontSize:'30px'}}>Welcome To Weather App</div>
      <div className='text'><span>Instruction:</span>Enter Your City Name To Find The Current Temperature </div>
      <center className='col-xs-12 col-m-6 offset-m-3 '>
        
        <div className='card'>
          <div className='card-header'><font style={{fontWeight:'800',fontSize:'30px'}}>Weather App</font></div>
          <div className='card-body'>
            <h2 style={{fontWeight:'800'}}>Enter The City Name</h2>
            <form onSubmit={submitHandler} >
            <input type='text' name='place' value={city} onChange={ChangeHandler}  /><br></br>
            <input type='submit' value='Get Temperature'/>
            </form>
            
            <div style={{fontWeight:'800',color:'red',fontSize:'30px'}} >

            
            {result}
              
              
            </div>
          </div>
        </div>
        <div style={{fontWeight:'500',color:'black',fontSize:'20px',marginBottom:'0'}}>made with ❤  Jnani</div>
      </center>
    </div>

  );
}

export default App;
