let output = document.querySelector(".output");
output.innerHTML = "";

for (let i = 10; i > -1; i--) {
  if (i === 0) {
    const blastoff = document.createElement("h3");
    blastoff.textContent = "Blastoff!";
    output.appendChild(blastoff);
  } else {
    const para = document.createElement("p");
    para.textContent = `Countdown: ${i}`;
    output.appendChild(para);
  }
}
// let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
