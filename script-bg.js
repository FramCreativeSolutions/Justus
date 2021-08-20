let BG1 = document.getElementsByClassName('bg-button')[1];
let EN1 = document.getElementsByClassName('en-button')[1];
let BG01 = document.getElementsByClassName('bg-button')[0];
let EN01 = document.getElementsByClassName('en-button')[0];
let language1 = 'en'

BG1.addEventListener('click', () => {
    language = 'bg'
    BG1.style.fontWeight = '800'
    BG01.style.fontWeight = '800'
    EN1.style.fontWeight = '400'
    EN01.style.fontWeight = '400'
    document.getElementsByClassName('english')[0].style.display = 'none'
    document.getElementsByClassName('bulgarian')[0].style.display = 'block'
})
EN1.addEventListener('click', () => {
    language = 'en'
    EN1.style.fontWeight = '800'
    EN01.style.fontWeight = '800'
    BG1.style.fontWeight = '400'
    BG01.style.fontWeight = '400'
    document.getElementsByClassName('english')[0].style.display = 'block'
    document.getElementsByClassName('bulgarian')[0].style.display = 'none'
})

if (language1 === 'en') {
    EN1.style.fontWeight = '800'
    EN01.style.fontWeight = '800'
    BG1.style.fontWeight = '400'
    BG01.style.fontWeight = '400'
    document.getElementsByClassName('english')[0].style.display = 'block'
    document.getElementsByClassName('bulgarian')[0].style.display = 'none'
} else {
    BG1.style.fontWeight = '800'
    BG01.style.fontWeight = '800'
    EN1.style.fontWeight = '400'
    EN01.style.fontWeight = '400'
    document.getElementsByClassName('english')[0].style.display = 'none'
    document.getElementsByClassName('bulgarian')[0].style.display = 'block'
}


let burgerOpen1 = false
let burger1 = document.getElementsByClassName('burger')[1];
burger1.addEventListener('click', () => {
    burger1.style.transform = 'translateY(20%)'
    
if (burgerOpen1 === false){
    document.getElementsByClassName('nav-items')[1].style.display = 'flex'
    burger1.style.background = 'url(./cross.svg) no-repeat'
    burgerOpen1 = !burgerOpen1
} else {
    document.getElementsByClassName('nav-items')[1].style.display = 'none'
    burger1.style.background = 'url(./burger.svg) no-repeat'
    burgerOpen1 = !burgerOpen1
} 
})


let home_button1 = document.getElementsByClassName('HOME')[1]
let history_button1 = document.getElementsByClassName('OUR-HISTORY')[1]
let team_button1 = document.getElementsByClassName('TEAM')[1]
let values_button1 = document.getElementsByClassName('VALUES')[1]
let services_button1 = document.getElementsByClassName('SERVICES')[1]
let location_button1 = document.getElementsByClassName('CONTACTS')[1]

let top_nav1 = [home_button1, history_button1, team_button1, values_button1, services_button1, location_button1];

let home_button21 = document.getElementsByClassName('HOME2')[1]
let history_button21 = document.getElementsByClassName('OUR-HISTORY2')[1]
let team_button21 = document.getElementsByClassName('TEAM2')[1]
let values_button21 = document.getElementsByClassName('VALUES2')[1]
let services_button21 = document.getElementsByClassName('SERVICES2')[1]
let location_button21 = document.getElementsByClassName('CONTACTS2')[1]

let footer_nav1 = [home_button21, history_button21, team_button21, values_button21, services_button21, location_button21];


let home_section1 = document.getElementsByClassName('home-section')[1];
home_button1.addEventListener('click',() => {
    top_nav1.map(el => {
        if (el.classList.toString().includes('selected-nav-item')) {
        el.classList.remove('selected-nav-item')
        }
    })
    if (!home_button1.classList.toString().includes('selected-nav-item')) {
        home_button1.classList.add('selected-nav-item')
        }
        if (burgerOpen1 === true){
            document.getElementsByClassName('nav-items')[1].style.display = 'none'
    burger1.style.background = 'url(./burger.svg) no-repeat'

        }
home_section1.scrollIntoView({ 
  behavior: 'smooth' 
});
})


