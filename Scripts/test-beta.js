 document.getElementById("button").addEventListener("click", nextStep, false);
  var progressBar = document.getElementById("testprogressbar");
  var yesLabel = document.getElementById("yesLabel");
  var noLabel = document.getElementById("noLabel");

  var currentQuestionNumber = 0;

  var questions = new Array(   //{number:"", result:"", type:"", q1:"", q2:"", q3:"", topSchools:["","","","","","","","","","","",""]}
    // {number:"0", result:"false", type: "nerdy", q1:"Are you nerdy? 1", q2:"Are you nerdy? 2", q3:"Are you nerdy? 3", topSchools:["nerdy school 1", "nerdy school 2","nerdy school 3","nerdy school 4","nerdy school 5","nerdy school 6","nerdy school 7","nerdy school 8","nerdy school 9","nerdy school 10"] },
    // {number:"1", result:"false", type:"smallCity", q1:"Do you like small city? 1", q2:"Do you like small city? 2", q3:"Do you like small city? 3", topSchools:["small city school 1","small city school 2","small city school 3", "small city school 4", "small city school 5","small city school 6","small city school 7","small city school 8","small city school 9","small city school 10"]},
    // {number:"2", result:"false", type:"goodFood", q1:"Do you like good food? 1", q2:"Do you like good food? 2", q3:"Do you like good food? 3", topSchools:["good food school 1","good food school 2","good food school 3","good food school 4","good food school 5","good food school 6","good food school 7","good food school 8","good food school 9","good food school 10"]},
    // {number:"3", result:"false", type:"social", q1:"Are you social? 1", q2:"Are you social? 2", q3:"Are you social? 3", topSchools:["social school 1","social school 2","social school 3","social school 4","social school 5","social school 6","social school 7","social school 8","social school 9","social school 10"]},
    // {number:"4", result:"false", type:"athletic", q1:"Are you athletic? 1", q2:"Are you athletic? 2", q3:"Are you athletic? 3", topSchools:["athletic school 1","athletic school 2","athletic school 3","athletic school 4","athletic school 5","athletic school 6","athletic school 7","athletic school 8","athletic school 9", "athletic school 10"]}
//     {number:"", result:"false", type:"party schools", q1:"Do you like party schools? 1", q2:"Do you like party schools? 2", q3:"Do you like party schools? 3", topSchools:["Boston University","University of California--Santa Barbara","University of Michigan--Ann Arbor","University of Virginia","Duke University","Vanderbilt University","University of Wisconsin--Madison","University of California--San Diego","Lehigh University","University of North Carolina--Chapel Hill"]},
// {number:"", result:"false", type:"college food", q1:"Is college food important to you? 1", q2:"Is college food important to you? 2", q3:"Is college food important to you? 3", topSchools:["University of California--Los Angeles","Washington University in St.Louis","Cornell University","Rice University","University of California--Davis","Tufts University","Emory University","Stanford University","Boston University","University of Michigan--Ann Arbor"]},
//
// {number:"", result:"false", type:"city school", q1:"Do you love life in cities? 1", q2:"Do you love life in cities? 2", q3:"Do you love life in cities? 3", topSchools:["University of Chicago","New York University","Columbia University","Northeastern University","Georgetown University","Boston College","Harvard University","University of California--Los Angeles","University of Pennsylvania","Johns Hopkins University"]},
//
// {number:"", result:"false", type:"athletic schools", q1:"Are you a very athletic person? 1", q2:"Are you a very athletic person? 2", q3:"Are you a very athletic person? 3", topSchools:["Duke University","University of Michigan--Ann Arbor","University of Southern California","University of California--Irvine","University of North Carolina--Chapel Hill","University of California--Davis","Vanderbilt University","University of Wisconsin--Madison","Dartmouth College","University of Notre Dame"]},
// {number:"", result:"false", type:"student culture", q1:"Are you excited about unique student cultures? 1", q2:"Are you excited about unique student cultures? 2", q3:"Are you excited about unique student cultures? 3", topSchools:["Rice University","Stanford University","University of Michigan--Ann Arbor","California Institute of Technology","Massachusetts Institute of Technology","Washington University in St.Louis","University of Virginia","Brown University","University of Southern California","University of Pennsylvania"]},
//
// {number:"", result:"0", type:"1from4QuestionRecorderSecond", q1:"", q2:"", q3:"", wenQuestions : ["prefer humanity to social science? 1", "prefer humanity to social science? 2", "prefer humanity to social science? 3"], liQuestions : [ "prefer natural science to engineering? 1", "prefer natural science to engineering? 2","prefer natural science to engineering? 3"],topSchools:["","","","","","","","","","","",""]},
// {number:"", result:"0", type:"1from4QuestionRecorderFirst", q1:"Are you more appealed by natural language than by mathematical expressions? 1", q2:"Are you more appealed by natural language than by mathematical expressions? 2", q3:"Are you more appealed by natural language than by mathematical expressions? 3", topSchools:["","","","","","","","","","","",""]},

{number:"", result:"false", type:"party schools", q1:"I enjoy hanging out with friends, even willing to sacrifice my time for study.", q2:"I love American party culture in universities, and I’m attracted to those parties.", q3:"I might join a brilliant fraternity or sorority in my university.", topSchools:["Boston University","University of California--Santa Barbara","University of Michigan--Ann Arbor","University of Virginia","Duke University","Vanderbilt University","University of Wisconsin--Madison","University of California--San Diego","Lehigh University","University of North Carolina--Chapel Hill"]},

{number:"", result:"false", type:"college food", q1:"I always spend time finding new restaurants and seek for the best food.", q2:"While I’m absorbed in interesting academic topics, I seldom skip my meals.", q3:"I recognize myself as a ‘foodie’.", topSchools:["University of California--Los Angeles","Washington University in St.Louis","Cornell University","Rice University","University of California--Davis","Tufts University","Emory University","Stanford University","Boston University","University of Michigan--Ann Arbor"]},

{number:"", result:"false", type:"city school", q1:"Compared to research opportunities in universities, I’d rather have more internship opportunities in big companies.", q2:"I love the fast pace in cities; I get bored in a rural surrounding.", q3:"I enjoy the excitement and convenience for living in cities: big shopping malls, well-developed public transportation system, sky-scrappers, and neon lights! ", topSchools:["University of Chicago","New York University","Columbia University","Northeastern University","Georgetown University","Boston College","Harvard University","University of California--Los Angeles","University of Pennsylvania","Johns Hopkins University"]},

{number:"", result:"false", type:"athletic schools", q1:"I plan to join a school sports team in future university.", q2:"I’m interested in competitive sports, and I can play them well.", q3:"I excel at one (or more) sports and have been awarded for my athletic skills.", topSchools:["Duke University","University of Michigan--Ann Arbor","University of Southern California","University of California--Irvine","University of North Carolina--Chapel Hill","University of California--Davis","Vanderbilt University","University of Wisconsin--Madison","Dartmouth College","University of Notre Dame"]},

{number:"", result:"false", type:"student culture", q1:"I am excited about unique student cultures.", q2:"Belongingness matters to me.", q3:"I hold high expectations for student clubs: I’d love to join them.", topSchools:["Rice University","Stanford University","University of Michigan--Ann Arbor","California Institute of Technology","Massachusetts Institute of Technology","Washington University in St.Louis","University of Virginia","Brown University","University of Southern California","University of Pennsylvania"]},

{number:"", result:"0", type:"1from4QuestionRecorderSecond", q1:"", q2:"", q3:"", wenQuestions : ["I am interested in linguistics, history, and arts.", "I would spend more time reading than communicating with people.", "I’m less interested in finding out how society works out as a whole; rather, I admire personal brilliance. "], liQuestions : [ "I love exploring the existing world more than creating new things.", "Compared to crafting models, I’m more interested in studying scientific concepts.","I’d rather become a researcher than an engineer."],topSchools:["","","","","","","","","","","",""]},

{number:"", result:"0", type:"1from4QuestionRecorderFirst", q1:"I’m more appealed to by human languages than by mathematical expressions.", q2:"Maths and science are my weaknesses.", q3:"I’m more appealed to by human languages than by mathematical expressions.", topSchools:["","","","","","","","","","","",""]},


);
  // var TopSchools1from4 = [
  //
  //   {number:"", result:"", type:"engineering", q1:"", q2:"", q3:"", topSchools:["engineering good school 1","engineering good school 2","engineering good school 3","engineering good school 4","engineering good school 5","engineering good school 6","engineering good school 7","engineering good school 8","engineering good school 9","engineering good school 10"]},
  //   {number:"", result:"", type:"humanity", q1:"", q2:"", q3:"", topSchools:["humanity good school 1","humanity good school 2","humanity good school 3","humanity good school 4","humanity good school 5","humanity good school 6","humanity good school 7","humanity good school 8","humanity good school 9","humanity good school 10"]},
  //   {number:"", result:"", type:"social science", q1:"", q2:"", q3:"", topSchools:["social science good school 1","social science good school 2","social science good school 3","social science good school 4","social science good school 5","social science good school 6","social science good school 7","social science good school 8","social science good school 9","social science good school 10"]},
  //   {number:"", result:"", type:"natural science", q1:"", q2:"", q3:"", topSchools:["natural science good school 1","natural science good school 2","natural science good school 3","natural science good school 4","natural science good school 5","natural science good school 6","natural science good school 7","natural science good school 8","natural science good school 9","natural science good school 10"]},
  //
  // ];

  var TopSchools1from4 = [

    {number:"", result:"", type:"engineering", q1:"", q2:"", q3:"", topSchools:["Massachusetts Institute of Technology","California Institute of Technology","University of Illinois--Urbana-Champaign","Carnegie Mellon University","Georgia Institute of Technology","Rensselaer Polytechnic Institute","Johns Hopkins University","University of California--Berkeley","Cornell University","University of Rochester"]},
    {number:"", result:"", type:"humanity", q1:"", q2:"", q3:"", topSchools:["Harvard University","University of California, Berkeley","Georgetown University","Yale University","College of William & Mary","Columbia University","University of Southern California","New York University","Wake Forest University","University of Chicago"]},
    {number:"", result:"", type:"social science", q1:"", q2:"", q3:"", topSchools:["Northwestern University","University of Pennsylvania","Dartmouth College","University of Notre Dame","Yale University","Princeton University","Columbia University","University of Chicago","Harvard University","Tufts University"]},
    {number:"", result:"", type:"natural science", q1:"", q2:"", q3:"", topSchools:["Massachusetts Institute of Technology","Princeton University","Case Western Reserve University","California Institute of Technology","Georgia Institute of Technology","Duke University","Northwestern University","Brandeis University","Yale University","Brown University"]},

  ];
  var questionAnswers = 0;
  shuffleArray(questions);

  function shuffleArray(array) {
    // console.log("shuffling array");
    for (var i = 0; i < array.length; i++) {
      var temp = array[i];
      var randInt = Math.floor(Math.random() * (array.length - i)) + i;

      array[i] = array[randInt];
      array[randInt] = temp;
    }
    // console.log("array shuffled!");
    for (question in questions) {
      // console.log(question.type);
    }
  }
  var indexOfFirst = 0;   //the index of the first 1from4 question
  var indexOfSecond = 0;
  correctOrderOf1From4Questions();
  function correctOrderOf1From4Questions() {

    for (var i = 0; i < questions.length; i++) {
      if (questions[i].type == "1from4QuestionRecorderSecond") {
        indexOfSecond = i;
      }else if (questions[i].type == "1from4QuestionRecorderFirst"){
        indexOfFirst = i;
      }
    }
    if(indexOfFirst > indexOfSecond) {
      //swap the two questions
      var temp = questions[indexOfFirst];
      questions[indexOfFirst] = questions[indexOfSecond];
      questions[indexOfSecond] = temp;

      //swap the two recorded indexes
      var temp1 = indexOfFirst;
      indexOfFirst = indexOfSecond;
      indexOfSecond = temp1;
    }

  }
  // for(elem of questions){
  //   console.log(elem.type);
  // }

  showQuestion();
  function showQuestion() {
    checkAndUpdateTheSecond1From4Question();
    var max = 4;
    var min = 1;
    var randInt = Math.floor(Math.random() * (max - min)) + min; // a random integer from 1, 2, or 3
    if(randInt == 1){
      document.getElementById("question").innerHTML = questions[currentQuestionNumber].q1;
    }else if(randInt == 2){
      document.getElementById("question").innerHTML = questions[currentQuestionNumber].q2;
    }else{
      document.getElementById("question").innerHTML = questions[currentQuestionNumber].q3;
    }
  }

  function checkAndUpdateTheSecond1From4Question() {

    if(questions[indexOfFirst].result != "0") {   //the first question has been answered
      if(questions[indexOfFirst].result == "true") {    //if the first answer is indicating "wen"
        questions[indexOfSecond].q1 = questions[indexOfSecond].wenQuestions[0];
        questions[indexOfSecond].q2 = questions[indexOfSecond].wenQuestions[1];
        questions[indexOfSecond].q3 = questions[indexOfSecond].wenQuestions[2];
      }
      if(questions[indexOfFirst].result == "false") {    //if the first answer is indicating "li"
        questions[indexOfSecond].q1 = questions[indexOfSecond].liQuestions[0];
        questions[indexOfSecond].q2 = questions[indexOfSecond].liQuestions[1];
        questions[indexOfSecond].q3 = questions[indexOfSecond].liQuestions[2];
        // console.log("liqeustions updated");
      }

    }
  }

  function nextStep() {
    var radios = document.getElementsByName("yesOrNo");

    var checkedOneOfTheOptions = false;
    for(choice of radios){
      if(choice.checked && choice.id == "yesButton") {

        //store answer
        if(currentQuestionNumber != indexOfFirst && currentQuestionNumber != indexOfSecond ){
          questionAnswers += 1;
        }
        questions[currentQuestionNumber].result = "true";

        checkedOneOfTheOptions = true;
        choice.checked = false;
        $('#yesLabel').removeClass('active');

      }else if(choice.checked && choice.id == "noButton"){
        questionAnswers += 0;
        questions[currentQuestionNumber].result = "false";
        checkedOneOfTheOptions = true;
        choice.checked = false;
        $('#noLabel').removeClass('active');

      }

    }
    if(!checkedOneOfTheOptions) {
      return;
    }

    //*****progressBar
    const NUMBER_OF_QUESTIONS = 7;
    var increment = 100 / NUMBER_OF_QUESTIONS;
    var newWidth = parseInt(progressBar.style.width);
    newWidth += increment;
    newWidth = newWidth.toString();
    newWidth += "%";
    progressBar.style.width = newWidth;
    //*****progressBar

     currentQuestionNumber++;
     if(currentQuestionNumber == questions.length) {
       showResults();
       return;
     }

     showQuestion();


  }
  function showResults() {
    var schoolsToOutput = calculateSchools();
    var htmlResult = '<div class="jumbotron jumbotron-fluid"><div class="container"><h1 class="display-4">Here are some schools we have picked for you!</h1> <br>';
    for(school of schoolsToOutput){
      htmlResult += '<p class="lead">';
      htmlResult += school;
      htmlResult += school;
      htmlResult += "<br>";
    }
      htmlResult += "</p>";
      htmlResult += '<br><p>If you want to learn more how these colleges are selected, you can try our school filter to learn how our algorithms work by creating your own college ranking</p><p>During our testing phase, you can try our filter after finishing our <a href="test.html">college match</a> test.</p><a class="btn btn-primary btn-lg more-button" href="https://collegefork.com/match/filter.html" role="button">Proceed to our filter</a></div></div>'

    document.getElementById("match").innerHTML = htmlResult;
  }

  function calculateSchools() {
    var tempResults = [];
    for(question of questions) {
      if(question.type != "1from4QuestionRecorderSecond" && question.type != "1from4QuestionRecorderFirst") {
        if(question.result == "true") {
          getSchoolsOfThisType(tempResults, question);
          console.log(tempResults);
        }
      }
    }

    var collegesRequired = 4;
    var schoolsToOutput = [];
    tempResults=toArrayWithOnlySchools(tempResults);
    if(checkIfLessThanRequired(tempResults, collegesRequired)) {  //output all schools
      let set = new Set();
      for (school of tempResults) {
        set.add(school);
      }
      for(school of set) {
        schoolsToOutput.push(school);
      }

    }else{
      let set = new Set();
      shuffleArray(tempResults);
      for (var i = 0; set.size < collegesRequired; i++) {
        set.add(tempResults[i]);
      }
      for(school of set) {
        schoolsToOutput.push(school);
      }
    }
    addSchoolsOf1from4Thread(schoolsToOutput);
  // console.log("out",schoolsToOutput);
    //swap the first and the last which is 1from4 recommended
    var temp = schoolsToOutput[0];
    schoolsToOutput[0] = schoolsToOutput[schoolsToOutput.length - 1];
    schoolsToOutput[schoolsToOutput.length - 1] = temp;
    return schoolsToOutput;
  }
  function addSchoolsOf1from4Thread(schoolsToOutput) {
    var result1from4 = "";
    if(questions[indexOfFirst].result == "true") {  // selected wen for the first question
      if(questions[indexOfSecond].result == "true") {// selected humanity
        result1from4 = "humanity";
      }else{  //selected social science
        result1from4 = "social science";
      }
    }else{ //selected li for the first question
      if(questions[indexOfSecond].result == "true") {// selected natrual science
        result1from4 = "natural science";
      }else{  //selected engineering
        result1from4 = "engineering";
      }
    }

    var allSchools;
    var numberOfSchoolsToAdd = 5;
    for (list of TopSchools1from4) {
      if (list.type == result1from4) {
        allSchools = list.topSchools;
      }
    }
    var outputArray = [];
    var schoolPriority = new Array();
    for (var i = 0; i < allSchools.length; i++) {
      schoolPriority[i] = (allSchools.length-1) - i; //make [9,8,7,6,5,4,3,2,1,0]
      var randomAddition = Math.floor(Math.random() * (allSchools.length - 0)) + 0;


      schoolPriority[i] += randomAddition;
    }
    for(var i = 0; i < numberOfSchoolsToAdd; i++) {
      var highestScore = schoolPriority[0];
      var highestScoreIndex = 0;
      for (var j = 0; j < schoolPriority.length; j++) {
        if(schoolPriority[j] > highestScore) {
          highestScore = schoolPriority[i];
          highestScoreIndex = j;

        }
      }
      outputArray.push(allSchools[highestScoreIndex]);
      schoolPriority[highestScoreIndex] = -1;
    }
// console.log(outputArray);
    if (schoolsToOutput.length == 0) {
      for(var i = 0; i < outputArray.length; i++) {
        schoolsToOutput[i] = outputArray[i];
      }
      var temp = schoolsToOutput[0];
      schoolsToOutput[0] = schoolsToOutput[schoolsToOutput.length - 1];
      schoolsToOutput[schoolsToOutput.length - 1] = temp;

    }else{
      for(var i = 0; i < outputArray.length; i++) {
        if(inArray(schoolsToOutput, outputArray[i])){
          // continue;
        }else{
          schoolsToOutput.push(outputArray[i]);
          break;
        }
      }
    }
    // console.log("in",schoolsToOutput);
  }

  function inArray(array, object) {
    var result = false;
    for (thing of array) {
      if(thing == object) {
        result = true;
      }
    }
    return result;
  }
  function checkIfLessThanRequired(array, numRequired) {
    let set = new Set();
    for (school of array) {
      set.add(school);
    }
    // console.log(set.size);
    // for(thing of set) {
    //   console.log(thing);
    // }
    if(set.size < numRequired) {
      return true;
    }else{
      return false;
    }

  }
  // turn [[1,2],[3,4],[5,6],[7,8]] into [1,2,3,4,5,6,7,8]
  function toArrayWithOnlySchools(results) {
    var tempArray = [];
    for (group of results) {

      for (school of group) {
        tempArray.push(school);
      }



    }
    return tempArray;
  }
  function getSchoolsOfThisType(results, question){
    var numberToGet = numberForEachType(questionAnswers); //calculate the number of schools to get from each type
    var allSchools = question.topSchools;

    var outputArray = [];
    var schoolPriority = new Array();
    for (var i = 0; i < allSchools.length; i++) {
      schoolPriority[i] = (allSchools.length-1) - i; //make [9,8,7,6,5,4,3,2,1,0]
      var randomAddition = Math.floor(Math.random() * (allSchools.length - 0)) + 0;


      schoolPriority[i] += randomAddition;
    }
    for(var i = 0; i < numberToGet; i++) {
      var highestScore = schoolPriority[0];
      var highestScoreIndex = 0;
      for (var j = 0; j < schoolPriority.length; j++) {
        if(schoolPriority[j] > highestScore) {
          highestScore = schoolPriority[i];
          highestScoreIndex = j;

        }
      }
      outputArray.push(allSchools[highestScoreIndex]);
      schoolPriority[highestScoreIndex] = -1;
    }
    results.push(outputArray);
  }
  function numberForEachType(q) {
    return Math.ceil(10 / q);
  }
