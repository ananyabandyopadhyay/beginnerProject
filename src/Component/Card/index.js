import { useState } from 'react';
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import './style.css'

function Index({
    accessor,
    projectName,
    background
}){
    return <span className="cardComponent" accessor={accessor} style={{background: background}}>{projectName}</span>;
}
export default Index