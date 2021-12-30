import React, { Component } from 'react';
import Layout from '../../components/layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, GridColumn, Button, GridRow } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();

        console.log(summary);
        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            RequestCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumContribution,
            RequestCount,
            approversCount
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'Manager requests for withdrawal',
                style: {'overflowWrap':'break-word'}
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'Contribution to become an Approver'
            },
            {
                header: RequestCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money'
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of donators'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'Campaign Balance to get Approved'
            } 

        ];

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
            <h3>Campaign Details</h3>
            <Grid>
                <GridRow>
                    <GridColumn width='10'>
                        {this.renderCards()}   
                    </GridColumn>
                    <GridColumn width='6'>
                        <ContributeForm address={this.props.address} />
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Link route={`/campaigns/${this.props.address}/requests`}>
                            <a>
                                <Button primary>View Requests</Button>
                            </a>
                        </Link>
                    </GridColumn>
                    
                </GridRow>

            </Grid>
            </Layout>
        )
    }
}

export default CampaignShow;