import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/testy.jpeg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>+{resumeData.phone}</span>
                     <br></br>
                     <span>{resumeData.email}</span>
                     <br></br>
                     <br></br>

                     <div class="columns download"><p><a class="button" href="https://drive.google.com/file/d/1SJC7nVDV14OHZOWNATiUXp7angISM4fc/view?usp=sharing">
                        <i class="fa fa-download"></i>Resume</a></p></div>
                    
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}