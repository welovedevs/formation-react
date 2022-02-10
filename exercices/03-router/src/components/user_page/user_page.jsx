import { useParams } from 'react-router';
import './user_page.css';
export const UserPage = () => {
    const params = useParams();

    return (
        <div className="user_container">
            <h2>{params.id}</h2>
        </div>
    );
};
