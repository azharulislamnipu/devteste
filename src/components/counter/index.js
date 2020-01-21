import React, { Component } from 'react';
import CounterItem from './CounterItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export default class Counters extends Component {

  state = {
    counterItems: [{
      counternumber: 490,
      type:"lins of code",
      icon:'fa-code',
      duration:2
    
    },
    {
      counternumber: 545,
      type:"Cup of Tea",
      icon:'fa-coffee',
      duration:2.5
    
    },
    {
      counternumber: 690,
      type:"lins of code",
      icon:'fa-rocket',
      duration:3
    
    },
    {
      counternumber: 990,
      type:"lins of code",
      icon:'fa-heart-o',
      duration:4
    
    },
      
    ]
}




showCounterItem = () => (
  this.state.counterItems.map((items,key) => (
      <CounterItem key={key} number={items.counternumber} type={items.type} icon={items.icon} duration={items.duration} />
  ))
)

 
  render() {

    return (
      <section className="counter-area">
        <Container>
          <Row className="align-items-center">
           {this.showCounterItem()}
          </Row>
          </Container>
      </section>
    )
  }
}
