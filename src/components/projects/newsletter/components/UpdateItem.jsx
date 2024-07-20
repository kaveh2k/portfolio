import "./style.css";
import { CheckCircle, Cancel } from "@mui/icons-material";

export default function UpdateItem({ text, included }) {
  return (
    <>
      <div className="update-list-item-wrapper">
        {included ? (
          <CheckCircle className="update-list-icon" />
        ) : (
          <Cancel className="update-list-icon" style={{ color: "tomato" }} />
        )}
        <p>{text}</p>
      </div>
    </>
  );
}
