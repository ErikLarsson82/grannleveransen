import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class SearchmatchNeeder extends React.Component {
  constructor(props) {
    super(props)

    //this.clear = this.clear.bind(this)
  }
  /*componentDidMount() {
    this.timeout = setTimeout(() => {
      //this.props.setView('FOUNDLISTOFMATCHES-NEEDER')
      console.log('goto found list')
    }, 10000)
  }
  componentWillUnmount() {
    this.clear()
  }
  clear() {
    clearTimeout(this.timeout)
  }*/
  render() {
    return (
      <div>
        <h3>SEARCHMATCH-NEEDER</h3>
        <p>Letar matcher.... detta kommer att ta ca 10 sekunder</p>
        <div className="button-holder">
          <Link to='/needer/welcome'>
            <Button variant="contained" color="primary">
              Avbryt
            </Button>
          </Link>
          <Link to='/needer/foundnomatch'>
            <Button variant="contained" color="primary">
              Debug: Ingen match
            </Button>
          </Link>
          <Link to='/needer/foundlistofmatches'>
            <Button variant="contained" color="primary">
              Debug: Hitta match direkt
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default SearchmatchNeeder