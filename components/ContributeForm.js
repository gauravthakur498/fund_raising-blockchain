import React, { Component } from 'react';
import {Form,Input,Message,Button} from 'semantic-ui-react';
import web3 from '../etherum/campaign';
import Campaign from '../etherum/campaign';
import {Router} from '../routes';

class ContributeForm extends Component{
    state={
        value:'',
        errorMessage:'',
        loading:false
    };

    onSubmit=async event =>{
        event.preventdefault();
        const campaign=Campaign(this.props.address);
        this.setState({loading:true,errorMessage:''});
        try {
            const accounts=await web3.eth.getAccounts();
            await campaign.method.contribute().send({
                from:accounts[0],
                value:web3.utils.toWei(this.state.value,'ether')
            });
            Router.replaceRoute('/campaigns/${this.props.addres}');
            
        } catch (err) {
            this.setState({errorMessage:err.message});
        }
        this.setState({loading:false,value:''});
    };

    render(){
        return(
            <Form onSubmit={this.onSubmit} error={!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to contribute</label>
                    <Input value={this.state.value} 
                        onChange={event=>this.setState({value:event.target.value})}
                        label='ether' labelPosition='right'>
                        </Input>
                </Form.Field>
                <Message error header="error occured." content={this.state.errorMessage}>

                </Message>
                <Button primary loading={this.state.loading}>
                    Contribute
                </Button>
            </Form>
        );
    }
}

export default ContributeForm