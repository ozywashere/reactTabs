function DifferentTabContent() {
  return (
    <div className='max-w-2xl border p-8 my-8 rounded shadow-lg w-full'>
      <h2 className='text-xl font-bold mb-2'>DifferentTabContent</h2>
      <p className='text-gray-700 text-base leading-relaxed'>
        DifferentTabContent ❌🎉❗👌🥥✔
      </p>

      <div className='flex items-center gap-4 my-4'>
        <button className='text-blue-500 px-4 py-2 bg-white border hover:bg-blue-500 hover:text-white rounded transition-all duration-500'>
          <span>Action 1</span>
        </button>
        <button className='text-white px-4 py-2 bg-blue-500 border hover:bg-blue-600 rounded transition-all duration-500'>
          <span>Action 2</span>
        </button>
      </div>
    </div>
  );
}

export default DifferentTabContent;
