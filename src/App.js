import './App.css';
import { useState } from 'react'
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [image, setImage] = useState('');

  const onChangeLinea1 = (evento) => {
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 = (evento) => {
    setLinea2(evento.target.value)
  }
  const onChangeImage = (evento) => {
    setImage(evento.target.value)
  }
  const onClickExportar = (evento) => {
    alert("ALERTA")
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img    = canvas.toDataURL("image/png");
      
      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img
      link.click();
  });
  }

  return (
    <div className="App">

      <select onChange={onChangeImage}>
        <option value="img1">Futurama</option>
        <option value="img2">Jackie Chan</option>
        <option value="img3">Negro</option>
        <option value="img4">Tommy</option>
        <option value="img5">Pantera Negra</option>
      </select><br/>

      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1"/><br/>
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" /><br/>
      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id="meme">
        <span>{linea1}</span><br/>
        <span>{linea2}</span>
        <img src={`/img/${image}.png`} />
      </div>
      
    </div>
  );
}

export default App;
