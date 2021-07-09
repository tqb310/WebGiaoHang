import React, {useState} from 'react'
import Tracuu from './tracuu'
import Navbar from '../homepage/Navbar';

const TracuuPage = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Navbar toggle={toggle}/>
            <Tracuu/>
        </div>
    )
}
export default TracuuPage;