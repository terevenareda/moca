interface Card3Props {
    title: string,
    description: string,
    color: string
    
}

const Card3 = ({title, description,color}:Card3Props) => {
    return (  
    <div className={`col-start-8 col-end-11 row-start-1 row-end-8 ${color}`}>
        <div className={`rounded-lg`}>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
     )
}


export default Card3