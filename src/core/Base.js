import React from 'react';
import Nav from './Nav';


 const Base =({
     title = "My Title",
     description = "My Description",
     className="bg-dark text-white p-4",
     children

 }) =>{
    return (
        <div>
            <Nav/>
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center ">
                    <h2 className="display-4"> {title}</h2>
                    <p className=" lead"> {description}</p>

                </div>
                <div className={className}> {children}</div>
            </div>
            
           <footer className="footer bg-dark mt-auto py-3">
               <div className="container-fluid bg-success text-white text-center py-3"  > 
               <h4>if you got any Questions ,feel free to ask</h4>
               <button className="btn btn-warning btn-lg">Contact Us</button>
               </div>
               <div className="container text-muted">
                   An amazing place to buy <span className="text-white">wildlife</span> at your measures and frames
               </div>
           </footer>
        </div>
    )
}

export default Base;