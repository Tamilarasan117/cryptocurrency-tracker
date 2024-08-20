import './index.css'

const CryptocurrencyItem = (props) => {
  const {cryptocurrencyItemData} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptocurrencyItemData
  return (
    <li className="cc-item-card">
      <div className="cc-item-logo-card">
        <img
          src={currencyLogo}
          alt={currencyName}
          className="cc-item-logo"
        />
        <p className="cc-item-logo-name">{currencyName}</p>
      </div>
      <div className="cc-item-value-card">
        <p className="cc-item-value">{usdValue}</p>
        <p className="cc-item-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
