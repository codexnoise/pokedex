import "./App.css";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./static/logo.svg";
import { useEffect, useState } from "react";
import { getPokemons } from "./api";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fecthPokemons = async () => {
      const pokemonsRes = await getPokemons();
      setPokemons(pokemonsRes);
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
