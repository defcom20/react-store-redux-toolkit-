import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

const PokemnApp = () => {

    const { isLoading, pokemons = [], page } = useSelector(state => state.pokemons);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch( getPokemons() )
    }, [])

    return ( 
        <>
            <h1 className="text-5xl mb-8">PokemnApp</h1>
            <hr />
            <span className="text-red-600">{ isLoading? 'Cargando...': '' }</span>
            <ul>
                {
                    pokemons.map( ({name}) => {
                        return (<li key={name}> {name} </li>)
                    })
                }
            </ul>
            <button className="bg-gray-600 text-white px-6 py-1 rounded-full mt-8" disabled={isLoading} onClick={ ()=> dispatch( getPokemons(page) ) }>
                Next
            </button>
        </>
     );
}
 
export default PokemnApp;