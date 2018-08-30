import React, { Component } from 'react';
import Select from 'react-select';
import { NameService } from "../../services";

class ThirdPage extends Component {
  state = {
    names: [],
    filteredUsers: [],
    error: '',
  };
  
  async componentWillMount() {
    try {
      const names = await NameService.getNames();
      let prepareNames = [];
  
      names.data.map((user, id) => {
        prepareNames.push({ value: user.name, label: `${id} ${user.name}` });
      });
  
      this.setState({ filteredUsers: prepareNames.slice(0, 300), names: prepareNames });
    } catch (error) {
      this.setState({ error: error.message })
    }
  }
  
  inputChange(value) {
    let { names } = this.state;
    
    names = names.filter(user => user.value.toLowerCase().includes(value.toLowerCase().trim()));
    
    this.setState({ filteredUsers: names.slice(0, 300) });
  }
  
  render() {
    const { filteredUsers, error } = this.state;
    
    return (
      <div>
        {error}
        <br />
        <Select
          options={filteredUsers}
          onInputChange={e => this.inputChange(e)}
        />
      </div>
    );
  }
}

export default ThirdPage;
