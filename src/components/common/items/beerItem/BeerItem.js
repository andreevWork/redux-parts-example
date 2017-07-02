import React, { PureComponent } from 'react';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';

export class BeerItem extends PureComponent {
    render() {
        return <Card >
            <CardMedia>
                <img src={'http://www.worldbeer.org/images/brewing/unfiltered-pilsner-urquell.jpg'} alt="Contemplative Reptile" />
            </CardMedia>
            <CardContent>
                <Typography type="headline" component="h2">
                    Lizard
                </Typography>
                <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over
                    6,000 species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button dense color="primary">Share</Button>
                <Button dense color="primary">Learn More</Button>
            </CardActions>
        </Card>;
    }
}

BeerItem.propTypes = {
    beer: PropTypes.shape({

    }).isRequired
};