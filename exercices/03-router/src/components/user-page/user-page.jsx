import { useParams } from 'react-router';

export const UserPage = () => {
    const params = useParams();

    return <div>{params.id}</div>;
};
