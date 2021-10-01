import { Link } from "react-router-dom";
import { ReactComponent as AddIcon } from "../assets/add.svg";

export default function CreateItem() {
  return (
    <Link to="/note/new" className="floating-button">
      <AddIcon />
    </Link>
  );
}
