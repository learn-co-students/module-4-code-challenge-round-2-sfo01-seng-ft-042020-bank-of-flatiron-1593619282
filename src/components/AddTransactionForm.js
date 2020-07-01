import React, { Component } from "react";

class AddTransactionForm extends Component {
  
  state = {
    date: '',
    description: '',
    category: '',
    value: []
  }


  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    
  }

  handleValue = event => {
    let num = Number(event.target.value)

    this.setState({ value: num })
  }

  handleChange = event => {
      console.log(event.target.value)

      this.setState({ [event.target.name]: event.target.value})

      fetch("http://localhost:6001/transactions", {method: 'POST', 
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        date: this.state.date, 
        description: this.state.description, 
        category: this.state.category, 
        amount: this.state.amount})
      }).then(res=>res.json())
      .then(res => console.log(res));
    // this.setState({
    //   [event.target.name]: event.target.value
    
  }
  
 
 
 
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Description"  />
            <input type="text" name="category" value={this.state.category} onChange={this.handleChange} placeholder="Category" />
            <input
              type="number"
              name="amount"
              value={this.state.value}
              onChange={this.handleValue}
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
