import './styles.css'

export default function DisplayLoading(){
    return(
        <div className='absolute top-1/2 left-1/2'>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}