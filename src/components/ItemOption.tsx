export default function ItemOption({text, click, active}: any){
  return (
    <button className={`itemOption ${active}`} onClick={click}>
      <h3>{text}</h3>
    </button>
  )
}