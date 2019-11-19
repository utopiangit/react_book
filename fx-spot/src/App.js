import React, { useState } from "react";
import './App.css';
import Monitor from './components/Monitor';

const FX_API_URL = "https://www.gaitameonline.com/rateaj/getrate";

const initialData = {"quotes":[{"high":"2.0103","open":"2.0103","bid":"2.0103","currencyPairCode":"GBPNZD","ask":"2.0190","low":"2.0103"},{"high":"82.24","open":"82.24","bid":"82.24","currencyPairCode":"CADJPY","ask":"82.39","low":"82.24"},{"high":"1.8902","open":"1.8902","bid":"1.8902","currencyPairCode":"GBPAUD","ask":"1.8947","low":"1.8902"},{"high":"74.03","open":"74.03","bid":"74.03","currencyPairCode":"AUDJPY","ask":"74.32","low":"74.03"},{"high":"1.0623","open":"1.0623","bid":"1.0623","currencyPairCode":"AUDNZD","ask":"1.0662","low":"1.0623"},{"high":"1.4598","open":"1.4598","bid":"1.4598","currencyPairCode":"EURCAD","ask":"1.4627","low":"1.4598"},{"high":"1.1043","open":"1.1043","bid":"1.1043","currencyPairCode":"EURUSD","ask":"1.1059","low":"1.1043"},{"high":"69.58","open":"69.58","bid":"69.58","currencyPairCode":"NZDJPY","ask":"69.81","low":"69.58"},{"high":"1.3214","open":"1.3214","bid":"1.3214","currencyPairCode":"USDCAD","ask":"1.3227","low":"1.3214"},{"high":"0.8551","open":"0.8551","bid":"0.8551","currencyPairCode":"EURGBP","ask":"0.8577","low":"0.8551"},{"high":"1.2891","open":"1.2891","bid":"1.2891","currencyPairCode":"GBPUSD","ask":"1.2913","low":"1.2891"},{"high":"7.322","open":"7.322","bid":"7.322","currencyPairCode":"ZARJPY","ask":"7.472","low":"7.322"},{"high":"1.0931","open":"1.0931","bid":"1.0931","currencyPairCode":"EURCHF","ask":"1.0946","low":"1.0931"},{"high":"109.77","open":"109.77","bid":"109.77","currencyPairCode":"CHFJPY","ask":"110.06","low":"109.77"},{"high":"0.6805","open":"0.6805","bid":"0.6805","currencyPairCode":"AUDUSD","ask":"0.6824","low":"0.6805"},{"high":"0.9886","open":"0.9886","bid":"0.9886","currencyPairCode":"USDCHF","ask":"0.9910","low":"0.9886"},{"high":"120.07","open":"120.07","bid":"120.07","currencyPairCode":"EURJPY","ask":"120.37","low":"120.07"},{"high":"1.2747","open":"1.2747","bid":"1.2747","currencyPairCode":"GBPCHF","ask":"1.2795","low":"1.2747"},{"high":"1.7231","open":"1.7231","bid":"1.7231","currencyPairCode":"EURNZD","ask":"1.7282","low":"1.7231"},{"high":"0.6396","open":"0.6396","bid":"0.6396","currencyPairCode":"NZDUSD","ask":"0.6410","low":"0.6396"},{"high":"108.76","open":"108.76","bid":"108.76","currencyPairCode":"USDJPY","ask":"108.86","low":"108.76"},{"high":"1.6190","open":"1.6190","bid":"1.6190","currencyPairCode":"EURAUD","ask":"1.6235","low":"1.6190"},{"high":"0.6736","open":"0.6736","bid":"0.6736","currencyPairCode":"AUDCHF","ask":"0.6760","low":"0.6736"},{"high":"140.30","open":"140.30","bid":"140.30","currencyPairCode":"GBPJPY","ask":"140.52","low":"140.30"}]}

function App() {
  const [data, setData] = useState(initialData.quotes);

  const handleDataChanges = (e) => {
    setData(e.target.value);
  }

  const getRate = () => {
      fetch(FX_API_URL, {
        mode: 'cors'
      }).then(response => response.json().quotes)
        .then(setData);
    }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getRate}>
          Get rates!
        </button>
        {data.length ? (
          data.map((quote, index) => ( 
            <Monitor fx={quote} />
          )))
          : <div>nothing</div>
        }
      </header>
    </div>
  );
}

export default App;
