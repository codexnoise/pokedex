import PokemonCard from "./PokemonCard";
import "../styles/PokemonList.css";

const PokemonList = ({ pokemons }) => {
  return (
    <>
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.sprites.front_default}
            abilities={pokemon.abilities}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
     
    </div>
    <footer>developed with 💚 by @codexnoise</footer>
   </>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
