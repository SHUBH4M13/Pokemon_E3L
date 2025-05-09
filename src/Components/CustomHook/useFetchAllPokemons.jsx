import { useState , useEffect } from "react";
import axios from "axios";

export default function useFetchAllPokemons() {

    const [ isLoading , setisLoading ] = useState(false);
    const [ AllPokemon , setAllPokemon ] = useState(null);
    const [ isError , setisError ] = useState(false);

    useEffect( () => {

        const fetchData = async () => {
            try {
                setisLoading(true)
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`)
                setAllPokemon(res);
                setisError(false);
            } catch (error) {
                setisError(true);
                setData(null);
           } finally {
            setisLoading(false);
           }
        };

        fetchData(); 

    } , [] )

    return { AllPokemon , isLoading , isError }

}
