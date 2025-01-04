


const keyWords = [
    "HTML", "CSS", "JavaScript", "React.js", "Angular", "Vue.js",
    "Bootstrap", "Tailwind CSS", "Responsive Design",
    "DOM (Document Object Model)", "UI/UX Design","Node.js", "Express.js", "Django", "Flask", "Ruby on Rails",
  "PHP", "Laravel", "REST API", "GraphQL", "Authentication", "Middleware","SQL", "NoSQL", "MongoDB", "PostgreSQL", "MySQL", "Firebase",
  "Database Optimization","Git", "Webpack", "NPM (Node Package Manager)", "Yarn",
  "Docker", "Jenkins", "Babel", "CI/CD (Continuous Integration/Continuous Deployment)","Full-stack Development", "Server-Side Rendering (SSR)",
  "Client-Side Rendering (CSR)", "Progressive Web Apps (PWA)",
  "Single Page Application (SPA)", "Cross-Browser Compatibility",
  "Debugging", "Version Control", "API Integration", 
  "Web Performance Optimization"
  ];
  
let resultBox = document.querySelector(".result-box");  
let inputBox = document.getElementById("input-box");  

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = keyWords.filter((keyWords)=>{
            return keyWords.toLowerCase().includes(input.toLowerCase());
        });

        console.log(result);
    }
    display(result);
    if(!result.length){
        resultBox.innerHTML= "";
    }
}

// function display(result){
//     const content = result.map((list)=>{
//         return "<li onclick=selectInput(this)>" + list + "</li>";
//     });

//     resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
//     // resultBox.style.display = 'block';
    
// }

// function display(result) {
//     if (result.length) {
//         resultBox.innerHTML = `
//             <ul>
//                 ${result.map(list => `<li onclick="selectInput(this)">${list}</li>`).join('')}
//             </ul>
//         `;
//     } else {
//         resultBox.innerHTML = "<p>No results found</p>"; // Fallback message
//     }
// }


function display(result) {
    resultBox.innerHTML = ""; // Clear previous results

    if (result.length) {
        const ul = document.createElement("ul");

        result.forEach(list => {
            const li = document.createElement("li");
            li.textContent = list;
            li.addEventListener("click", () => selectInput(li)); // Attach event listener
            ul.appendChild(li);
        });

        resultBox.appendChild(ul);
    } else {
        resultBox.innerHTML = "<p>No results found</p>"; // Fallback message
    }
}



function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}