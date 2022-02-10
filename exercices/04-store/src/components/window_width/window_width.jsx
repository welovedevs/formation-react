import { useWindowWidth } from '../../hooks/use_window_width';

export const WindowWidthDisplay = () => {
    const { width } = useWindowWidth();
    return <div>Largeur de la fenêtre {width}</div>;
};
