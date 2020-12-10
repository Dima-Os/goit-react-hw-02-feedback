import s from './Section.module.scss';
const Section = ({ title, children }) => {
  return (
    <div className={s.section}>
      <h2 className={s.sectionTitle}>{title}</h2>
      {children}
    </div>
  );
};
export default Section;
