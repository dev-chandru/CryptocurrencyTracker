// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrencyList extends Component {
  state = {
    cryptoList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.onGettingCryptoList()
  }

  onGettingCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({
      cryptoList: formatedData,
      isLoading: false,
    })
  }

  renderCryptoList = () => {
    const {cryptoList} = this.state
    return (
      <div className="crypto-list-main-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-image"
        />
        <ul className="items-main-container">
          <li className="list-heading-container">
            <p className="list-main-heading">Coin Type</p>
            <div className="list-card">
              <p className="list-USD">USD</p>
              <p className="list-EURO">EURO</p>
            </div>
          </li>
          {cryptoList.map(eachItem => (
            <CryptocurrencyItem cryptoDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoading = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="main-card-container">
        {isLoading ? this.renderLoading() : this.renderCryptoList()}
      </div>
    )
  }
}

export default CryptocurrencyList
