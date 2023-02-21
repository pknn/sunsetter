import './sunset-container.css';

type Props = {
    children: JSX.Element | JSX.Element[] | string;
};

const SunsetContainer = ({children}: Props) => (
    <div className="bg-black h-screen w-screen bg-cover bg-center relative">
        <div className="sunset-card-container absolute m-auto inset-0 flex p-12 flex-col gap-4">
            {children}
        </div>
    </div>
);

export default SunsetContainer;
