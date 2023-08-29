import { useState } from "react"

const xigmad = [
	"1.Aaddane eed ma waayo – Human beings are never without fault",
	"2.Iskaashato ma kufto – If people support each other they do not fall.",
	"3.Abeesadii lix jir kugu qaniintaa lixdan jir bay kugu dishaa – A snake-bite received at the age of six kills you at the age of sixty.",
	"4.Af daboolan waa dehab – A closed mouth is gold.",
	"5.Talo xumo tog baas bay kaa riddaa – Bad counsel may cause you to fall into an abyss."
]
const SomaliQuotes = () => {

	const [quote , setQuote] = useState(0)
	const next_quotes = () => {
		if(quote < xigmad.length-1){
			setQuote(quote+1);
		}
	}
	const prev_quotes = () => {
		if(quote > 0){
			setQuote(quote-1);
		}
	}
  return (
	<div className="flex flex-col justify-center items-center gap-5 p-10 mt-32">
		<h4 className="text-2xl p-20 rounded shadow-md border-2 border-blue-600 text-center">{xigmad[quote]}</h4>
		<div className="flex flex-row justify-center items-center gap-5 p-2">
			<button className="text-lg text-center px-5 py-3 rounded shadow hover:shadow-lg transition-all ease-in-out bg-blue-600 text-white"
			onClick={()=>prev_quotes()}>Prevous</button>
			<button className="text-lg text-center px-5 py-3 rounded shadow hover:shadow-lg transition-all ease-in-out bg-blue-600 text-white"
			onClick={()=>next_quotes()}>Next</button>
		</div>
	</div>
  )
}

export default SomaliQuotes