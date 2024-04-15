import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ data, onDelete }) {
  return (
    <ul className={css.list}>
      {data.map((contact) => (
        <li key={contact.id}>
          <Contact contactItem={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
