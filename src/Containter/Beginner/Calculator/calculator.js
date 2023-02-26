import { useState, useEffect } from 'react';
import {Row, Col , Container} from 'react-bootstrap'
import Tab from '../../../Component/Tab'

import './style.css'
function Calculator(){
    const [value, setValue] = useState("")
    const [value2, setValue2] = useState("")
    const [operator, setOperator] = useState("")
    const [result, setResult] = useState(0)
    const [plusminus , setPlusminus] =useState(false)
    const onClickNumber = (e) => {
        operator && plusminus ?
        setValue2("-"+value2+e.target.value)
        : operator ? 
        setValue2(value2+e.target.value)
        : plusminus ? 
        setValue("-"+value+e.target.value)
        : setValue(value+e.target.value)
    }
    useEffect(
        () => {
            setValue2("")
            setValue((result).toString())
            setOperator("")
            setPlusminus(false)
        }
    ,[result])

    useEffect(
        () => {
            setPlusminus(false)
        }
    ,[operator])
    const onClickOperator = (e) => {
        setOperator(e.target.value)
    }
    const resultHandler =() => {
        operator=== "+" ?
        setResult(Number(value) + Number(value2))
        :operator === "-" ?
        setResult(Number(value) - Number(value2))
        :operator === "*" ?
        setResult(Number(value) * Number(value2))
        :operator === "/" ?
        setResult((Number(value) / Number(value2)).toFixed(2))
        :operator === "%" ?
        setResult(Number(value) % Number(value2))
        :setResult(0)
        
    }
    const allClear = () => {
        setValue("")
        setValue2("")
        setOperator("")
        setResult(0)
    }
    const clear = () => {
        operator ? 
        setValue2(parseInt(Number(value2)/10))
        : setValue(parseInt(Number(value)/10))
    }
    const onClickPlusminus = (e) => {
        setPlusminus(!plusminus)
        if(plusminus==false)e.target.value="+"
        else e.target.value="-"
    }

return(
    <>
    
    <div className="calRoot">
        
        
        <Container>
        <Row >
            <div>
                {plusminus ?
                (<>({value}) {operator} ({value2})</>)
                : (<>{value} {operator} {value2}</>)
                }
            </div>
        </Row>
        <Row className="calHeader">
            <div className="calOutput">{result ?
                 (value)
                  :value2 ?
                  (value2)
               : value < 99999999 ?
               (value)
               : 0
               }</div>
        </Row>
        <Row className="calBody">
            <Col className="calItem">
                <button className="calButton"
                onClick={allClear}>AC</button>
            </Col>
            <Col className="calItem">
                <button className="calButton"
                onClick={clear}>C</button>
            </Col>
            <Col className="calItem">
            <button className="calButton"
            onClick={onClickOperator}
            value="%"
            >%</button>
            </Col>
            <Col className="calItem">
            <button className="calButton"
            onClick={onClickOperator}
            value="/"
            >/</button>
            </Col>

        </Row>
        <Row className="calBody">
            <Col className="calItem">
                <button className="calButton" 
                onClick={onClickNumber} 
                value="7"
                >7
                </button>
            </Col>
            <Col className="calItem">
                <button className="calButton" 
                onClick={onClickNumber} 
                value="8"
                >8
                </button>
            </Col>
            <Col className="calItem">
                <button className="calButton" 
                onClick={onClickNumber} 
                value="9"
                >9
                </button>
            </Col>
            <Col className="calItem">
                <button className="calButton"
                onClick={onClickOperator}
                value="*" >
                    x</button></Col>
        </Row>
        <Row className="calBody">
            <Col className="calItem">
                <button className="calButton" 
                onClick={onClickNumber} 
                value="4">
                    4
                </button>
            </Col>
            <Col className="calItem">
                <button 
                className="calButton" 
                onClick={onClickNumber} 
                value="5"
                >5
                </button>
            </Col>
            <Col className="calItem">
                <button 
                className="calButton" 
                onClick={onClickNumber} 
                value="6"
                >6
                </button>
            </Col>
            <Col className="calItem">
                <button 
                className="calButton"
                onClick={onClickOperator}
                value="-"
                >-
                </button>
            </Col>
        </Row>
        <Row className="calBody">
            <Col className="calItem">
                <button 
                className="calButton" 
                onClick={onClickNumber} 
                value="1"
                >1
                </button>
            </Col>
            <Col className="calItem">
                <button className="calButton" 
                onClick={onClickNumber} 
                value="2">2
                </button>
            </Col>
            <Col className="calItem">
                <button className="calButton" 
                onClick={onClickNumber} 
                value="3">3
                </button>
            </Col>
            <Col className="calItem">
                <button className="calButton"
                onClick={onClickOperator}
                value="+"
                >+
                </button>
                </Col>
        </Row>
        <Row className="calBody">
            <Col className="calItem">
                <button className="calButton" 
                onClick={onClickPlusminus}
                value="-" >+/-</button></Col>
            <Col className="calItem">
                <button className="calButton" 
                onClick={onClickNumber} 
                value="0">0
                </button>
            </Col>
            <Col className="calItem">
                <button 
                className="calButton"
                onClick={onClickNumber} 
                value="."
                >.
                </button>
            </Col>
            <Col className="calItem">
                <button 
                className="calButton"
                onClick={resultHandler}
                >=
                </button>
            </Col>
        </Row>
        {/* <Row className="output"></Row>
        <Row className="output"></Row> */}
        </Container>
    </div>
    </>
)
}
export default Calculator