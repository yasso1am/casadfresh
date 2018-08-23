import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react';

class Home extends Component {

  componentDidMount(){
    const { user } = this.props
    this.setState({
      name: user.first_name,
    })
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <Header as='h2' textAlign='center'> { user && user.first_name } </Header>
        <Header as='h1' textAlign='center'> Welcome to Casa<i>d</i>fresh</Header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Home)
