import Link from '../../Link'
import { useState } from 'react';
import './style.css'
function Index(props){
    // const [value, setValue] = useState(0)
    const [bin, setBin] = useState(0)
    const [res, setRes] = useState(0)
    const [err, setErr] = useState("")
    // const []
    var temp = bin
    var rem , a=0
    var n=0
    const convertion = () => {
        while(temp>0){
        // console.log(a, rem)
        rem = temp % 10;
        a += rem * (2**n)
        temp = parseInt(temp/10)
         n+=1
        console.log("nnnnnnnnnnn",n)
        }
        setRes(a)
    }
    const inputValue = (e) => {
      const regex = /^[0-1]{1,8}$/
        var res = regex.test(e.target.value);
        res  ? 
        setBin(e.target.value)
         :setErr("wrong input")
  
    }
return(
    <div className="App">
      <header className="App-header">
        Binary to Decimal
        <Link />
      </header>
      <body className="App-body">
        <div className="root">
        <input className="input" placeholder="enter 0 or 1" onChange={inputValue}/>
        <div className="convertbtn">
        <button className="button" onClick={convertion}>convert</button>
        </div>
        {/* {bin ?  */}
        <span style={{color:"red"}}> {err}</span>
        {/* : <span style={{color:"red"}}>enter a binary value</span>
        } */}
        <div className="result">  
        decimal number is {res}
        </div>
        </div>
      </body>
    </div>
)
}
export default Index