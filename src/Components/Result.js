import React from 'react';
import Button from './Button';
import Answers from './Answers';

class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          showAns : false,
          APIData: ''
        };
    }

    
    handleClick =  () => {
    
      const requestBody = {
        query: `
          query {
            films {
              longestCrawl
              mostAppearedActor
              mostAppearedSpecie
              pilots
            }
          }
        `
      };

      const options = { 
        method: 'POST',
        body: JSON.stringify(requestBody),
        cors: 'cors',
        headers: {'Content-Type': 'application/json' }
      }  
          
      fetch('http://localhost:3000/graphql',options)
      .then((response) => {
          return response.json()
      })
      .then(data => {
        console.log(JSON.stringify(data));
        this.setState({
          showAns: true,
          APIData: data
        });
      })
      .catch(error => console.log(error))
    
    }

    render() {
        const {showAns} = this.state;
      
        return(
            <div>
                <Button label= "Do or don't. There's no try" handleClick={this.handleClick} />
                { showAns  ? <Answers data={this.state.APIData}/>  : null  }
            </div>
        );
    }
}

export default Result;