interface Card5Props {
    title: string,
    description: string,
    color: string
    
}

const Card5 = ({title, description,color}:Card5Props) => {
    return (  
    <div className={`col-start-1 col-end-3 row-start-6 row-end-10 ${color}`}>
        <div className={`rounded-lg`}>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
     )
}


export default Card5