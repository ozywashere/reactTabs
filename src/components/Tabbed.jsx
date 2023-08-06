import PropTypes from 'prop-types';
import Tab from './Tab';
import TabContent from './TabContent';
import DifferentTabContent from './DifferentTabContent';

import {
  AiOutlineContacts,
  AiOutlineDashboard,
  AiOutlineSetting,
  AiOutlineUser,
} from 'react-icons/ai';

import { useState } from 'react';
function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className=' border-gray-200  flex justify-center flex-col items-center '>
      <ul className='flex flex-wrap text-base font-medium text-center text-gray-500'>
        <li className='mr-2'>
          <Tab
            num={0}
            activeTab={activeTab}
            text='Profile'
            onClick={setActiveTab}
            Icon={AiOutlineUser}
          />
        </li>
        <li className='mr-2'>
          <Tab
            num={1}
            activeTab={activeTab}
            text='Dashboard'
            Icon={AiOutlineDashboard}
            onClick={setActiveTab}
          />
        </li>
        <li>
          <Tab
            num={2}
            activeTab={activeTab}
            text='Settings'
            Icon={AiOutlineSetting}
            onClick={setActiveTab}
          />
        </li>
        <li>
          <Tab
            num={3}
            activeTab={activeTab}
            text='Contacts'
            Icon={AiOutlineContacts}
            onClick={setActiveTab}
          />
        </li>
        <li>
          <Tab
            num={4}
            activeTab={activeTab}
            text='DifferentTabContent'
            onClick={setActiveTab}
          />
        </li>
      </ul>
      {activeTab <= 3 ? (
        <TabContent
          item={content.at(activeTab)}
          key={content.at(activeTab).summary}
        />
      ) : (
        <DifferentTabContent item={content.at(activeTab)} />
      )}
    </div>
  );
}

Tabbed.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      summary: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Tabbed;
