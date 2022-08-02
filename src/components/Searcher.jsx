import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setFilter } from "../slices/dataSlices";

const Searcher = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Input.Search
      placeholder="Search ..."
      onChange={handleOnChange}
      style={{ marginBottom: 30 }}
    />
  );
};

export default Searcher;
