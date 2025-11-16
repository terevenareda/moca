interface Card1Props {
    title: string,
    description: string,
    color: string
    
}

const Card1 = ({title, description,color}:Card1Props) => {
    return (  
        <div className={`rounded-lg shadow-md p-6 ${color}`}>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
     )
}


export default Card1