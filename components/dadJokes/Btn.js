export default function Btn({ addClassNames, onClick, children }) {
  return (
    <button
      className={`${addClassNames} rounded-full py-5 px-7 text-white transition hover:scale-105`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
