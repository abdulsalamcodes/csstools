import React from 'react'
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar'
import Topbar from '../components/Topbar/Topbar'
import './Layout.css';

function IndexLayout(props) {
    return (
        <div className="main_layout">
            <Sidebar />
            <div className="content_layout">
                <Topbar />
                <div>{props.children}</div>
                <Footer />
            </div>
        </div>
    )
}

export default IndexLayout
