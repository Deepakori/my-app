import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';



    class Avatar extends Component{
        
        constructor(){
            super();
            this.state = {
                name : "Parikh Info Solution"
            }

        }
        namechange(){
            this.setState({
                name : "Welcome to Parikh Info Solution Team"
            })
        }
        render(){
            const avatarlistarray= [
                {
                    id:1,
                    name:"Deepa",
                    work:"Web Developer Intern"
                },
                {
                   id:2,
                   name:"Fatima",
                   work:"Graphic Designer"
               },
               {
                   id:3,
                   name:"Salman",
                   work:"SEO Intern"
               },
               {
                   id:1,
                   name:"Akshay",
                   work:"SEO Expert"
               }
            ]
       
            const arraycard = avatarlistarray.map( (avatarcard, i) => {
                return <Avatarlist key={i} id={avatarlistarray[i].name} name={avatarlistarray[i].name}
                                    work={avatarlistarray[i].work}/>
       
            }
       
            )
            return (
                <div className="mainpage tc">
                    <h1>{this.state.name}</h1>
                        {arraycard}
            
                    <button onClick= { () => this.namechange () }> Join Our Team </button>
              
             </div>
            )
        }
    }
     


export default Avatar;