import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../slices/uiSlices";

const PokeModal = () => {
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
      <p>{idModal}</p>
      <p>Sample Modal contents</p>
    </Modal>
  );
};

export default PokeModal;
