import { Modal, Image } from "antd";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setModal } from "../slices/uiSlices";
import "./styles/componentStyles.css";

const PokeModal = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const showModal = useSelector((state) => state.ui.showModal);
  const idModal = useSelector((state) => state.ui.idModal);
  const dispatch = useDispatch();

  const handleUnshowModal = (show) => {
    dispatch(setModal(show));
  };

  return (
    <Modal
      title={pokemons[idModal - 1].name.toUpperCase()}
      visible={showModal}
      onOk={() => {
        handleUnshowModal(false);
      }}
      onCancel={() => {
        handleUnshowModal(false);
      }}
    >
      <center>
        <Image
          className="imageModal"
          preview={false}
          src={pokemons[idModal - 1].sprites.other.dream_world.front_default}
          alt={pokemons[idModal - 1].name}
        />
      </center>

      <p>{idModal}</p>
      <p>Sample Modal contents</p>
    </Modal>
  );
};

export default PokeModal;
