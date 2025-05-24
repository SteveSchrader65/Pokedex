/*  Here's a thought: How about you fucking render the
version that I have pushed to Github, instead of making
-up your own fucking version !!! */
import {useState} from "react"
import {first151Pokemon, getFullPokedexNumber} from "../utils"

export const SideNav = ({selectedPokemon, setSelectedPokemon, handleCloseMenu, showSideMenu}) => {
  const [searchValue, setSearchValue] = useState("")
  const filtered = first151Pokemon.filter((poke, pokeIndex) => {
    if (getFullPokedexNumber(pokeIndex).includes(searchValue)) return true
    if (poke.toLowerCase().includes(searchValue.toLowerCase())) return true

    return false
  })

  return (
    <nav className={" " + (!showSideMenu ? " open" : "")}>
      <div className="nav-fixed-header">
        <div className={"header " + (!showSideMenu ? " open" : "")}>
          <button onClick={handleCloseMenu} className="open-nav-button">
            <i className="fa-solid fa-arrow-left-long"></i>
          </button>
          <h1 className="text-gradient">Pokédex</h1>
        </div>
        <input
          placeholder="E.g. 001 or Bulba..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
        />
      </div>
      <div className="nav-scrollable-content">
        {filtered.map((pokemon, pokemonIndex) => {
          const truePokedexNumber = first151Pokemon.indexOf(pokemon)
          return (
            <button
              onClick={() => {
                setSelectedPokemon(truePokedexNumber)
                handleCloseMenu()
              }}
              key={pokemonIndex}
              className={
                "nav-card " + (pokemonIndex === selectedPokemon ? " nav-card-selected" : " ")
              }>
              <p>{getFullPokedexNumber(truePokedexNumber)}</p>
              <p>{pokemon}</p>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
