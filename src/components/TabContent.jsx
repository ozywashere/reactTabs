import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };
  return (
    <div className='max-w-2xl border p-8 my-8 rounded shadow-lg w-full '>
      <h2 className='text-xl font-bold mb-2'>{item.summary}</h2>
      <p className='text-gray-700 text-base leading-relaxed'>
        {showDetails ? item.details : item.details.substring(0, 100) + '...'}
      </p>
      <div className='flex justify-between'>
        <button className='text-blue-500' onClick={toggleDetails}>
          {showDetails ? (
            <span>
              Show Less
              <BsChevronUp className='inline-block w-4 h-4 mx-2 ' />
            </span>
          ) : (
            <span>
              Read More
              <BsChevronDown className='inline-block w-4 h-4 mx-2' />
            </span>
          )}
        </button>
        <button>
          <span className='text-blue-500' onClick={handleLike}>
            ❤
          </span>
          <span className='text-gray-500 ml-2'>{likeCount}</span>
        </button>
      </div>
      <div className='flex items-center gap-4 my-4'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white  py-1 px-3 rounded flex items-center justify-center transition-all duration-700'>
          Undo
          <AiOutlinePlus className='inline-block w-4 h-4 mx-2' />
        </button>
        <button className='text-blue-500 hover:bg-blue-700 border py-1 px-3 rounded hover:text-white transition-all duration-700'>
          <AiOutlineMinus className='inline-block w-4 h-4 mx-2' />
        </button>
      </div>
    </div>
  );
}

TabContent.propTypes = {
  item: PropTypes.object.isRequired,
};
export default TabContent;
