import SunsetContainer from './components/SunsetContainer';
import Header from './components/Header';
import Video from './components/Video';
import MessagePresenter from './components/MessagePresenter';

const Presenter = () => (
    <SunsetContainer>
        <Header/>
        <Video/>
        <MessagePresenter/>
    </SunsetContainer>
);

export default Presenter;
