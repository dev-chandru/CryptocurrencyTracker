// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails
  return (
    <li className="list-details-container">
      <div className="currency-logo-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-card">
        <p className="usdValue">{usdValue}</p>
        <p className="euroValue">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
