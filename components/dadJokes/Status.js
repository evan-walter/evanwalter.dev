export default function Status({ addClassNames = '', children }) {
  return (
    <p className={`${addClassNames} text-center font-bold uppercase`}>
      {children}
    </p>
  )
}
