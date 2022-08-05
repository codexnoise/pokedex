import StartButton from "./StartButton";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlices";
import { setModal } from "../slices/uiSlices";

const PokemonCard = ({ name, image, abilities, id, favorite }) => {
  const dispatch = useDispatch();
  const allAbilities = abilities
    .map((ability) => ability.ability.name)
    .join(", ");

  const handleFavorites = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  const handleModal = () => {
    alert(`id: ${id}`);
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      onClick={() => handleModal()}
      extra={<StartButton isFavorite={favorite} onClick={handleFavorites} />}
    >
      <Meta description={allAbilities} />
    </Card>
  );
};

export default PokemonCard;
