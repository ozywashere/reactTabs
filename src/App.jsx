import Tabbed from './components/Tabbed';
const content = [
  {
    summary: 'React is a JavaScript library for building user interfaces.',
    details:
      'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".',
  },
  {
    summary: 'State management is like giving state a home.',
    details:
      "State management is like giving state a home. It's a way to store and update state in a predictable, centralized location.",
  },
  {
    summary: 'Redux is a predictable state container for JavaScript apps.',
    details:
      'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.',
  },
  {
    summary: 'React Router is a collection of navigational components.',
    details:
      'React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!',
  },
  {
    summary: 'React Router is a collection of navigational components.',
    details:
      'React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!',
  },
];

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Tabbed content={content} />
    </div>
  );
}

export default App;
