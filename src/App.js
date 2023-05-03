import {Component} from 'react'
import './App.css'

let caloriesTaken = localStorage.getItem('caloriesTaken')
let caloriesBurned = localStorage.getItem('caloriesBurned')

class App extends Component {
  state = {
    intakeCalories: 0,
    quantity: 0,
    steps: 0,
    activityBurned: 0,
  }

  changeFood = event => {
    this.setState({intakeCalories: event.target.value})
  }

  changeActivity = event => {
    this.setState({activityBurned: event.target.value})
  }

  quantituUpdated = event => {
    this.setState({quantity: event.target.value})
  }

  stepsUpdated = event => {
    this.setState({steps: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    const {quantity, intakeCalories, steps, activityBurned} = this.state
    this.setState({
      steps: 0,
      quantity: 0,
      activityBurned: 0,
      intakeCalories: 0,
    })
    caloriesTaken += parseInt(quantity) * intakeCalories
    caloriesBurned += parseInt(steps) * activityBurned
    this.storeData()
  }

  storeData = () => {
    localStorage.setItem('caloriesTaken', caloriesTaken)
    localStorage.setItem('caloriesBurned', caloriesBurned)
  }

  clearAllItems = () => {
    localStorage.setItem('caloriesTaken', 0)
    localStorage.setItem('caloriesBurned', 0)
  }

  render() {
    const {steps, quantity, intakeCalories, activityBurned} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Calorie Calculator</h1>
        <form onSubmit={this.formSubmit} className="forms-cont">
          <div className="menu">
            <div className="food-cont">
              <label htmlFor="food" className="label">
                Select Meal:
              </label>
              <br />
              <div className="flex-items">
                <select
                  className="select"
                  onChange={this.changeFood}
                  value={intakeCalories}
                >
                  <option selected>Selected The Meal</option>
                  <option value="50">Rice</option>
                  <option value="80">Roti</option>
                  <option value="100">Apple</option>
                  <option value="120">Orange</option>
                </select>

                <input
                  value={quantity}
                  onChange={this.quantituUpdated}
                  placeholder="Enter Quantity"
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="activity-cont">
            <div className="activity-cont-1">
              <label className="label" htmlFor="activity">
                Select Activity:
              </label>
              <br />
              <div>
                <select
                  className="select"
                  onChange={this.changeActivity}
                  value={activityBurned}
                >
                  <option selected>Selected The Activity</option>
                  <option value="10">Running</option>
                  <option value="15">Walking</option>
                </select>

                <input
                  onChange={this.stepsUpdated}
                  value={steps}
                  placeholder="Enter Steps"
                  className="input"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="button">
            Add Now
          </button>
          <button
            type="button"
            className="button clear"
            onClick={this.clearAllItems}
          >
            Clear all
          </button>
        </form>
        <h3 className="left">
          Calories Taken: {caloriesTaken === null ? 0 : caloriesTaken}
        </h3>
        <h3 className="right">
          Calories Burned: {caloriesBurned === null ? 0 : caloriesBurned}
        </h3>
        <h3 className="left">
          Total Calories: {caloriesTaken - caloriesBurned}
        </h3>
      </div>
    )
  }
}

export default App
