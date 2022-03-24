import React, { lazy } from "react";

const Navbar = lazy(() => import("app2/Navbar"));
const Footer = lazy(() => import("app2/Footer"));

function App() {
    return (
        <div>
            <React.Suspense fallback={null}>
                <Navbar/>
            </React.Suspense>
            Hello Microfrontend
            <React.Suspense fallback={null}>
                <Footer/>
            </React.Suspense>
        </div>
    );
}

export default App;