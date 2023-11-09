$(document).ready(function () {

  $('form').on('submit', function (event) {
    event.preventDefault(); // this means that WE, the front-code programmers are taking over!
    $.ajax({
      method: 'GET',
      url: 'http://universities.hipolabs.com/search?country=Canada'
      // url: 'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest'
    })
      .then(function (response) {
        console.log('response', response);

        // for (let state of response.data) {
        //   // const newState = $(`<tr><td>${state.State}</td><td>${state.Year}</td><td>${state.Population}</td></tr>`);
        //   // $('#table-body').append(newState);
        // }
        for (let university of response) {
          console.log('university', university);
          const $newUniversity = $('<div></div>');
          $newUniversity.addClass("university");
          $newUniversity.append($(`<h2>${university.name}</h2>`));
          const $listOfWebsites = $('<div class="list-of-websites"></div>');
          for (let website of university.web_pages) {
            const $newWebsite = $(`<div class="website"><a href="${website}">${website}</a></div>`);
            $listOfWebsites.append($newWebsite);
          }
          $newUniversity.append($listOfWebsites);
          $('#display').append($newUniversity);
        }
      })
      .catch(function (error) {
        console.log('error', error);
      });
  });

});
