import { pokemonTypeColors } from "../utils"

export const TypeCard = ({ type }) => {

  return (
    <div>
      <div
        className="type-tile"
        style={{
          color: pokemonTypeColors?.[type]?.color,
          background: pokemonTypeColors?.[type]?.background,
        }}>
        <p>{type}</p>
      </div>
    </div>
  )
}