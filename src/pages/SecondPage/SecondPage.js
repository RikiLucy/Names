import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SumService } from '../../services';
import * as resultActions from '../../store/actions/resultActions';

class SecondPage extends Component {
  state = {
    first: null,
    second: '',
    sum: '',
    error: '',
  };
  
  handleChange(e) {
    const { target: { value, name } } = e;
    this.setState({ [name]: value });
  }
  
  async sendNumbers() {
    const { first, second } = this.state;
    const { addResult } = this.props.resultActions;
    
    try {
      const { sum } = await SumService.getSum({ first, second });
      addResult({ first, second, sum });
      this.setState({ error: '' })
    } catch (error) {
      this.setState({ error: error.message })
    }
  }
  
  render() {
    const { first, second, error } = this.state;
    const { results } = this.props;
    
    return (
      <div>
        <br />
        <input value={first || ''} type="number" name="first" onChange={e => this.handleChange(e)} />
        {` + `}
        <input value={second || ''} type="number" name="second" onChange={e => this.handleChange(e)} />
        {` = `}
        <button onClick={() => this.sendNumbers()}>send</button>
        <br/>
        {(error)}
        
        {results.map((result, resultId) => {
          return (
            <p key={resultId}>
              {result.first || 0} + {result.second || 0} = {result.sum}
            </p>
          );
        })}
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.result,
});

const mapDispatchToProps = dispatch => ({
  resultActions: bindActionCreators(resultActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);
