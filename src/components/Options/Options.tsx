import { Wrapper, OptionContainer } from "./Options.styles"
import { gameOptions } from "../../misc/gameOptions"

export default function Options() {
  return (
    <Wrapper>
        {gameOptions.map(item=>{
            return <OptionContainer><img src={item.src} alt={item.alt} /></OptionContainer>
        })}
    </Wrapper>
  )
}
