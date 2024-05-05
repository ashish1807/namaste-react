import React from 'react';
class ChildClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.name +' Child constructor called');
  }

  componentDidMount() {
   //console.log(this.props.name +' Child Component did mount');
 }
  render() {
   //console.log(this.props.name +' Child render called');
    return (
      <div>
        <h1>Child component</h1>
      </div>
    );
  }
}


export default ChildClass