import React from 'react';
import UserClass from "./UserClass";
import UserContext from './../utils/UserContext'

class About extends React.Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
    }

   render() {
      return (
         <div>
            <h1>About</h1>
            <div>
               <UserContext.Consumer>
                  {({loggedInUser}) => <h1 className='text-xl font-bold'>{loggedInUser}</h1>}
               </UserContext.Consumer>
            </div>
            <h2>This is Namaste React Web Series</h2>
            {/* <User name={"Ashish Mishra(function)"}/> */}
            <UserClass name={"First "} location={"Mumbai"}/>
         </div>
      )
   }
}

export default About;