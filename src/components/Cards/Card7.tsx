interface Card7Props {
    title: string,
    description: string,
    color: string
    
}

const Card7 = ({title, description,color}:Card7Props) => {
    return (  
    <div className={`col-start-6 col-end-8 row-start-6 row-end-8 ${color}`}>
        <div className={`rounded-lg`}>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
     )
}


export default Card7