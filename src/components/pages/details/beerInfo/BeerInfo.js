import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import './BeerInfo.css'
import {BeerInfoTabs} from "./tabs/BeerInfoTabs";


export class BeerInfo extends PureComponent {
    render() {
        const {name, description, style} = this.props.beer;
        const {category} = style;

        return <section className="beer-info">
            <Grid container justify="space-between">

                <Grid xs item>
                    <Paper className="beer-info-paper" elevation={4}>
                        <Typography type="title" component="h3">
                            {name}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item>
                    <img width="200" src={`${process.env.PUBLIC_URL}/img/beers/${category.id}.jpg`} alt=""/>
                </Grid>


                <Grid xs={12} item>
                    <Paper className="beer-info-paper" elevation={4}>
                        <Typography>
                            {description}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid xs={12} item>
                    <Paper elevation={4}>
                        <BeerInfoTabs beer={this.props.beer}/>
                    </Paper>
                </Grid>
            </Grid>
        </section>;
    }
}

BeerInfo.propTypes = {
    beer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
};