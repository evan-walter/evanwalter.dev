export default function Btn({ addClassNames, onClick, children }) {
  return (
    <button
      className={`${addClassNames} rounded-full py-4 px-6 text-white transition hover:scale-105 max-sm:text-base`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
