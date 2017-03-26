'use strict';

const mealObj = {
  name: "Tony",
  bornOn: "1983-02-03",
  calorieTarget: 2000,
  meals:[
    {
      title: 'breakfast',
      date: '2017-03-24',
      description: 'oatmeal',
      calories: 200
    },
    {
      title: 'lunch',
      date: '2017-03-24',
      description: 'sandwich',
      calories: 250
    },
    {
      title: 'dinner',
      date: '2017-03-24',
      description: 'steak and bake potato',
      calories: 800
    },
    {
      title: 'breakfast',
      date: '2017-03-25',
      description: 'oatmeal again',
      calories: 200
    },
    {
      title: 'lunch',
      date: '2017-03-25',
      description: 'ramen',
      calories: 300
    },
    {
      title: 'dinner',
      date: '2017-03-25',
      description: 'chicken',
      calories: 400
    },
  ],
  caloriesEatenOn: function(date) {
    const meals = this.meals
    let totalCalories = 0

    for (i = 0; i < meals.length; i++) {
      if (date === meals[i].date){
        totalCalories += meals[i].calories
      }
    }
    return totalCalories
    
  },
  avgDailyCalories: function () {
    const meals = this.meals
    let dates = []
    let result = 0
    
    for (i = 0; i < meals.length; i++) {
      if(dates.indexOf(meals[i].date) == -1){
        dates.push(meals[i].date)
      }
    }
    for (i=0; i < dates.length; i++){
      result += this.caloriesEatenOn(dates[i])
    }
    return Math.round(result / (dates.length + 1))
    // mealObj.avgDailyCalories()
}
};

module.exports = mealObj;
