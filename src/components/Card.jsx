const Card = ({ imageUrl, altText, children }) => {
    return (
        <div className="card">
            <p className="flex-1 p-6 text-justify">{children}</p>
            <div className="h-1/2">
                <img src={imageUrl} alt={altText} className="object-cover object-center w-full h-full rounded-md" />
            </div>
        </div>
    );
}

export default Card;