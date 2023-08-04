import logo from '/bear3.png'

export default function Home() {

  return (
    <footer>
      <div className="footer-logo">
          <img 
            src={logo}         
            alt={'Grizzly Logo'}
          />
      </div>
      <div>
        Grizzly Dividends
      </div>
    </footer>
  )
}