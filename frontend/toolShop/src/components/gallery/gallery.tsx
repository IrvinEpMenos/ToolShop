export default function Gallery() {
    const image = "https://i.imgur.com/lke7KKa.jpeg";

    return (
        <div className="">
                <img src={image} alt={`Gallery ${image}`} className="w-full h-auto rounded-lg shadow-md" />
        </div>
    );
}