import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../slices/uiSlices";

const PokeModal = ({ pokemons }) => {
  const showModal = useSelector((state) => state.ui.showModal);
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
      ><p>Sample Modal contents</p>
    </Modal>
  );
};

export default PokeModal;
