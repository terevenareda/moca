interface Card11Props {
    title: string,
    description: string,
    color: string
    
}

const Card11 = ({title, description,color}:Card11Props) => {
    return (  
    <div className={`col-start-6 col-end-11 row-start-8 row-end-13 ${color}`}>
        <div className={`rounded-lg`}>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
     )
}


export default Card11