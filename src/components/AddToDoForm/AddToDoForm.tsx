export default function AddToDoForm() {
  return (
    <form className="w-full flex justify-center">
      <input
        type="text"
        placeholder="e.g. go shopping"
        className="w-3/4 h-14 text-xl text-white rounded-xl pl-3 bg-secondary-900 outline-none focus:outline-none focus:bg-accent-600 focus:ring-4 focus:ring-accent-800 focus:placeholder:text-gray-600 transition-all"
      />
    </form>
  );
}
