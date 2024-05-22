const initialDiv = document.getElementById('initialDiv');
const header = document.querySelector('header')
const section = document.querySelector('section')

header.addEventListener('click',()=>{
    window.location.reload();
})

const animation = () => {
    const listItems = document.querySelectorAll('li');
    listItems.forEach(function (item, index) {
        item.style.transitionDelay = (index + 1) / 10 + 's';
    });
    setTimeout(function () {
        listItems.forEach(function (item) {
            item.classList.add('show');
        });
    }, 100);
}

setTimeout(function () {
    initialDiv.style.backgroundColor = 'black'
}, 700);

setTimeout(function () {
    header.style.display = 'block'
    section.style.display = 'flex'
    initialDiv.style.display = 'none'
    animation()
}, 1000);

const onclickTalent = document.getElementById('onclickTalent');
const onclickBrands = document.getElementById('onclickBrands');
const onclickEnterprise = document.getElementById('onclickEnterprise');
const itemsList = document.getElementById("subitems");


const talentItems = ['Baseball', 'Basketball', 'CAA base', 'CAA China', 'Client Business Ventures', 'Coachins', 'Entainment Talent', 'Football', 'Hockey', 'Live Event Booking', 'Sports Endorsements', 'CAA Foundation']
const brandsItems = ['Brand Consulting', 'CAA Brand Management', 'CAA China', 'Digital Media', 'Partnership Sales', 'CAA Brand Studio']
const enterpriseItems = ['CAA Icon', 'CAA Evolution', 'EBG', 'Executive Search', 'Sports Licensing', 'Sports Property Sales']

const addElement = (parentElement) => {
    itemsList.innerHTML = '';
    parentElement.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        itemsList.appendChild(listItem);
    });
}


onclickTalent.addEventListener('click', () => {
    // onclickTalent.classList.add = 'talentResponsive'
    onclickTalent.style.color = '#bc1f2f'
    onclickBrands.style.color = '#FFFFFFB3'
    onclickEnterprise.style.color = '#FFFFFFB3'   
    addElement(talentItems)
    animation()
})


onclickBrands.addEventListener('click', () => {
    onclickTalent.style.color = '#FFFFFFB3'
    onclickBrands.style.color = '#bc1f2f'
    onclickEnterprise.style.color = '#FFFFFFB3'   
    addElement(brandsItems)
    animation()
})


onclickEnterprise.addEventListener('click', () => {
    onclickEnterprise.style.color = '#bc1f2f'
    onclickBrands.style.color = '#FFFFFFB3'
    onclickTalent.style.color = '#FFFFFFB3'
    addElement(enterpriseItems);
    animation()
})

