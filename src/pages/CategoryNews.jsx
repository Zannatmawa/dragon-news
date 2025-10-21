import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const { id } = useParams()
    const data = useLoaderData()

    const [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {
        const filterdNews = data.filter(news => news.category_id == id)
        setCategoryNews(filterdNews)
    }, [data, id])

    return (
        <div>
            CategoryNews - {categoryNews.length}
        </div>
    );
};

export default CategoryNews;