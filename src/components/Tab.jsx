import PropTypes from 'prop-types';
function Tab({ num, activeTab, text, Icon, onClick }) {
  return (
    <a
      href='#!'
      className={`
        group  relative flex items-center px-4 py-2 border-b-2 border-transparent text-base font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 
        
        ${
          activeTab === num
            ? 'border-gray-300 text-gray-700'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        }
      `}
      onClick={() => onClick(num)}
    >
      {Icon && (
        <Icon
          className={`w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500
        ${activeTab === num ? 'text-gray-900' : 'text-gray-400'}`}
        />
      )}
      {text}
    </a>
  );
}

Tab.propTypes = {
  num: PropTypes.number.isRequired,
  activeTab: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  Icon: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};
export default Tab;
