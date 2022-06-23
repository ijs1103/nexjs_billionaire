export default function FinancialAsset({...asset}) {
	return (
		<div style={{'border': '1px solid red', 'borderRadius': '10px', 'width': '220px', 'padding': '20px'}}>
			<p>Ticker: {asset.ticker}</p>
			<p>Shares: {asset.numberOfShares.toLocaleString()}</p>
			{asset.exerciseOptionPrice && <p>Exercise Price: {`$ ${asset.exerciseOptionPrice}`}</p>}
		</div>
	);
}