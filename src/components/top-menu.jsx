import React from 'react';

export default class TopMenu extends React.Component{
    render(){
        return(
            <div className = "top-menu" >
                <div className="dropdown">
                    <button className="dropbtn">File</button>
                    <div className="dropdown-content">
                        <div className = "menu border-bottom">New Note</div>
                        <div className = "menu">Export Note</div>
                        <div className = "menu border-bottom">Print</div>
                        <div className = "menu border-bottom">Preferences</div>
                        <div className = "menu">Exit</div>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Edit</button>
                    <div className="dropdown-content">
                        <div className = "menu">Undo</div>
                        <div className = "menu border-bottom">Redo</div>
                        <div className = "menu">Cut</div>
                        <div className = "menu">Copy</div>
                        <div className = "menu">Paste</div>
                        <div className = "menu border-bottom">Select All</div>
                        <div className = "menu">Search Notes</div>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">View</button>
                    <div className="dropdown-content">
                        <div className = "sub-dropdown" >
                            Font Size
                            <div className = "sub-dropdown-content" >
                                <div className = "menu">Bigger</div>
                                <div className = "menu">Smaller</div>
                                <div className = "menu">Reset</div>
                            </div>
                        </div>
                        <div className = "sub-dropdown" >
                            Sort Type
                            <div className = "sub-dropdown-content" >
                                <div className = "menu">Last Modified</div>
                                <div className = "menu">Last Creaed</div>
                                <div className = "menu">Alphabetical</div>
                                <div className = "menu">Reveresed</div>
                            </div>
                        </div>
                        <div className = "sub-dropdown" >
                            Note Display
                            <div className = "sub-dropdown-content" >
                                <div className = "menu">Comfy</div>
                                <div className = "menu">Condensed</div>
                                <div className = "menu">Expanded</div>
                            </div>
                        </div>
                        <div className = "sub-dropdown" >
                            Theme
                            <div className = "sub-dropdown-content" >
                                <div className = "menu">Light</div>
                                <div className = "menu">Dark</div>
                            </div>
                        </div>

                        <div className = "sub-dropdown" >Toggle Full Sreen</div>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Window</button>
                    <div className="dropdown-content">
                        <div className = "menu">Minimize</div>
                        <div className = "menu">Close</div>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Help</button>
                    <div className="dropdown-content">
                        <div className = "menu border-bottom" href="#">Help & Support</div>
                        <div className = "menu">About SimpleNote</div>
                    </div>
                </div>
            </div>
        )
    }
}