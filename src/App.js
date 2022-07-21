import "./App.css";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./static/logo.svg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "./api";
import { setPokemons } from "./actions";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fecthPokemons = async () => {
      const pokemonsRes = await getPokemons();
      dispatch(setPokemons(pokemonsRes));
    };
    fecthPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={5} offset={10}>
        <img src={logo} alt="pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
