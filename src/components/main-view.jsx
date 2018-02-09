import React from 'react';
import MainViewSect1 from './main-view-sect1';
import MainViewSect2 from './main-view-sect2';
import MainViewSect3 from './main-view-sect3';
import MainViewSect4 from './main-view-sect4';;

export default class MainView extends React.Component{
    render(){
        return(
            <div className = "main-view" >
                <div className="main-view-top">
                    <MainViewSect1 />
                    <MainViewSect2 />
                </div>
                <div className="main-view-bottom">
                    <MainViewSect3 />
                    <MainViewSect4 />
                </div>
            </div>
        )
    }
}