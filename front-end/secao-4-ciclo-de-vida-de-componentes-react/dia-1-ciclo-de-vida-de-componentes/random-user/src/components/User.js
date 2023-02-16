import React from 'react';

class User extends React.Component {
  state = {
    user: [],
  };

  componentDidMount() {
    const url = ' https://api.randomuser.me/';
    fetch(url)
      .then((resposta) => resposta.json())
      .then((data) => {
        this.setState({
          user: data.results,
        });
      });
  }

  render() {
    return (
      <div />
    );
  }
}

export default User;
