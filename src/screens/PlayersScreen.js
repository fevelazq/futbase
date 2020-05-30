import React from 'react';
import { NoData } from "../components/NoData";
import { Wrapper } from '../components/Wrapper';

export default class PlayersScreen extends React.Component {
    render() {
        return (
            <Wrapper>
                <NoData />
            </Wrapper>
        )
    }
}