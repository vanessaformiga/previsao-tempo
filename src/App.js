import './App.css';




import React, { useState } from "react";


function App() {
    const [city, setCity] = useState("");
    const [weatherForecast, setWeatherForecast] = useState(null);

    const handleSearch = () => {
        fetch(
                `${process.env.REACT_APP_BASE_URL}current.json?key=${process.env.REACT_APP_KEY}&q=${city}&lang=pt`
            )
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then((data) => {
                console.log(data);
                setWeatherForecast(data);
            });
    };

    return ( <
        >
        <
        div >
        <
        nav className = "container" >
        <
        div class = "titulo" > Previsão do Tempo <
            /
        div > < /nav> < /
        div >

        <
        div class = "container-segundario"
        id = "pesquisar" >
        <
        div class = "principal" >
        <
        h1 class = "paragrafo" > Verique agora a previsão do tempo na sua cidade! < /h1> <
        p class = "pesquisa" >
        Digite da sua cidade no campo abaixo o nome da sua cidade em seguida clique em pesquisar. <
        /p> <
        div className = "campo" >
        <
        div class = "campo2" >
        <
        input type = "text"
        class = "form-control"
        value = { city }
        onChange = {
            (e) => setCity(e.target.value)
        }
        /> < /
        div > <
        /div> <
        button class = "botaopesquisar"
        onClick = { handleSearch } >
        Pesquisar <
        /button>

        {
            weatherForecast ? ( <
                >
                <
                div class = "clima" >
                <
                div class = "clima" >
                <
                img class = "imagem"
                src = { `${weatherForecast.current.condition.icon}` }
                alt = "Weather Icon" /
                >
                <
                /div> <
                div >
                <
                h3 >
                O clima de hoje é: { weatherForecast.current.condition.text } <
                /h3> <
                p class = "temperatura" >
                Temperatura: { weatherForecast.current.temp_c }
                º <
                /p> < /
                div > <
                /div> < / >
            ) : null
        } < /div > < /
        div > <
        />
    );
}

export default App
