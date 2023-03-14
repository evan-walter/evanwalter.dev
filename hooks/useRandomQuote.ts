import { useState } from 'react'
import { quotes } from 'data/programmingQuotes'

export function useRandomQuote() {
  const [randomQuote, setRandomQuote] = useState<any>({})

  const keys = Object.keys(quotes)

  const randomIndex = Math.floor(Math.random() * keys.length)

  const randomKey = parseInt(keys[randomIndex])

  function getRandomQuote() {
    setRandomQuote(quotes[randomKey])
  }

  return [randomQuote, getRandomQuote]
}
