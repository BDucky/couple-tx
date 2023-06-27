import React from "react";
import { useRouter } from "next/router";

export default function LayoutCardPost({ post }) {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/api/post/post/findById?id=${id}`); 

    return (
        <article>
            <div className="card" onClick={handleCardClick}>
                <div className="card-image">
                    <img src={post.image} alt={post.title} />
                </div>
                <div className="card-content">
                    <h3>{post.title}</h3>
                </div>
            </div>
            <hr className="separator" />
        </article>
    );
}
