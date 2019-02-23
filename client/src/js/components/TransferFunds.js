import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default class TransferFunds extends Component {
  transferFunds = async(event) => {
    event.preventDefault();
    console.log("transferFunds user: ", this.userTransfer.value)
    console.log("transferFunds amount: ", this.amountTransfer.value)
    await this.props.contract.methods.transferFunds(
      this.userTransfer.value,
      this.props.web3.utils.toWei(this.amountTransfer.value, 'ether')
    ).send({from:this.props.account});
  }

  render() {
    return (
      <Container>
        <h3>Transfer Funds</h3>
        <Form className="form-horizontal">
          <Form.Group>
            <Form.Label htmlFor="user">Recipient Address</Form.Label>
            <Form.Control 
              type="text"
              ref={(input) => { this.userTransfer=input; }}
              size="sm"
              placeholder="0x0000000000000000000000000000000000000000"
              maxLength="42"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="amount">Amount (in full tokens)</Form.Label>
            <Form.Control
              type="number" 
              ref={(input) => { this.amountTransfer=input; }} 
              placeholder = "10"
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.transferFunds}>
            Transfer
          </Button>
        </Form>
      </Container>
    );
  }
}