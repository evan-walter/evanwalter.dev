export default function JokeText({ addClassNames, children }) {
  return <p className={`${addClassNames} text-center text-2xl`}>{children}</p>
}
