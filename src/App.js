import React, { Component } from 'react'
import CandleChart from './components/candleChart';
import { getData } from "./util"

 class App extends Component {

   state = {
     data:[]
   }
  componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
  render() {
    const { data } = this.state;
    return (
      <div id="">
        <header>

        </header>
        <div className="content">
            <div className="left">
              Menu
            </div>
            <div className="center">
                {data.length>0 &&
                    <CandleChart data={this.state.data} />
                }
            </div>
            <div className="right">
              <div className="header">
                Watchlist
                <input type="text"/>
              </div>
            </div>
        </div>
       <footer>

       </footer>
      </div>
    )
  }
}
export default App;