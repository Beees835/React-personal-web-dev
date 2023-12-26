import React from 'react';
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Resume from "./components/Resume/Resume.jsx";

function App() {
    return (
        <>
            <div className="main-content">
                <Resume />
            </div>
            <Footer />
        </>
    );
}

export default App;
