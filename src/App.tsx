import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
    return (
        <div>
            <Provider store={store}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Provider>
        </div>
    );
}

export default App;
