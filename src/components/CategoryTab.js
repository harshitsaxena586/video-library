import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryTab() {
    return (
        <div className="categories-wrap list-tag">
            <Link to="/pcbuilds">
                <div>
                    <h1>PC Builds </h1>
                </div>
            </Link>
            <Link to="/:qna">
                <div>
                    <h1>Qna and Discussions</h1>
                </div>
            </Link>
            <Link to="/:qna">
                <div>
                    <h1>Reviews and Benchmarks</h1>
                </div>
            </Link>
            <Link to="/:qna">
                <div>
                    <h1>OverClocking</h1>
                </div>
            </Link>
            
        </div>
    )
}
