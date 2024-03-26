import { GridColDef } from "@mui/x-data-grid"
import "./add.scss"

type Props={
    slug:string,
    columns:GridColDef[]
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
const Add = (prop:Props) => {
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
  }
  return (
    <div className="add">
        <div className="modal">
            <span className="close" onClick={()=>prop.setOpen(false)}>X</span>
            <h1>Add new {prop.slug}</h1>
            <form onSubmit={handleSubmit}>
              {prop.columns
              .filter((item)=>item.field!=="id" && item.field!=="img")
              .map((column)=>{
                return <div className="item">
                    <label >{column.headerName}</label>
                    <input type={column.type} placeholder={column.field} />
                </div>
              })}
              <button>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Add