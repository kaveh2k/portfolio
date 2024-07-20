import "./style.css";

export default function SubscriptionForm() {
  return (
    <form className="subscription-form">
      <label htmlFor="email">Email address</label>
      <input type="email" name="email" placeholder="mail@example.com"></input>
      <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  );
}
