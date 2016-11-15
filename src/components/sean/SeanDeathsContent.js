import React, {PropTypes} from 'react';

const styles = require('./SeanDeathsPage.css');

class SeanDeathsContent extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      movie: ""
    };
  }

  addDeath() {
    const {actions: {addSeanDeath}} = this.props;
    addSeanDeath({movie: this.state.movie});
  }

  setMovieName(event) {
    this.state.movie = event.target.value;
  }

  render() {
    const {deaths} = this.props;
    return (
      <section className={styles.content} >
      <div className={styles.deaths}>
        {deaths.map((item,index) => (
          <div className={styles.line} key={index} >{item.movie}</div>
        ))}
      </div>
      <input type="text" onChange={this.setMovieName.bind(this)} />
      <button onClick={this.addDeath.bind(this)}>add death</button>
    </section>
    );
  }

}

SeanDeathsContent.propTypes = {
  deaths: PropTypes.array,
  actions: PropTypes.object.isRequired
}

export default SeanDeathsContent;
