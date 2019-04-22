import React from 'react';

//class Ninja extends Component {
//const Ninja = (props) => {
const Ninja = ({ninjas, deleteNinja}) => {
    //render(){
        //const { ninjas } = props;
        /* const ninjaList = ninjas.map(ninja => {
            if(ninja.age > 25) {
            return(
                <div className="ninja" key = { ninja.id }>
                    <p>Name: { ninja.name }</p>
                    <p>Age: { ninja.age }</p>                   
                    <p>Belt: { ninja.belt }</p>
                </div>
            )
            } else {
                return null
           }

        }) */

        const ninjaList = ninjas.map(ninja => {
            return ninja.age > 25 ?(
                <div className="ninja" key = { ninja.id }>
                    <p>Name: { ninja.name }</p>
                    <p>Age: { ninja.age }</p>                   
                    <p>Belt: { ninja.belt }</p>
                    <button onClick = {() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
                </div>
            ): null;
        })
        return(
            <div className = 'ninja-List'>
                { ninjaList }
            </div>

        )
   // }
}

export default Ninja;