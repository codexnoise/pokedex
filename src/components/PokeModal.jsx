import { Modal, Image } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setModal } from "../slices/uiSlices";
import axios from "axios";
import "./styles/componentStyles.css";

const PokeModal = () => {
  const API = "https://pokeapi.co/api/v2/ability";
  const [pokeInfo, setPokeInfo] = useState("");
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const showModal = useSelector((state) => state.ui.showModal);
  const idModal = useSelector((state) => state.ui.idModal);
  const dispatch = useDispatch();

  const handleUnshowModal = (show) => {
    dispatch(setModal(show));
  };

  useEffect(() => {
    axios.get(`${API}/${pokemons[idModal - 1]}`).then((response) => {
      console.log("API RESPONSE", response.data.effect_entries[0].effect);
      setPokeInfo(response.data.effect_entries[0].effect);
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

      <p>{idModal}</p>
      <p>{pokeInfo}</p>
    </Modal>
  );
};

export default PokeModal;
