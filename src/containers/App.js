import React, { Component } from 'react';
import Persons from '../Component/Persons/Persons.component';
import Cockpit from '../Component/Cockpit/Cockpit';
import classes from './App.module.css';
import Auxiliary from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';
class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    person : [
      { id : 'sdfsdf' , name : 'reda' , age : '22'},
      { id : 'werwer' , name : 'azzedine' , age : '19'},
      { id : 'lklklk' , name : 'zakaria' , age : '12'},
  
    ],
    showperson : false,
    showCockpit:true,
    countUpdate: 0
  }

 
//Life cycle methode  

static getDerivedStateFromProps(props , state) {
  console.log('[App.js] getDerivedStateFromProps', props);
  return state;
}

componentDidMount() {
  console.log('[App.js]  componentDidMount');
}

componentWillMount(){
  console.log('[App.js]  componentWillMount');
}

componentDidUpdate() {
  console.log('[App.js] componentDidupdate');
}

shouldComponentUpdate(nextProps,nextState) {
  console.log('[App.js] shouldComponentUpdate ');
  
    return true;
  
  
}


//normal methode 
  tooglePerson = () => {

    let toogle = !this.state.showperson;

    this.setState({showperson:toogle});

    console.log(this.state.showperson);

  }

  changeName = (event,id) => {

    //1: recuperina l'index dial l'person  
    const indexPerson = this.state.person.findIndex(person => {
      return person.id === id;
    });

    //2: creana object jdid back n copiw fih ghir l person li bghina nbadlo

    const personToChange = {
      ...this.state.person[indexPerson]
    };

    console.log(personToChange);
    //3 daba ghadi nbdlo lvalue dialo 7assaba event.target.value li 3andna

    personToChange.name = event.target.value;

    //4 gadi nrecuperiw ga3 lpersons li kaynin (li homa 3ibara 3an array)

    const persons = [...this.state.person];

    //5 we change the person that we want to change accttually

    persons[indexPerson]= personToChange;

    return (
      this.setState((prevState , props) => {

       return  {person:persons ,
                countUpdate : prevState.countUpdate +1 };

      })
      
       
    )


  }

 deletePerson = (index) => {
  const NewPerson = [...this.state.person];
  NewPerson.splice(index,1);
  this.setState({person:NewPerson});
 }


  render() {
    console.log('[App.js] from render')
    let Personss = null;

    if(this.state.showperson === true){
    Personss = (
    <div>
      <Persons persons={this.state.person} 
               deleted={this.deletePerson}
               changed={this.changeName}/>
    </div>
    );
  }
  
    return (

      // <WithClass classes={classes.App}>
      //   <button onClick={()=>{this.setState({showCockpit:false})}}>Remove Cockpit</button>
      //   {this.state.showCockpit?  ( 
      //   <Cockpit person={this.state.person} toggle={this.tooglePerson}/>
      //   ) : null}
      //  {Personss}
      // </WithClass>



    <Auxiliary>
        <button onClick={()=>{this.setState({showCockpit:false})}}>Remove Cockpit</button>
        {this.state.showCockpit?  ( 
        <Cockpit person={this.state.person} toggle={this.tooglePerson}/>
        ) : null}
        {Personss}
    </Auxiliary>

    );
  }
 
}

export default withClass(App , classes.App);
