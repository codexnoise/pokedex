import StartButton from "./StartButton";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlices";
import { setModal, setIdModal } from "../slices/uiSlices";

const PokemonCard = ({ name, image, abilities, id, favorite }) => {
  const dispatch = useDispatch();
  const allAbilities = abilities
    .map((ability) => ability.ability.name)
    .join(", ");

  const handleFavorites = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  const handleModal = () => {
    dispatch(setIdModal(id));
    dispatch(setModal(true));
  };

  return (
    <div>
      <Card
        id={id}
        title={name}
        cover={<img src={image} alt={name} onClick={() => handleModal()} />}
        extra={<StartButton isFavorite={favorite} onClick={handleFavorites} />}
      >
        <Meta description={allAbilities} />
      </Card>
    </div>
  );
};

export default PokemonCard;
