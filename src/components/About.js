import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">


            <div className="Three columns main-col">

               <h2>Sobre Mim</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               
            </div>
         </div>
      </section>
    );
  }
}