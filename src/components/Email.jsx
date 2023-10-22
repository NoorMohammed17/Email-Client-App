import EmailItem from './EmailItem';
import classes from './Email.module.css';

const Email = (props) => {
  return (
    <section className={classes.emails}>
      <ul>
        {props.data.map((el) => (
          <EmailItem
            key={el.id}
            id={el.id}
            email={el.from.email}
            name={el.from.name}
            date={el.name}
            subject={el.subject}
            description={el.short_description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Email;