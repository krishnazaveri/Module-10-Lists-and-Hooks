import React from 'react'

class Componentlifecycle extends React.Component {

/* before mounting we need to create constructor to initialize the state */


  constructor()
  {

    console.log('Inside constructor...')
    super();
    this.state = {count:1}
  }

  
/* After render this method comes and componentDidMount can access the render part's noted or data or anything
and can be used for api calls ,settimeouts or to add event listeners and it calls only once.*/

  componentDidMount()
  {
    console.log("Mounted...!")
    /* this.setState({
        count :20
    }) */
  }

  inc = ()=>{

    this.setState({count:this.state.count+1})
  }


 
  render()
  {

    console.log('inside render...')
    return (
      <div>
        {this.state.count}
        <button onClick={this.inc}>Increment</button>
       
      </div>
    )
  }

 

  // shouldComponentUpdate()
  // {
  //   console.log("Update??...")
  //   return true;
  // }

  // componentDidUpdate()
  // {
  //   console.log("updated...1")
  // }
}

export default Componentlifecycle