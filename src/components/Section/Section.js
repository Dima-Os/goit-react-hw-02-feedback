import s from './Section.module.scss';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div className={s.section}>
      <h2 className={s.sectionTitle}>{title}</h2>
      {children}
    </div>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
