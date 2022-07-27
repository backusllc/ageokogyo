import React from 'react';
import { Link } from 'gatsby';

const NotFound = () => {
    return (
        <div className="not-found-message">
            <h1>お探しのページが見つかりません</h1>
            <Link to="/">トップページへ</Link>
        </div>
    )
}

export default NotFound;
