import './Button.css'

export const Button = ({children, onCLick}) => {
    
    
    return(
        
        <button onClick={onCLick} className="button">
            {children}
        </button>
        
    )
}