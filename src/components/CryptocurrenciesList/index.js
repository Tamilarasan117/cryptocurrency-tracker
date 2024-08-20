import './index.css'
import { Component } from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrencyItemData: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencyItemData()
  }

  getCryptocurrencyItemData = async () => {
    const response = await fetch("https://apis.ccbp.in/crypto-currency-converter")
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    this.setState({cryptocurrencyItemData: updatedData, isLoading: false})
  }

  render() {
    const {cryptocurrencyItemData, isLoading} = this.state
    return (
      <div className="cc-list-container">
        <h1 className="cc-list-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cc-list-img"
        />
        <ul className="cc-list-card">
          <li className="cc-list-header-card">
            <h1 className="cc-list-header">Coin Types</h1>
            <div className="cc-list-head-card">
              <h1 className="cc-list-header">USD</h1>
              <h1 className="cc-list-header">EURO</h1>
            </div>
          </li>
          {
            isLoading
              ?
              <div data-testid="loader">
                <Loader type="Rings" color="#ffffff" height={80} width={80} />
              </div>
              :
            cryptocurrencyItemData.map(eachItem => (
              <CryptocurrencyItem
                cryptocurrencyItemData={eachItem}
                key={eachItem.id}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
