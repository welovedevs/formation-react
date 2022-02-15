import { useContext } from 'react';
import { AppContext } from '../../context/app_context';

export const ListRecap = ({}) => {
    const { list } = useContext(AppContext);

    return <div className="">{list.length} Elements dans la liste</div>;
};
