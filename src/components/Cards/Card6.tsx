interface Card6Props {
    title: string,
    description: string,
    color: string
    
}

const Card6 = ({title, description,color}:Card6Props) => {
    return (  
    <div className={`col-start-3 col-end-6 row-start-6 row-end-10 ${color}`}>
        <div className={`rounded-lg`}>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
     )
}


export default Card6