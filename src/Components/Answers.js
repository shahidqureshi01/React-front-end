/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

const question = {
    margin: '20px',
};

const ans = {
    color: '#ffe81f',
    listStyleType: 'none'
}

class Answers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { films } = this.props.data.data;

        return(
            <div className='main'> 
                <div style={ question }>Which of all StarWarS movies has longes opening crawl?</div>
                <div style= { ans }>{ films.longestCrawl }</div>
                <div style={ question }>Which Character (Person) appeared in the most of StarWars films?</div>
                <div style= { ans }>{ films.mostAppearedActor }</div>
                <div style= {question }>Which species appeared in the  most number of the StarWars films?</div>
                <div style= { ans }>
                    {
                        films.mostAppearedSpecie.map(s => {
                            return <li key={ s }>{ s }</li>
                        })
                    }
                </div>
                <div style={ question }>What planet in Star Wars universe provided largest number of vehicle pilots?</div>
                <div style= { ans }>
                    {
                        films.pilots.map(p => {
                            return <li key={ p }> { p }</li>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Answers;