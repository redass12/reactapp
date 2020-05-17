import React , {useEffect} from 'react';

const Cockpit = (props) => {

//useEffect by default takes a function that will run for every runder cycle
//it's componentDidMount and componentDidUpdate combined in one hook
useEffect(() => {
  console.log('[Cockpit.js] useEffect');
  //Http request .....
   setTimeout(()=>{
    alert('Saved data to cloud!');
  },1000);

  return () => {
    //clearTimeout(timer);
    console.log('[cockpit.js] cleanup work in useeffect')
    
  }

}, []);


useEffect(() => {
  console.log('[Cockpit.js] 2 useEffect');

  return () => {
    console.log('[cockpit.js] 2 cleanup work in useeffect')
  }
})

/*if you want useEffect to run just wen 
the componentdidMount ther is a short cut to do that 
: use empty array []
because when useEffect dosen't a dependecy it will just one time because
that's the default 
and you can use multiple thing's that you depend on [person,persons,....]
*/
//props.persons is used to say "run useEffect only when person get changed(updated)"
//useEffect() you can have as many useEffect as you want 
const dynclass = [];

    if(props.person.length <=2){
      dynclass.push('red');
    }
    if(props.person.length < 2){
      dynclass.push('bold');
    }
    
    return ( 
        <div>
            <h1>Reproducing the same app</h1>
             <p className={dynclass.join(' ')}>This is really Working</p>
             <button onClick={props.toggle}>Toogle Persons</button>
        </div>
        );

};

export default React.memo(Cockpit);