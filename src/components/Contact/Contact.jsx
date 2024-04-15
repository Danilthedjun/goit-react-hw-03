import css from "./Contact.module.css";

export default function Contact({
  contactItem: { name, number, id },
  onDelete,
}) {
  return (
    <div className={css.item}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
