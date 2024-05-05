import React from 'react';
import ChildClass from './Child';
class UserClass extends React.Component {
  constructor(props) {
    super(props);
   //  console.log(this.props.name + 'constructor called');
    this.state = {
      userInfo: {
         name: 'ashish',
         location: 'defaultLocation',
         avatar_url: 'default'
      }
    }
  }

  async componentDidMount() {
   const data = await fetch("https://api.github.com/users/ashish1807");
   const json = await data.json();
   console.log(json)

   this.setState({
      userInfo: json
   })
  }
  render() {
   // console.log(this.props.name + 'render called');
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
      <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        {/* <ChildClass name={this.props.name}/> */}
      </div>
    );
  }
}

export default UserClass;
