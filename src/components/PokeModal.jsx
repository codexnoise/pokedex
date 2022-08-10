import { Modal } from "antd";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setModal } from "../slices/uiSlices";

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
      title="POKEMODAL"
      visible={showModal}
      onOk={() => {
        handleUnshowModal(false);
      }}
      onCancel={() => {
        handleUnshowModal(false);
      }}
    >
      <img
        src={pokemons[idModal].sprites.other.dream_world.front_default}
        alt="pomkemodal"
      />
      <p>{idModal}</p>
      <p>Sample Modal contents</p>
    </Modal>
  );
};

export default PokeModal;
