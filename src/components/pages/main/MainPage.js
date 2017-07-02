import React, { PureComponent } from 'react';
import {Beers} from "./beers/Beers";

export class MainPage extends PureComponent {
    render() {
        return <div>
            <Beers />
        </div>;
    }
}