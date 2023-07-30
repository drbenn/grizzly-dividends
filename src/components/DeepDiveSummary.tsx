/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import './deepdivesummary.scss'
import bigBear from '/big-bear.png'


export default function DeepDiveSummary(props) {  
  const data = props.data;
  const currentPrice = props.currentPrice;
  const currentHi = props.currentHi;
  const currentLo = props.currentLo;
  
  const formatWebsite = (url: string) => {
    let returnString: string = url;
    if (url.indexOf("www.")) {
      const startIndex = url.indexOf("www.");
      returnString = url.slice(startIndex, url.length);
    }
    if (returnString.charAt(returnString.length - 1) === "/") {
      returnString = returnString.slice(0,returnString.length - 1);
    }
    return returnString;
  }

  const findIndicatorPosition = (data: any) => {
    const hi: number = (Number(data.year_price_high) - Number(data.year_price_low));
    const lo: number = (currentPrice - Number(data.year_price_low));
    const position: number = (1 - (lo / hi)) * 100
    return {"right": `${position}%`}
  }

  const compareHiPrice = (annualHi: number) => {
    if (annualHi > currentHi) { return  annualHi.toFixed(2) } 
    else{ return currentHi.toFixed(2); }
  }

  const compareLoPrice = (annualLo: number) => {
    if (annualLo < currentLo) { return annualLo.toFixed(2); }
    else { return currentLo.toFixed(2); }
  }

  return (
    <>
    <div className='summary-items'>
      <div className='summary-title'>{ data.ticker } - { data.name }</div>
      <div>{ data.industry }</div>
      <div><a href={ data.website } target="_blank">{formatWebsite(data.website)}</a></div>
      <div>Current Price: ${currentPrice }</div>
      <div>Year High: ${ compareHiPrice(Number(data.year_price_high)) }</div>
      <div>Year Low: ${ compareLoPrice(Number(data.year_price_low)) }</div>
      <div className='hi-lo-meter-container'>
        <div className='hi-lo-meter-gradient'></div>
        <div className='hi-lo-center-line'></div>
        <div className='current-value-text' style={findIndicatorPosition(data)}>${ currentPrice }</div>
        <div className='current-indicator' style={findIndicatorPosition(data)}></div>
      </div>
    </div>
    <div className='logo-container'>
      <img 
          src={data.logo}         
          alt={`${data.name} Logo`}
          className='dd-logo'
          onError= {e => {
            e.currentTarget.src = bigBear;
          }}
        />
    </div>
    </>
  )
}