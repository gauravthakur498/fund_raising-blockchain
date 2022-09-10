import React, { Component } from 'react';
import {Cart,Button} from 'semantic-ui-css';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import { Card } from 'semantic-ui-react';

class CampaignIndex extends Component{
    static async getInitialProps(){
        const campaigns=await factory.methods.getDeployedCampaigns().call();
        return {campaigns};
    }
    renderCampaigns(){
        const items=this.props.campaigns.map(address=>{
            return {
                header:address,
                description:(
                    <Link route={'/campaigns/${address}'}>
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid:true
            };
        });

        return <Card.Group items={item}></Card.Group>
    }
    render(){
        return(
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    <Link route="campaign/new">
                        <a>
                            <Button floated='right' 
                                content="Create Campaign" 
                                icon="add circle" primary>
                                </Button>
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    }
}
export default CampaignIndex;