const initialDiv = document.getElementById('initialDiv');
const header = document.querySelector('header')
const section = document.querySelector('section')
const submenu = document.getElementById('submenu')

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
let isFirstClick = true;
let isTalentClick = true;
let isBrandsClick = true;
let isEnterpriseClick = true;

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

    if (window.innerWidth <= 768) {
        if (isFirstClick) {
            itemsList.classList.remove('hidden')
            addElement(talentItems)
            onclickTalent.style.color = '#bc1f2f'
            isFirstClick = false;
        }else if (!isFirstClick) {
            itemsList.classList.add('hidden')
            onclickTalent.style.color = '#FFFFFFB3'
            isFirstClick = true;
        }
        
        submenu.classList.toggle('responsive')
        onclickBrands.classList.toggle('responsive')
        onclickEnterprise.classList.toggle('responsive')
    }

    if (window.innerWidth > 768 && isTalentClick) {
        onclickTalent.style.color = '#bc1f2f'
        addElement(talentItems)
        isTalentClick = false;
        isBrandsClick = true;
        isEnterpriseClick = true;
    } 
    
    onclickBrands.style.color = '#FFFFFFB3'
    onclickEnterprise.style.color = '#FFFFFFB3'   
    animation()
    
})


onclickBrands.addEventListener('click', () => {

    if (window.innerWidth <= 768) {
        if (isFirstClick) {
            itemsList.classList.remove('hidden')
            addElement(brandsItems)
            onclickBrands.style.color = '#bc1f2f'
            isFirstClick = false;
        }else if (!isFirstClick) {
            itemsList.classList.add('hidden')
            onclickBrands.style.color = '#FFFFFFB3'
            isFirstClick = true;
        }
        
        submenu.classList.toggle('responsive')
        onclickTalent.classList.toggle('responsive')
        onclickEnterprise.classList.toggle('responsive')
    }

    if (window.innerWidth > 768 && isBrandsClick) {
        onclickBrands.style.color = '#bc1f2f'
        addElement(brandsItems)
        isBrandsClick = false;
        isTalentClick = true;
        isEnterpriseClick = true;
    } 
    
    onclickTalent.style.color = '#FFFFFFB3'
    onclickEnterprise.style.color = '#FFFFFFB3'   
    animation()
})


onclickEnterprise.addEventListener('click', () => {

    if (window.innerWidth <= 768) {
        if (isFirstClick) {
            itemsList.classList.remove('hidden')
            addElement(enterpriseItems)
            onclickEnterprise.style.color = '#bc1f2f'
            isFirstClick = false;
        }else if (!isFirstClick) {
            itemsList.classList.add('hidden')
            onclickEnterprise.style.color = '#FFFFFFB3'
            isFirstClick = true;
        }
        
        submenu.classList.toggle('responsive')
        onclickTalent.classList.toggle('responsive')
        onclickBrands.classList.toggle('responsive')
    }

    if (window.innerWidth > 768 && isEnterpriseClick) {
        onclickEnterprise.style.color = '#bc1f2f'
        addElement(enterpriseItems)
        isEnterpriseClick = false;
        isBrandsClick = true;
        isEnterpriseClick = true;
    } 
    
    onclickTalent.style.color = '#FFFFFFB3'
    onclickBrands.style.color = '#FFFFFFB3'   
    animation()
})

