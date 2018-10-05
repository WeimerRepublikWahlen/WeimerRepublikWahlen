var name_ = ["KPD", "USPD", "SPD", "Z/BVP", "DDP", "DVP", "DNVP", "NSDAP"];
var data = [[0.0,  0.076,   0.38,  0.20,     0.186, 0.044, 0.10,   0.0  ],
          [0.021,  0.179,   0.216, 0.18,     0.084, 0.14,  0.15,   0.0  ],
          [0.126,  0.008,   0.205, 0.166,    0.057, 0.09,  0.195,  0.066],
          [0.09,   0.003,   0.26,  0.171,    0.063, 0.10,  0.205,  0.03 ],
          [0.106,  0.001,   0.30,  0.15,     0.05,  0.087, 0.142,  0.026],
          [0.131,  0.0003,  0.245, 0.148,    0.038, 0.045, 0.07,   0.183],
          [0.146,  0.00,    0.216, 0.157,    0.01,  0.012, 0.059,  0.374],
          [0.17,   0.00,    0.204, 0.15,     0.01,  0.019, 0.088,  0.331],
          [0.123,  0.00,    0.183, 0.14,     0.009, 0.011, 0.08,   0.439]];
var dates = ["19. Januar 1919","6. Juni 1920","4. Mai 1924","7. Dezember 1924", "20. Mai 1928","14. September 1930", "31. Juli 1932", "6. November 1932", "5. März 1933"];
var  c = ['#8B0000', '#C40000', '#E3000F', '#FFFF00', '#000000', '#C3C318', '#037DF2', '#804c19'];
var permax = 0.50;
var textHeight = 20;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  
}    

function draw() {
  background(255);
  let dl = data.length-1;
  let yearIdx = floor(mouseX/(width/dl));//|-0-|-1-|-2-|
  let withOfIdx = width/(dl);
  let lowestIdx = yearIdx*(width/dl);
  let progress = (mouseX-lowestIdx)/withOfIdx;
  console.log(yearIdx);
  let spacing = width/data[0].length;
  let padding = 5;
  textHeight = spacing/5
  textSize(textHeight);
  for (let i= 0; i<data[0].length; i++) {
    let percentage  = data[yearIdx][i]+(data[yearIdx+1][i]-data[yearIdx][i])*progress;
    let perStrech = 1/permax*(height-textHeight);
    fill(c[i]);
    rect(padding/2+i*spacing, height, spacing-padding/2, -percentage*perStrech+padding);
    fill(0);
    
    text(name_[i]+' ', padding/2+i*spacing, height-percentage*perStrech);
  }
  textSize(textHeight*2)
  let yearText = yearIdx==dates.length-1?"frbhej_TODO_nrbhfenj":dates[yearIdx]+" - "+dates[yearIdx+1]
  text(yearText,width/2-(textHeight*1.2)*(dates[yearIdx].length+dates[yearIdx+1].length)/2,textHeight*2)
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}