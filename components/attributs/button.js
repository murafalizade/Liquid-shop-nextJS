export default function SectionButton({ children, active, forwardRef}){
    return(
        <>
            <style jsx>{`
                button {
                    border-color:#007bff;
                    border:1px solid;
                    width: 150px;
                    height: 50px;
                    border-radius:25px;
                    background-color:transparent;
                    text-align:center;
                    color:#007bff;
                    margin-left:20px;
                    }    
                    button:hover{
                        border-color:#007bff;
                        cursor:pointer;
                        background-color:#007bff;
                        color:white;
                    }`}
            </style>
            <button style={active===true ?{ borderColor :'#007bff',backgroundColor:'#007bff',color:'#fff'}:null}>
            {children}
        </button>
</>
    )
}
