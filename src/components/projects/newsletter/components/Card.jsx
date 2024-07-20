import SubscriptionForm from "./SubscriptionForm";
import UpdateItem from "./UpdateItem";
import "./style.css";

export default function Card({ title, description, itemList }) {
  return (
    <>
      <div className="newsletter-card">
        <div className="newsletter-body">
          <div className="newsletter-body-info">
            <h1>{title}</h1>
            <h2>{description}</h2>
            <ul>
              {itemList.map((item) => {
                const { text, included, id } = item;
                return (
                  <li key={id}>
                    <UpdateItem text={text} included={included} />
                  </li>
                );
              })}
            </ul>
          </div>
          <SubscriptionForm />
        </div>
        <div className="newsletter-img-wrapper">
          <img
            alt="newsletter"
            src="https://images.pexels.com/photos/4668525/pexels-photo-4668525.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="newsletter-img"
          ></img>
        </div>
      </div>
    </>
  );
}
