const elementResult = () => {
  for (let i = 0; i < 10; i++) {
    document.getElementById("resultimage" + i).src = searchResult[i].Image;
    document.getElementById(
      "resulttitle" + i
    ).innerText = `Title: ${searchResult[i].Title}`;
    document.getElementById(
      "resultauthor" + i
    ).innerHTML = `Author: ${searchResult[i].Author}`;
    document.getElementById(
      "resultdescription" + i
    ).innerText = `Descripton: ${searchResult[i].Description}`;
  }
};
export default elementResult;

// for (let i = 0; i < 10; i++) {
//   document.getElementById("result" + i + "--image").src =
//     searchResult[i].Image;
//   document.getElementById(
//     "result" + i + "--title"
//   ).innerText = `Title: ${searchResult[i].Title}`;
//   document.getElementById(
//     "result" + i + "--author"
//   ).innerText = `Author: ${searchResult[i].Author}`;
//   document.getElementById(
//     "result" + i + "--description"
//   ).innerText = `Descripton: ${searchResult[i].Description}`;
// }

//   document.getElementById("result1--image").src = searchResult[0].Image;
//   document.getElementById(
//     "result1--title"
//   ).innerText = `Title: ${searchResult[0].Title}`;
//   document.getElementById(
//     "result1--author"
//   ).innerText = `Author: ${searchResult[0].Author}`;

//   document.getElementById(
//     "result1--description"
//   ).innerText = `Descripton: ${searchResult[0].Description}`;

//   document.getElementById("result2--image").src = searchResult[1].Image;
//   document.getElementById(
//     "result2--title"
//   ).innerText = `Title: ${searchResult[1].Title}`;
//   document.getElementById(
//     "result2--author"
//   ).innerText = `Author: ${searchResult[1].Author}`;
//   document.getElementById(
//     "result2--description"
//   ).innerText = `Descripton: ${searchResult[1].Description}`;

//   document.getElementById("result3--image").src = searchResult[2].Image;
//   document.getElementById(
//     "result3--title"
//   ).innerText = `Title: ${searchResult[2].Title}`;
//   document.getElementById(
//     "result3--author"
//   ).innerText = `Author: ${searchResult[2].Author}`;
//   document.getElementById(
//     "result3--description"
//   ).innerText = `Descripton: ${searchResult[2].Description}`;

//   document.getElementById("result4--image").src = searchResult[3].Image;
//   document.getElementById(
//     "result4--title"
//   ).innerText = `Title: ${searchResult[3].Title}`;
//   document.getElementById(
//     "result4--author"
//   ).innerText = `Author: ${searchResult[3].Author}`;
//   document.getElementById(
//     "result4--description"
//   ).innerText = `Descripton: ${searchResult[3].Description}`;

//   document.getElementById("result5--image").src = searchResult[4].Image;
//   document.getElementById(
//     "result5--title"
//   ).innerText = `Title: ${searchResult[4].Title}`;
//   document.getElementById(
//     "result5--author"
//   ).innerText = `Author: ${searchResult[4].Author}`;
//   document.getElementById(
//     "result5--description"
//   ).innerText = `Descripton: ${searchResult[4].Description}`;

//   document.getElementById("result6--image").src = searchResult[5].Image;
//   document.getElementById(
//     "result6--title"
//   ).innerText = `Title: ${searchResult[5].Title}`;
//   document.getElementById(
//     "result6--author"
//   ).innerText = `Author: ${searchResult[5].Author}`;
//   document.getElementById(
//     "result6--description"
//   ).innerText = `Descripton: ${searchResult[5].Description}`;

//   document.getElementById("result7--image").src = searchResult[6].Image;
//   document.getElementById(
//     "result7--title"
//   ).innerText = `Title: ${searchResult[6].Title}`;
//   document.getElementById(
//     "result7--author"
//   ).innerText = `Author: ${searchResult[6].Author}`;
//   document.getElementById(
//     "result7--description"
//   ).innerText = `Descripton: ${searchResult[6].Description}`;

//   document.getElementById("result8--image").src = searchResult[7].Image;
//   document.getElementById(
//     "result8--title"
//   ).innerText = `Title: ${searchResult[7].Title}`;
//   document.getElementById(
//     "result8--author"
//   ).innerText = `Author: ${searchResult[7].Author}`;
//   document.getElementById(
//     "result8--description"
//   ).innerText = `Descripton: ${searchResult[7].Description}`;

//   document.getElementById("result9--image").src = searchResult[8].Image;
//   document.getElementById(
//     "result9--title"
//   ).innerText = `Title: ${searchResult[8].Title}`;
//   document.getElementById(
//     "result9--author"
//   ).innerText = `Author: ${searchResult[8].Author}`;
//   document.getElementById(
//     "result9--description"
//   ).innerText = `Descripton: ${searchResult[8].Description}`;

//   document.getElementById("result10--image").src = searchResult[9].Image;
//   document.getElementById(
//     "result10--title"
//   ).innerText = `Title: ${searchResult[9].Title}`;
//   document.getElementById(
//     "result10--author"
//   ).innerText = `Author: ${searchResult[9].Author}`;
//   document.getElementById(
//     "result10--description"
//   ).innerText = `Descripton: ${searchResult[9].Description}`;
// };
