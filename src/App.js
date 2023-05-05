import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    return (
        <div>
            <header>
                <div className="inner">
                    <h1>로체의 블로그</h1>
                </div>
            </header>
            <div className="wrapper">
                <div className="left-side"></div>
                <div className="center"></div>
                <div className="right-side"></div>
            </div>
            <footer></footer>
        </div>
    );
}

export default App;
