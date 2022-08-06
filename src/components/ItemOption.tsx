export default function ItemOption({text, click, m}: any){
  return (
    <button className='itemOption' onClick={click}>
      <h3>{text}</h3>
    </button>
  )
}