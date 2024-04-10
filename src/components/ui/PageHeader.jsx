import PropTypes from 'prop-types';

// Skapar en funktionell komponent som heter PageHeader och tar emot en prop (headerText)...
const PageHeader = ({headerText}) => {
    
    return <h2 className='page-title centered-text'>{headerText}</h2>;
};

// Definera egenskapers typer och om de är obligatoriska..
PageHeader.propTypes = {
    headerText: PropTypes.string,
    
};

// Standard värden på egenskaper..
PageHeader.defaultProps = {
    // Om headerText inte skickas in, sätts standardvärdet till 'Rubrik för sidan'...
    headerText: 'Rubrik för sidan',
};

export default PageHeader;