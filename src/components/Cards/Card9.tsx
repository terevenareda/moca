interface Card9Props {
    title: string,
    description: string,
    color: string
    
}

const Card9 = ({title, description,color}:Card9Props) => {
    return (  
    <div className={`col-start-1 col-end-3 row-start-10 row-end-13 ${color}`}>
        <div className={`rounded-lg`}>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
     )
}


export default Card9