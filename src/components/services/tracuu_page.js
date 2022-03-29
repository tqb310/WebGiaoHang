import React, {useState} from 'react'
import Tracuu from './tracuu'
import Navbar from '../homepage/Navbar';
import Sidebar from '../homepage/Sidebar';
import Footer from '../homepage/Footer/Footer';

const TracuuPage = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Tracuu/>
            <Footer/>
        </div>
    )
}
export default TracuuPage;