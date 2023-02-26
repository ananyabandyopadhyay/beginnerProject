import React from 'react';
import Tabs from "../Component/Tab"

function Layout({ children }) {
    return (
        <div className='layout-wrapper p-ripple-disabled'>
                <div className='layout-content'>
                    <header className="App-header">
                        <Tabs />
                    </header>
                    <body className="App-body">
                            {children}
                    </body>
                </div>
        </div>
    );
}

export default Layout;
