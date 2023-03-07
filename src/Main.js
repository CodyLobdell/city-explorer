import React from 'react';
import City from './City';


class Main extends React.Component{

  render() {

    return (
      <main>
        <City data={this.props.data}/>
      </main>
    );
  }


}

export default Main;