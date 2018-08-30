import React, { Component } from 'react';
import { NameService } from '../../services';

class FirstPage extends Component {
  state = {
    names: [],
    filteredUsers: [],
    isLoaded: true,
    error: '',
  };
  
  async componentWillMount() {
    try {
      const names = await NameService.getNames();
      this.setState({ names, filteredUsers: names, isLoaded: false });
    } catch (error) {
      this.setState({ error: error.message })
    }
  }
  
  handleChange(e) {
    const { target: { value } } = e;
    const { names: { data: names } } = this.state;
    
    names.data = names.filter(user => user.name.toLowerCase().includes(value.toLowerCase().trim()));
    
    this.setState({ filteredUsers: names });
  }
  
  render() {
    const {
      error, isLoaded, filteredUsers: { data: names }
    } = this.state;
    
    return (
      <div>
        <br />
        <input
          type="text"
          onChange={e => this.handleChange(e)}
        />
        
        {' '} amount {names && names.length}
        
        {isLoaded && (
          <div>Loading...</div>
        )}
        
        {error}
        
        {names && names.map((user) => {
          return (
            <div key={user.id}>
              <b className="name_id">{user.id}</b>
              {user.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default FirstPage;
