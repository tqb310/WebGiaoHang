import React, {useState} from 'react'
import Buucuc from './buucuc'
import Navbar from '../homepage/Navbar';
import Sidebar from '../homepage/Sidebar';
import Footer from '../homepage/Footer/Footer';

const BuucucPage = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Buucuc/>
            <Footer/>
        </>
    )
}
export default BuucucPage;