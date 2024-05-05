import User from "./User";
import UserClass from "./UserClass";
import React from 'react';

class About extends React.Component {
   constructor(props) {
      super(props)
      console.log('About constructor called')
   }

   componentDidMount() {
      console.log('About Component did mount');
    }

   render() {
      console.log('About render called');
      return (
         <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            {/* <User name={"Ashish Mishra(function)"}/> */}
            <UserClass name={"First "} location={"Mumbai"}/>
         </div>
      )
   }
}

export default About;