// Учитель закончил проверку тестов своих учеников, и ему нужна ваша помощь,
// чтобы подсчитать средний балл по классу.
// Создаём функцию getAverage, которая принимает массив результатов тестов и возвращает средний балл.
function getAverage(scores) {
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
}
// Теперь учителю нужна ваша помощь в преобразовании оценки ученика в буквенную оценку.
// Создаём функцию getGrade, которая принимает числовую оценку в качестве параметра.
// И возвращает строку, представляющую буквенную оценку, основанную на баллах.

function getGrade(score) {
  if (score <= 59) {
    return "F"
  } else if (score <= 69) {
    return "D"
  } else if (score <= 79) {
    return "C"
  } else if (score <= 89) {
    return "B"
  } else if (score <= 99) {
    return "A"
  } else {
    return "A++"
  }
}

// Учитель действительно доволен программой, которую вы создали на данный момент.
// Но теперь он хочет иметь простой способ проверить, есть ли у ученика проходной балл.
// Проходной балл - это все, что не является "двойкой" ("F").
//  Создаём функцию, которая возвращает значение true, если у учащегося есть проходной балл,
//  и значение false, если у него его нет.
function hasPassingGrade(score) {
  return score <= 59 ? false : true
}

// Теперь, когда у преподавателя есть вся необходимая информация,
// он хочет иметь возможность отправить учащемуся сообщение с результатами.
// Создаём функцию studentMsg, указав в качестве параметров итоговые баллы и оценку учащегося.
// Функция двозвращает строку, представляющую сообщение для учащегося.

function studentMsg(totalScores, studentScore) {
  if (getGrade(studentScore) === "F") {
    return "Class average: " + getAverage(totalScores) + "." + " Your grade: " + getGrade(studentScore) + "." + " You failed the course."
  } else {
    return "Class average: " + getAverage(totalScores) + "." + " Your grade: " + getGrade(studentScore) + "." + " You passed the course."
  }
}
// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));



