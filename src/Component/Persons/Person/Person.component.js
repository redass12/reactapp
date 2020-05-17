import React , {Fragment}  from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';


class Person extends React.Component  {


    render(){


    console.log('[person.js] rendering...');


    return (
    //Fragment is a built in react high order component that work exaclty like our Auxiliary component
    // <Fragment>
    //     <p key='i1' onClick={this.props.delete}>My name is {this.props.name} and i am {this.props.age} old!</p>
    //     <input key='i2' type='text' value={this.props.name} onChange={this.props.change}/>
    // </Fragment>
    <Auxiliary>
    <p key='i1' onClick={this.props.delete}>My name is {this.props.name} and i am {this.props.age} old!</p>
    <input key='i2' type='text' value={this.props.name} onChange={this.props.change}/>
    </Auxiliary>

    );
} 


    //----------------------------------------------------------------------
    // <Auxiliary className={classes.Person}>
    //     <p key='i1' onClick={this.props.delete}>My name is {this.props.name} and i am {this.props.age} old!</p>
    //     <input key='i2' type='text' value={this.props.name} onChange={this.props.change}/>
    // </Auxiliary>
    // )
    //-------------------------------------------------------------------
        //one way to not use a wrapper element 
    // return [
    //     <p key='i1' onClick={this.props.delete}>My name is {this.props.name} and i am {this.props.age} old!</p>,
    //     <input key='i2' type='text' value={this.props.name} onChange={this.props.change}/>
    // ]

     
}

export default withClass(Person,classes.Person);