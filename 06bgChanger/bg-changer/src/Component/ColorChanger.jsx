function ColorChanger({ setColor }) {
  return (
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">

        <button
          className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 duration-200"
          onClick={() => setColor("gray")}
        >
          Gray
        </button>

        <button
          className="px-3 py-1 rounded-lg bg-green-200 hover:bg-green-300 duration-200"
          onClick={() => setColor("green")}
        >
          Green
        </button>

        <button
          className="px-3 py-1 rounded-lg bg-blue-200 hover:bg-blue-300 duration-200"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>

        <button
          className="px-3 py-1 rounded-lg bg-red-200 hover:bg-red-300 duration-200"
          onClick={() => setColor("red")}
        >
          Red
        </button>

        <button
          className="px-3 py-1 rounded-lg bg-yellow-200 hover:bg-yellow-300 duration-200"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>

        <button
          className="px-3 py-1 rounded-lg bg-purple-200 hover:bg-purple-300 duration-200"
          onClick={() => setColor("purple")}
        >
          Purple
        </button>

      </div>
    </div>
  );
}

export default ColorChanger;