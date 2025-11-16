interface Card4Props {
    title: string,
    description: string,
    color: string
    
}

const Card4 = ({title, description,color}:Card4Props) => {
    return (  
    <div className={`col-start-11 col-end-13 row-start-1 row-end-6 ${color}`}>
        <div className={`rounded-lg`}>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
     )
}


export default Card4