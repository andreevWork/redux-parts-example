import React, { PureComponent } from 'react';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import './BeerItem.css';
import {Link} from "react-router-dom";

export class BeerItem extends PureComponent {
    render() {
        const {abv, id, nameDisplay, style, description} = this.props.beer;
        const {category} = style;

        return <Card>
            <CardMedia>
                <img
                    className="beer-item-img"
                    src={`${process.env.PUBLIC_URL}/img/beers/${category.id}.jpg`}
                    alt={nameDisplay}
                />
            </CardMedia>

            <CardContent className='beer-item-info'>
                <Typography noWrap={true} type="headline" component="h2">
                    {nameDisplay}
                </Typography>

                <div className="beer-item-row">
                    <Typography className="beer-item-category" noWrap={true} type="subheading">
                        {category.name}
                    </Typography>
                    {abv && <Chip className="beer-item-abv" label={`${abv}%`} />}
                </div>

                <Typography className="block-with-text"  color="secondary" component="p">
                    {description}
                </Typography>
            </CardContent>

            <CardActions>
                <Button dense color="primary">
                    <Link to={`/beer/${id}`} >
                        learn more
                    </Link>
                </Button>
            </CardActions>

        </Card>;
    }
}

BeerItem.propTypes = {
    beer: PropTypes.shape({
        abv: PropTypes.string,
        id: PropTypes.string.isRequired,
        nameDisplay: PropTypes.string.isRequired,
        description: PropTypes.string,
        style: PropTypes.shape({
            category: PropTypes.shape({
                name: PropTypes.string.isRequired,
                id: PropTypes.number.isRequired,
            }).isRequired
        }).isRequired
    }).isRequired
};