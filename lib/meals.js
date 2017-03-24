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
      description: 'oatmea again',
      calories: 200
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
  }
};

module.exports = mealObj;
