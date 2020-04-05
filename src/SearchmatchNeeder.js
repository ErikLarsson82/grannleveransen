import React from 'react'
import Button from '@material-ui/core/Button';

class SearchmatchNeeder extends React.Component {
  constructor(props) {
    super(props)

    this.clear = this.clear.bind(this)
  }
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.props.setView('FOUNDLISTOFMATCHES-NEEDER')
    }, 2000)
  }
  componentWillUnmount() {
    this.clear()
  }
  clear() {
    clearTimeout(this.timeout)
  }
  render() {
    const { setView } = this.props
    return (
      <header className="App-header helpee">
        <img src='images/grannleveransen-logo.png' className="App-logo" alt="logo" />
        <h1>grannleveransen.se</h1>
        <h3>SEARCHMATCH-NEEDER</h3>
        <p>Letar matcher.... detta kommer att ta ca 5 sekunder</p>
        <div className="button-holder">
          <Button variant="contained" color="primary" onClick={() => { this.clear(); setView('WELCOME-NEEDER') }}>
            Avbryt
          </Button>
          <Button variant="contained" color="primary" onClick={() => { this.clear(); setView('FOUNDNOMATCH-NEEDER') }}>
            Debug: Ingen match
          </Button>
          <Button variant="contained" color="primary" onClick={() => { this.clear(); setView('FOUNDLISTOFMATCHES-NEEDER') }}>
            Debug: Hitta match direkt
          </Button>
        </div>
      </header>
    )
  }
}

export default SearchmatchNeeder