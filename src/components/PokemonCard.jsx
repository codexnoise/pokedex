import StartButton from "./StartButton";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlices";

const PokemonCard = ({ name, image, abilities, id, favorite }) => {
  const dispatch = useDispatch();
  const allAbilities = abilities
    .map((ability) => ability.ability.name)
    .join(", ");

  const handleFavorites = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StartButton isFavorite={favorite} onClick={handleFavorites} />}
    >
      <Meta description={allAbilities} />
    </Card>
  );
};

export default PokemonCard;
