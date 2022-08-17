export default function ItemOption({text, click }: any){
  return (
    <button className='itemOption'>
      <input type="radio" id={text} name="radio" onClick={click} />
		  <label className="itemCoisa" htmlFor={text}><h3>{text}</h3></label>
    </button>
  )
}