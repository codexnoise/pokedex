import { Modal, Image } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setModal } from "../slices/uiSlices";
import axios from "axios";
import "./styles/componentStyles.css";

const PokeModal = () => {
  const API = "https://pokeapi.co/api/v2/ability";
  const [pokeInfo, setPokeInfo] = useState("");
  const [loadingInfo, setloadingInfo] = useState(false);
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const showModal = useSelector((state) => state.ui.showModal);
  const idModal = useSelector((state) => state.ui.idModal);
  const dispatch = useDispatch();

  const handleUnshowModal = (show) => {
    dispatch(setModal(show));
  };

  useEffect(() => {
    axios.get(`${API}/${pokemons[idModal - 1].id}`).then((response) => {
      setPokeInfo(response.data.effect_entries[1].effect);
      setloadingInfo(true);
    });
  }, []);

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
      {loadingInfo ? <p>{pokeInfo}</p> : <p>loading . . . </p>}
    </Modal>
  );
};

export default PokeModal;
