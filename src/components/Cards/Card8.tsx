interface Card8Props {
    title: string,
    description: string,
    color: string
    
}

const Card8 = ({title, description,color}:Card8Props) => {
    return (  
    <div className={`col-start-11 col-end-13 row-start-6 row-end-13 ${color}`}>
        <div className={`rounded-lg`}>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
     )
}


export default Card8