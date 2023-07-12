import "./App.css";
import { Col, Spin } from "antd";
import { isMobile } from 'react-device-detect';
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./static/logo.svg";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchPokemonsWithDetails } from "./slices/dataSlices";
import PokeModal from "./components/PokeModal";

function App() {
  const pokemons = useSelector(
    (state) => state.data.pokemonsFiltered,
    shallowEqual
  );

  const loading = useSelector((state) => state.ui.loading);
  const showModal = useSelector((state) => state.ui.showModal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className="App">
      {showModal && <PokeModal />}
      <Col span={isMobile ? 16 : 8} offset={isMobile ? 4 : 8}>
        <img src={logo} alt="pokedux" />
      </Col>
      <Col span={isMobile ? 18 : 10} offset={isMobile ? 3 : 7}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
