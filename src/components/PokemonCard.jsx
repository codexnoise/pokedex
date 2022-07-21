import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({ name, image, abilities }) => {
  const allAbilities = abilities
    .map((ability) => ability.ability.name)
    .join(", ");

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description={allAbilities} />
    </Card>
  );
};

export default PokemonCard;
