import React , {PureComponent} from 'react';
import Person from './Person/Person.component';


class Persons extends PureComponent {

// static getDerivedStateFromProps(props , state) {
//     console.log('[Persons.js] getDerivedStateFromProps');
//     return state;
// }

// shouldComponentUpdate(nextProps ,nextState ) {
//     console.log('[Persons.js] shouldComponentUpdate');
    
       
//         if(nextProps.persons !== this.props.persons) {
//           return true;
//         }else{
//           return false;
//         }
        
      
    
// }

getSnapshotBeforeUpdate(prevProps , prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
}

//componentDidMount(){
  //  console.log('[Person.js] componentDidMount');
//}

    render(){
    console.log('[persons.js] rendering...');
    console.log('blalbabla ', this.props.deleted);
     return  this.props.persons.map((person,index) => {
        return <Person 
                      key={person.id} 
                      name={person.name} 
                      age={person.age}
                      change={(event)=>{this.props.changed(event,person.id)}} 
                      delete={() =>{this.props.deleted(index)}}
                />
      })
    }
    };
export default Persons; 