let history_section1 = document.getElementsByClassName('history-section')[1];
history_button1.addEventListener('click',() => {
    top_nav1.map(el => {
        if (el.classList.toString().includes('selected-nav-item')) {
        el.classList.remove('selected-nav-item')
        }
    })
    if (!history_button1.classList.toString().includes('selected-nav-item')) {
        history_button1.classList.add('selected-nav-item')
        }
        if (burgerOpen1 === true){
            document.getElementsByClassName('nav-items')[1].style.display = 'none'
    burger1.style.background = 'url(./burger.svg) no-repeat'

        }
history_section1.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let team_section1 = document.getElementsByClassName('team-section')[1];
team_button1.addEventListener('click',() => {
    top_nav1.map(el => {
        if (el.classList.toString().includes('selected-nav-item')) {
        el.classList.remove('selected-nav-item')
        }
    })
    if (!team_button1.classList.toString().includes('selected-nav-item')) {
        team_button1.classList.add('selected-nav-item')
        }
        if (burgerOpen1 === true){
            document.getElementsByClassName('nav-items')[1].style.display = 'none'
    burger1.style.background = 'url(./burger.svg) no-repeat'

        }
team_section1.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let values_section1 = document.getElementsByClassName('values-section')[1];
let values_section21 = document.getElementsByClassName('values-section2')[1];

values_button1.addEventListener('click',() => {
    top_nav1.map(el => {
        if (el.classList.toString().includes('selected-nav-item')) {
        el.classList.remove('selected-nav-item')
        }
    })
    if (!values_button1.classList.toString().includes('selected-nav-item')) {
        values_button1.classList.add('selected-nav-item')
        }
        if (burgerOpen1 === true){
            document.getElementsByClassName('nav-items')[1].style.display = 'none'
    burger1.style.background = 'url(./burger.svg) no-repeat'

        }
values_section1.scrollIntoView({ 
  behavior: 'smooth' 
});
values_section21.scrollIntoView({ 
    behavior: 'smooth' 
  });
})

let services_section1 = document.getElementsByClassName('services-section')[1];
services_button1.addEventListener('click',() => {
    top_nav1.map(el => {
        if (el.classList.toString().includes('selected-nav-item')) {
        el.classList.remove('selected-nav-item')
        }
    })
    if (!services_button1.classList.toString().includes('selected-nav-item')) {
        services_button1.classList.add('selected-nav-item')
        }
        if (burgerOpen1 === true){
            document.getElementsByClassName('nav-items')[1].style.display = 'none'
    burger1.style.background = 'url(./burger.svg) no-repeat'

        }
    services_section1.scrollIntoView({ 
        behavior: 'smooth' 
    });
})

let location_section1 = document.getElementsByClassName('location-section-new')[1];
location_button1.addEventListener('click',() => {
    top_nav1.map(el => {
        if (el.classList.toString().includes('selected-nav-item')) {
        el.classList.remove('selected-nav-item')
        }
    })
    if (!location_button1.classList.toString().includes('selected-nav-item')) {
        location_button1.classList.add('selected-nav-item')
        }
        if (burgerOpen1 === true){
            document.getElementsByClassName('nav-items')[1].style.display = 'none'
    burger1.style.background = 'url(./burger.svg) no-repeat'

        }
    location_section1.scrollIntoView({ 
        behavior: 'smooth' 
    });
})




home_button21.addEventListener('click',() => {
    footer_nav1.map(el => {
        if (el.classList.toString().includes('selected-footer-nav-item')) {
        el.classList.remove('selected-footer-nav-item')
        }
    })
    if (!home_button21.classList.toString().includes('selected-footer-nav-item')) {
        home_button21.classList.add('selected-footer-nav-item')
        }
        
home_section1.scrollIntoView({ 
  behavior: 'smooth' 
});
})


history_button21.addEventListener('click',() => {
    footer_nav1.map(el => {
        if (el.classList.toString().includes('selected-footer-nav-item')) {
        el.classList.remove('selected-footer-nav-item')
        }
    })
    if (!history_button21.classList.toString().includes('selected-footer-nav-item')) {
        history_button21.classList.add('selected-footer-nav-item')
        }
history_section1.scrollIntoView({ 
  behavior: 'smooth' 
});
})

team_button21.addEventListener('click',() => {
    footer_nav1.map(el => {
        if (el.classList.toString().includes('selected-footer-nav-item')) {
        el.classList.remove('selected-footer-nav-item')
        }
    })
    if (!team_button21.classList.toString().includes('selected-footer-nav-item')) {
        team_button21.classList.add('selected-footer-nav-item')
        }
team_section1.scrollIntoView({ 
  behavior: 'smooth' 
});
})

values_button21.addEventListener('click',() => {
    footer_nav1.map(el => {
        if (el.classList.toString().includes('selected-footer-nav-item')) {
        el.classList.remove('selected-footer-nav-item')
        }
    })
    if (!values_button21.classList.toString().includes('selected-footer-nav-item')) {
        values_button21.classList.add('selected-footer-nav-item')
        }
values_section1.scrollIntoView({ 
  behavior: 'smooth' 
});
values_section21.scrollIntoView({ 
    behavior: 'smooth' 
  });
})

services_button21.addEventListener('click',() => {
    footer_nav1.map(el => {
        if (el.classList.toString().includes('selected-footer-nav-item')) {
        el.classList.remove('selected-footer-nav-item')
        }
    })
    if (!services_button21.classList.toString().includes('selected-footer-nav-item')) {
        services_button21.classList.add('selected-footer-nav-item')
        }
    services_section1.scrollIntoView({ 
        behavior: 'smooth' 
    });
})

location_button21.addEventListener('click',() => {
    footer_nav1.map(el => {
        if (el.classList.toString().includes('selected-footer-nav-item')) {
        el.classList.remove('selected-footer-nav-item')
        }
    })
    if (!location_button21.classList.toString().includes('selected-footer-nav-item')) {
        location_button21.classList.add('selected-footer-nav-item')
        }
    location_section1.scrollIntoView({ 
        behavior: 'smooth' 
    });
})

let contact_home_button1 = document.getElementsByClassName('button')[1];
contact_home_button1.addEventListener('click',() => {
    top_nav1.map(el => {
        if (el.classList.toString().includes('selected-nav-item')) {
        el.classList.remove('selected-nav-item')
        }
    })
    if (!location_button1.classList.toString().includes('selected-nav-item')) {
        location_button1.classList.add('selected-nav-item')
        }
    location_section1.scrollIntoView({ 
        behavior: 'smooth' 
    });
})


const bg_services = {
    property: `Нашата сила е в подготовката и надлежната правна проверка на финансовото и правно състояние на различни  дружествата, както на техните краткосрочни и дългосрочни активи, включая но не само движими вещи и недвижими имоти  (проучване на собствеността и липсата и/или наличието на вещни и облигационни тежести), проверка и идентифициране на потенциални проблеми свързани с регулация и кадастрално отразяване , залози и ипотеки.
	<br/>Устни и писмени консултации, при необходимост на клиентите ни , при продажби, придобивания, апорти в капитала на дружества, дарения и замени  , учредяване и заличаване на законови и договорни  ипотеки, включително изготвяне на предварителни договори и нотариални актове.
    <br/>Нашият  опит е натрупан чрез работа ни с много наши клиенти , които са строителни и предприемачески дружества , както и чисто  инвестиционни дружества. Едно от най-големите предимства на старшите партньори в Адвокатско дружество "Йотов и Ко" е, че повече от 7 години те бяха главни правни  правни консултанти на Агенцията по геодезия, картография и кадастър в Република България.`,
    
    commercial: `Нашата кантора има множество договори за корпоративно правно обслужване на много търговски дружества ,като нашето участие започва още в  подготовката за анализа на правната структура при създаването им , включително правните отношения между съдружниците/акционерите, системата и начинът на функциониране на управлението на дружеството, клоновата структура, участието в съвместни предприятия, холдингови компании и консорциуми/ като впоследствие се развива в  правни консултации и подпомагане на техните бизнес дела : сливания, консолидация и разделяне на търговски дружества. Имаме практика в създаването и анализа на вече съществуващи холдингови структури и инвестиционни фондове. 
	<br/>Тъй като ние сме корпоративни адвокати на български и чуждестранни компании, обхватът на правната помощ , която предоставяме, включва почасово предоставяне на консултации на ръководствата  им, взаимни срещи с техните одитори и присъствие, ако е необходимо, на общите събрания на акционерите или срещи на  Управителните  съвети.
	<br/>Тъй като ние сме корпоративни адвокати на български и чуждестранни компании, обхватът на правната помощ , която предоставяме, включва почасово предоставяне на консултации на ръководствата  им, взаимни срещи с техните одитори и присъствие, ако е необходимо, на общите събрания на акционерите или срещи на  Управителните  съвети.
	<br/>През годините Адвокатската кантора е била нееднократно външен правен консултант  на няколко търговски банки , като от  нашите адвокати се е изисквало освен правен анализ на  техните длъжници, така и  ежедневни правни съвети по различни казуси свързани с дейността на банките в България , сравнителен правен анализ между българското и съответното законодателство на банките или длъжниците им, присъствие на заседания на ръководството и бордовете им , както и устни или писмени консултации по въпроси, които се появяват по време на оперативната работа.`,
    
    civil: `По-голямата част от професионалните услуги на Адвокатско дружество „Йотов и Ко” са за частният сектор, някои от които са със  договори за корпоративно правно обслужване с дългосрочен характер. Ние предоставяме правни анализи, правни съвети и помощ относно граждански, търговски и административни съдебни спорове, включително правни спорове, свързани с  търговски транзакции, искове, възникнали въз основа на граждански договори, искове за реституция, трудови спорове, принудително изпълнение, извънсъдебно изпълнение, правни анализи и оценка на шансовете и възможностите, които търговските дружества имат в рамките на граждански и търговски съдебни спорове. Имаме сериозна практика в изпълнителни производства и дела по несъстоятелност, включително анализ на правния статус на длъжниците, структуриране на правните аспекти и водене на изпълнителни производства и дела по несъстоятелност.
	<br/>Поради сложната икономическа ситуация през последните няколко години и високите нива на задлъжнялост на някои Дружества, имаше драстично увеличение на броя на дела за несъстоятелност и изпълнителни дела . Считаме, че една от силните страни на Адвокатската кантора е, че когато става въпрос за големи и невъзвръщаеми дългове, по искане на нашите клиенти, ние сме започвали дългосрочни преговори с техните длъжници, с което сме предотвратили много дела, а дълговете на клиентите ни са били надлежно събрани и клиентите ни удоволетворени .`,
   
    tax: `Нашата кантора предоставя множество правни прегеледи и анализи на българското, европейското и  международното данъчно законодателство , съобразно изискванията на нашите клиенти. Често предоставяме правни консултации (устни и писмени) и оказваме помощ относно тълкуването и правилното прилагане на данъчното законодателство в България. Нашите адвокати се явяват като процесуални представители на клиентите ни по дела за обжалване на ревизионни  актове, свързани с данък печалба ,  данък върху доходите на физическите лица,  ДДС, МДТ и данъци при източника.`,
    
    financial: `Ние предоставяме правно-финансови съвети и услуги на инвеститори, кредитори, кредитополучатели,  застрахователи, спонсори и фирми за рисков капитал, но единствено и само в областта на правото, без да предлагаме или промотираме никакви финаносови  услуги, пакети и т.н.  Наши клиенти са международни банки, застрахователно-брокерски компании и други.
    <br/>Ние предоставяме правни консултации на банки и банкови клиенти в следните области:
    <br/>- преглед и анализ на съществуващото законодателство, свързано със собствеността, особените залози,  ипотеките , етажната  собственост и договорите за лизинг;
    <br/>- правен анализ на договори за кредит и  възможностите за тяхното обезпечение /залози и ипотеки/ ;
    <br/>- провеждане на процедури за възбрана въз основа на ипотека и съответния анализ и отчитане;
    <br/>- преглед и сравнителен анализ на ипотечните и лизингови клаузи в съответното законодателство на страните-членки на ЕС и България с оглед на трансграничните сделки и финансиране, свързани с придобиване на недвижими имоти и други инвестиционни активи.`,
   
    intellectual: `Нашият опит и правна помощ  помагат на нашите клиенти да използват своите търговски марки, дизайни и патенти в пълна степен. В годините сме  консултирали  високо реномирани клиенти по въпросите отнасящи се до разпространението на филми, мултимедия и излъчването им.
    <br/>Нашето процесуално представителство включва и представителство  пред Българското патентно ведомство, Комисията по защита на конкуренцията и пред всички други компетентни държавни органи.`,
    
    penal: `Нашата адвокатска кантора предоставя услуги в областта на наказателното и административно-наказателното право, а именно:
    <br/>- правна защита и процесуално представителство на физически и юридически лица пред компетентните органи - Министерство на вътрешните работи, прокуратура, съд, различни министрества и ведомства;
    <br/>- правна помощ , изразяваще се в досъдебни производства и съдебни дела, образувани срещу лица, обвинени в престъпления от общ характер, включително производства, започнати срещу управители на дружества, обявени в несъстоятелност;
    <br/>- обжалване на актовете и постановления на администратевни органи  , прокуратура и съд  пред компетентиния бълаграски съд.`,
}

let service_container1 = document.getElementsByClassName('services-text-text')[1]
let service_pic1 = document.getElementsByClassName('services-text')[1]

let service_container_title1 = document.getElementsByClassName('services-text-title')[1]

let property_button1 = document.getElementsByClassName('property')[1]
let commercial_button1 = document.getElementsByClassName('commercial')[1]
let civil_button1 = document.getElementsByClassName('civil')[1]
let tax_button1 = document.getElementsByClassName('tax')[1]
let financial_button1 = document.getElementsByClassName('financial')[1]
let intellectual_button1 = document.getElementsByClassName('intellectual')[1]
let penal_button1 = document.getElementsByClassName('penal')[1]

let services_nav1 = [property_button1, commercial_button1, civil_button1, tax_button1, financial_button1, intellectual_button1, penal_button1]

property_button1.addEventListener('click',() => {
    services_nav1.map(el => {
        if (el.classList.toString().includes('selected-service')) {
        el.classList.remove('selected-service')
        }
    })
    if (!property_button1.classList.toString().includes('selected-service')) {
        property_button1.classList.add('selected-service')
        }
   service_container1.innerHTML = bg_services.property
   service_container_title1.innerHTML = `ВЕЩНО ПРАВО  (НЕДВИЖИМИ ИМОТИ)`

   service_pic1.scrollIntoView({ 
    behavior: 'smooth' 
});
})

commercial_button1.addEventListener('click',() => {
    services_nav1.map(el => {
        if (el.classList.toString().includes('selected-service')) {
        el.classList.remove('selected-service')
        }
    })
    if (!commercial_button1.classList.toString().includes('selected-service')) {
        commercial_button1.classList.add('selected-service')
        }
   service_container1.innerHTML = bg_services.commercial
   service_container_title1.innerHTML = `ТЪРГОВСКО И КОРПОРАТИВНО ПРАВО`

   service_pic1.scrollIntoView({ 
    behavior: 'smooth' 
});
})

civil_button1.addEventListener('click',() => {
    services_nav1.map(el => {
        if (el.classList.toString().includes('selected-service')) {
        el.classList.remove('selected-service')
        }
    })
    if (!civil_button1.classList.toString().includes('selected-service')) {
        civil_button1.classList.add('selected-service')
        }
   service_container1.innerHTML = bg_services.civil
   service_container_title1.innerHTML = `ГРАЖДАНСКО, ТЪРГОВСКО И АДМИНИСТРАТИВНО  ПРОЦЕСУАЛНО ПРЕДСТАВИТЕЛСТВО`

   service_pic1.scrollIntoView({ 
    behavior: 'smooth' 
});
})

tax_button1.addEventListener('click',() => {
    services_nav1.map(el => {
        if (el.classList.toString().includes('selected-service')) {
        el.classList.remove('selected-service')
        }
    })
    if (!tax_button1.classList.toString().includes('selected-service')) {
        tax_button1.classList.add('selected-service')
        }
   service_container1.innerHTML = bg_services.tax
   service_container_title1.innerHTML = `ДАНЪЧНО ПРАВО`

   service_pic1.scrollIntoView({ 
    behavior: 'smooth' 
});
})

financial_button1.addEventListener('click',() => {
    services_nav1.map(el => {
        if (el.classList.toString().includes('selected-service')) {
        el.classList.remove('selected-service')
        }
    })
    if (!financial_button1.classList.toString().includes('selected-service')) {
        financial_button1.classList.add('selected-service')
        }
   service_container1.innerHTML = bg_services.financial
   service_container_title1.innerHTML = `ФИНАНСОВИ СЪВЕТИ`

   service_pic1.scrollIntoView({ 
    behavior: 'smooth' 
});
})

intellectual_button1.addEventListener('click',() => {
    services_nav1.map(el => {
        if (el.classList.toString().includes('selected-service')) {
        el.classList.remove('selected-service')
        }
    })
    if (!intellectual_button1.classList.toString().includes('selected-service')) {
        intellectual_button1.classList.add('selected-service')
        }
   service_container1.innerHTML = bg_services.intellectual
   service_container_title1.innerHTML = `ИНТЕЛЕКТУАЛНА СОБСТВЕНОСТ`

   service_pic1.scrollIntoView({ 
    behavior: 'smooth' 
});
})

penal_button1.addEventListener('click',() => {
    services_nav1.map(el => {
        if (el.classList.toString().includes('selected-service')) {
        el.classList.remove('selected-service')
        }
    })
    if (!penal_button1.classList.toString().includes('selected-service')) {
        penal_button1.classList.add('selected-service')
        }
   service_container1.innerHTML = bg_services.penal
   service_container_title1.innerHTML = `НАКАЗАТЕЛНО ПРАВО`

   service_pic1.scrollIntoView({ 
    behavior: 'smooth' 
});
})

let fb1 = document.getElementsByClassName('facebook')[1].addEventListener('click', () => {
    window.location = `https://www.facebook.com/vania.iotova`
})

let linked1 = document.getElementsByClassName('linked')[1].addEventListener('click', () => {
    window.location = `https://www.linkedin.com/`
})

