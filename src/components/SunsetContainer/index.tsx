import './sunset-container.css';

type Props = {
    children: JSX.Element | JSX.Element[] | string;
};

const SunsetContainer = ({children}: Props) => (
    <div className="sunset-bg h-screen w-screen bg-cover bg-center relative">
        {children}
    </div>
);

export default SunsetContainer;
