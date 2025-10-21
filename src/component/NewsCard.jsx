import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        rating,
        total_view,
        thumbnail_url,
        details,
        tags,
    } = news;

    return (
        <div className="card mb-5 bg-base-100 shadow-xl border border-base-300">
            {/* Thumbnail Image */}
            <figure>
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="w-full h-56 object-cover"
                />
            </figure>

            {/* Card Body */}
            <div className="card-body">
                {/* Author Section */}
                <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center flex-row">
                        <img
                            src={author?.img}
                            alt={author?.name}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="font-semibold">{author?.name}</h2>
                            <p className="text-sm text-gray-500">
                                {new Date(author?.published_date).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2">{title}</h3>

                {/* Details */}
                <p className="text-sm text-gray-600 mb-3">
                    {details.length > 150 ? details.slice(0, 150) + "..." : details}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, i) => (
                        <div
                            key={i}
                            className="badge badge-outline badge-secondary capitalize"
                        >
                            #{tag}
                        </div>
                    ))}
                </div>

                {/* Footer Section */}
                <div className="flex justify-between items-center border-t pt-3 text-sm text-gray-700">
                    <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        <span>{rating.number}</span>
                        <span className="badge badge-success ml-2">{rating.badge}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaEye className="text-gray-500" />
                        <span>{total_view.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
