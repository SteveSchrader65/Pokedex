import { useState } from 'react'
import { first151Pokemon, getFullPokedexNumber } from '../utils'

export const SideNav = ({ selectedPokemon, setSelectedPokemon, handleCloseMenu, showSideMenu }) => {
  const [searchValue, setSearchValue] = useState("")
  const filtered = first151Pokemon.filter((poke, pokeIndex) => {
    if (getFullPokedexNumber(pokeIndex).includes(searchValue)) return true
    if (poke.toLowerCase().includes(searchValue.toLowerCase())) return true

    return false
  })

  return (
    <nav
      className={" " + (!showSideMenu ? " open" : "")}
      style={{display: "flex", flexDirection: "column", height: "100vh"}}>
      <div style={{position: "sticky", top: 0, backgroundColor: "inherit", zIndex: 10}}>
        <div className={"header " + (!showSideMenu ? " open" : "")}>
          <button onClick={handleCloseMenu} className="open-nav-button">
            <i className="fa-solid fa-arrow-left-long"></i>
          </button>
          <h1 className="text-gradient">Pok&eacute;Dex</h1>
        </div>
        <input
          type="text"
          placeholder="E.g. 001 or Bulba..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
        />
      </div>
      <div style={{flex: 1, overflowY: "auto"}}>
        {filtered.map((pokemon, pokemonIndex) => {
          const truePokedexNumber = first151Pokemon.indexOf(pokemon)

          return (
            <button
              key={pokemonIndex}
              className={
                "nav-card " + (pokemonIndex === selectedPokemon ? " nav-card-selected" : " ")
              }
              onClick={() => {
                setSelectedPokemon(truePokedexNumber)
                handleCloseMenu()
              }}>
              <p>{getFullPokedexNumber(truePokedexNumber)}</p>
              <p>{pokemon}</p>
            </button>
          )
        })}
      </div>
    </nav>
  )
}