interface Card10Props {
    title: string,
    description: string,
    color: string
    
}

const Card10 = ({title, description,color}:Card10Props) => {
    return (  
    <div className={`col-start-3 col-end-6 row-start-10 row-end-13 ${color}`}>
        <div className={`rounded-lg`}>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
     )
}


export default Card10