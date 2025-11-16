interface Card1Props {
    title: string,
    description: string,
    color: string
    
}

const Card1 = ({title, description,color}:Card1Props) => {
    return (   
    <div className={`col-start-1 col-end-6 row-start-1 row-end-6 ${color}`}>
        <div className={`rounded-lg `}>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
     )
}


export default Card1