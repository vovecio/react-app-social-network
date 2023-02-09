import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar data={props.navbar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs'
                               element=
                                   {<Dialogs
                                       addMessage={props.addMessage}
                                       updateMessageText={props.updateMessageText}
                                       dialogs={props.info.content.dialogsPage.dialogs}
                                       name='dialogs'/>}/>
                        <Route path='/profile' element={<Profile addPost={props.addPost} updatePostText={props.updatePostText} profilePage={props.info.content.profilePage}/>}/>
                        <Route path='/news' element={<News name='news'/>}/>
                        <Route path='/music' element={<Music name='music'/>}/>
                        <Route path='/settings' element={<Settings name='settings'/>}/>
                        <Route path='/friends' element={<Friends friends={props.info.content.friendsPage.friends}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;