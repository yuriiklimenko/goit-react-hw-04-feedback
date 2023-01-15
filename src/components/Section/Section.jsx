import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      {title.length > 0 && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.element.isRequired,
};
