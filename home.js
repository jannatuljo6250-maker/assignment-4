let interviewList = [];
let rejectedList =[];


let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


const jobCardsSection = document.getElementById('job-cards');
// console.log(jobCardsSection.children.length);
const mainContainer = document.querySelector('main')
console.log(mainContainer);

function calculateJob(){
    total.innerText = jobCardsSection.children.length
    interview.innerText =interviewList.length
    rejected.innerText = rejectedList.length
}
calculateJob()

function toggleStyle(id){
    allFilterBtn.classList.remove("bg-blue-700","text-white");
    interviewFilterBtn.classList.remove("bg-blue-700","text-white");
    rejectedFilterBtn.classList.remove("bg-blue-700","text-white");

    allFilterBtn.classList.add("bg-white","text-black");
    interviewFilterBtn.classList.add("bg-white","text-black");
    rejectedFilterBtn.classList.add("bg-white","text-black");

    console.log(id);

    const selected = document.getElementById(id);
    console.log(selected);

    selected.classList.remove("bg-white","text-black")
    selected.classList.add("bg-blue-700","text-white")
}

mainContainer.addEventListener('click',function(event){
    const parenNode = event.target.parentNode.parentNode;
    const jobName =parenNode.querySelector ('#job-name').innerText;
    const jobQuality = parenNode.querySelector('#details').innerText
    const salaryInfo = parenNode.querySelector('salary').innerText
    const statusInfo = parenNode.querySelector('status').innerText
    const notesInfo = parenNode.querySelector('notes').innerText
})

const cardInfo = {
jobName,
jobQuality,
salaryInfo,
statusInfo,
notesInfo
}
 
const jobExist = interviewList.find(item=>item.jobName == cardInfo.jobName)

if (!jobExist) {
    interviewList.push(cardInfo);
}

