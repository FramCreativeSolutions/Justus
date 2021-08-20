setTimeout(() => {
    let overlay = document.getElementsByClassName('overlay')[0]
    overlay.style.opacity = '0'
    
},1500)

setTimeout(() => {
    let overlay = document.getElementsByClassName('overlay')[0]
    overlay.style.display = 'none'
    
},2500)

let BG = document.getElementsByClassName('bg-button')[0];
let EN = document.getElementsByClassName('en-button')[0];
let BG11 = document.getElementsByClassName('bg-button')[1];
let EN11 = document.getElementsByClassName('en-button')[1];
let language = 'en'

BG.addEventListener('click', () => {
    language = 'bg'
    BG.style.fontWeight = '800'
    BG11.style.fontWeight = '800'
    EN.style.fontWeight = '400'
    EN11.style.fontWeight = '400'
    document.getElementsByClassName('english')[0].style.display = 'none'
    document.getElementsByClassName('bulgarian')[0].style.display = 'block'
})
EN.addEventListener('click', () => {
    language = 'en'
    EN.style.fontWeight = '800'
    EN11.style.fontWeight = '800'
    BG.style.fontWeight = '400'
    BG11.style.fontWeight = '400'
    document.getElementsByClassName('english')[0].style.display = 'block'
    document.getElementsByClassName('bulgarian')[0].style.display = 'none'
})

if (language === 'en') {
    EN.style.fontWeight = '800'
    EN11.style.fontWeight = '800'
    BG.style.fontWeight = '400'
    BG11.style.fontWeight = '400'
    document.getElementsByClassName('english')[0].style.display = 'block'
    document.getElementsByClassName('bulgarian')[0].style.display = 'none'
} else {
    BG.style.fontWeight = '800'
    BG11.style.fontWeight = '800'
    EN.style.fontWeight = '400'
    EN11.style.fontWeight = '400'
    document.getElementsByClassName('english')[0].style.display = 'none'
    document.getElementsByClassName('bulgarian')[0].style.display = 'block'
}


let burgerOpen = false
let burger = document.getElementsByClassName('burger')[0];
burger.addEventListener('click', () => {
    burger.style.transform = 'translateY(20%)'
    
if (burgerOpen === false){
    document.getElementsByClassName('nav-items')[0].style.display = 'flex'
    burger.style.background = 'url(./cross.svg) no-repeat'
    burgerOpen = !burgerOpen
} else {
    document.getElementsByClassName('nav-items')[0].style.display = 'none'
    burger.style.background = 'url(./burger.svg) no-repeat'
    burgerOpen = !burgerOpen
} 
})


let home_button = document.getElementsByClassName('HOME')[0]
let history_button = document.getElementsByClassName('OUR-HISTORY')[0]
let team_button = document.getElementsByClassName('TEAM')[0]
let values_button = document.getElementsByClassName('VALUES')[0]
let services_button = document.getElementsByClassName('SERVICES')[0]
let location_button = document.getElementsByClassName('CONTACTS')[0]

let top_nav = [home_button, history_button, team_button, values_button, services_button, location_button];

let home_button2 = document.getElementsByClassName('HOME2')[0]
let history_button2 = document.getElementsByClassName('OUR-HISTORY2')[0]
let team_button2 = document.getElementsByClassName('TEAM2')[0]
let values_button2 = document.getElementsByClassName('VALUES2')[0]
let services_button2 = document.getElementsByClassName('SERVICES2')[0]
let location_button2 = document.getElementsByClassName('CONTACTS2')[0]

let footer_nav = [home_button2, history_button2, team_button2, values_button2, services_button2, location_button2];


let home_section = document.getElementsByClassName('home-section')[0];
home_button.addEventListener('click',() => {
    top_nav.map(el => {
        if (el.classList.toString().includes('selected-nav-item')) {
        el.classList.remove('selected-nav-item')
        }
    })
    if (!home_button.classList.toString().includes('selected-nav-item')) {
        home_button.classList.add('selected-nav-item')
        }
        if (burgerOpen === true){
            document.getElementsByClassName('nav-items')[0].style.display = 'none'
    burger.style.background = 'url(./burger.svg) no-repeat'

        }
// document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
home_section.scrollIntoView({ 
  behavior: 'smooth' 
});
})


let history_section = document.getElementsByClassName('history-section')[0];
history_button.addEventListener('click',() => {
    top_nav.map(el => {
        if (el.classList.toString().includes('selected-nav-item')) {
        el.classList.remove('selected-nav-item')
        }
    })
    if (!history_button.classList.toString().includes('selected-nav-item')) {
        history_button.classList.add('selected-nav-item')
        }
        if (burgerOpen === true){
            document.getElementsByClassName('nav-items')[0].style.display = 'none'
    burger.style.background = 'url(./burger.svg) no-repeat'

        }
// document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
history_section.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let team_section = document.getElementsByClassName('team-section')[0];
team_button.addEventListener('click',() => {
    top_nav.map(el => {
        if (el.classList.toString().includes('selected-nav-item')) {
        el.classList.remove('selected-nav-item')
        }
    })
    if (!team_button.classList.toString().includes('selected-nav-item')) {
        team_button.classList.add('selected-nav-item')
        }
        if (burgerOpen === true){
            document.getElementsByClassName('nav-items')[0].style.display = 'none'
    burger.style.background = 'url(./burger.svg) no-repeat'

        }
// document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
team_section.scrollIntoView({ 
  behavior: 'smooth' 
});
})

let values_section = document.getElementsByClassName('values-section')[0];
let values_section2 = document.getElementsByClassName('values-section2')[0];

values_button.addEventListener('click',() => {
    top_nav.map(el => {
        if (el.classList.toString().includes('selected-nav-item')) {
        el.classList.remove('selected-nav-item')
        }
    })
    if (!values_button.classList.toString().includes('selected-nav-item')) {
        values_button.classList.add('selected-nav-item')
        }
        if (burgerOpen === true){
            document.getElementsByClassName('nav-items')[0].style.display = 'none'
    burger.style.background = 'url(./burger.svg) no-repeat'

        }
values_section.scrollIntoView({ 
  behavior: 'smooth' 
});
values_section2.scrollIntoView({ 
    behavior: 'smooth' 
  });
})

let services_section = document.getElementsByClassName('services-section')[0];
services_button.addEventListener('click',() => {
    top_nav.map(el => {
        if (el.classList.toString().includes('selected-nav-item')) {
        el.classList.remove('selected-nav-item')
        }
    })
    if (!services_button.classList.toString().includes('selected-nav-item')) {
        services_button.classList.add('selected-nav-item')
        }
        if (burgerOpen === true){
            document.getElementsByClassName('nav-items')[0].style.display = 'none'
    burger.style.background = 'url(./burger.svg) no-repeat'

        }
    // document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
    services_section.scrollIntoView({ 
        behavior: 'smooth' 
    });
})

let location_section = document.getElementsByClassName('location-section-new')[0];
location_button.addEventListener('click',() => {
    top_nav.map(el => {
        if (el.classList.toString().includes('selected-nav-item')) {
        el.classList.remove('selected-nav-item')
        }
    })
    if (!location_button.classList.toString().includes('selected-nav-item')) {
        location_button.classList.add('selected-nav-item')
        }
        if (burgerOpen === true){
            document.getElementsByClassName('nav-items')[0].style.display = 'none'
    burger.style.background = 'url(./burger.svg) no-repeat'

        }
    // document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
    location_section.scrollIntoView({ 
        behavior: 'smooth' 
    });
})




home_button2.addEventListener('click',() => {
    footer_nav.map(el => {
        if (el.classList.toString().includes('selected-footer-nav-item')) {
        el.classList.remove('selected-footer-nav-item')
        }
    })
    if (!home_button2.classList.toString().includes('selected-footer-nav-item')) {
        home_button2.classList.add('selected-footer-nav-item')
        }
        
// document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
home_section.scrollIntoView({ 
  behavior: 'smooth' 
});
})


history_button2.addEventListener('click',() => {
    footer_nav.map(el => {
        if (el.classList.toString().includes('selected-footer-nav-item')) {
        el.classList.remove('selected-footer-nav-item')
        }
    })
    if (!history_button2.classList.toString().includes('selected-footer-nav-item')) {
        history_button2.classList.add('selected-footer-nav-item')
        }
// document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
history_section.scrollIntoView({ 
  behavior: 'smooth' 
});
})

team_button2.addEventListener('click',() => {
    footer_nav.map(el => {
        if (el.classList.toString().includes('selected-footer-nav-item')) {
        el.classList.remove('selected-footer-nav-item')
        }
    })
    if (!team_button2.classList.toString().includes('selected-footer-nav-item')) {
        team_button2.classList.add('selected-footer-nav-item')
        }
// document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
team_section.scrollIntoView({ 
  behavior: 'smooth' 
});
})

values_button2.addEventListener('click',() => {
    footer_nav.map(el => {
        if (el.classList.toString().includes('selected-footer-nav-item')) {
        el.classList.remove('selected-footer-nav-item')
        }
    })
    if (!values_button2.classList.toString().includes('selected-footer-nav-item')) {
        values_button2.classList.add('selected-footer-nav-item')
        }
values_section.scrollIntoView({ 
  behavior: 'smooth' 
});
values_section2.scrollIntoView({ 
    behavior: 'smooth' 
  });
})

services_button2.addEventListener('click',() => {
    footer_nav.map(el => {
        if (el.classList.toString().includes('selected-footer-nav-item')) {
        el.classList.remove('selected-footer-nav-item')
        }
    })
    if (!services_button2.classList.toString().includes('selected-footer-nav-item')) {
        services_button2.classList.add('selected-footer-nav-item')
        }
    // document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
    services_section.scrollIntoView({ 
        behavior: 'smooth' 
    });
})

location_button2.addEventListener('click',() => {
    footer_nav.map(el => {
        if (el.classList.toString().includes('selected-footer-nav-item')) {
        el.classList.remove('selected-footer-nav-item')
        }
    })
    if (!location_button2.classList.toString().includes('selected-footer-nav-item')) {
        location_button2.classList.add('selected-footer-nav-item')
        }
    // document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
    location_section.scrollIntoView({ 
        behavior: 'smooth' 
    });
})

let contact_home_button = document.getElementsByClassName('button')[0];
contact_home_button.addEventListener('click',() => {
    top_nav.map(el => {
        if (el.classList.toString().includes('selected-nav-item')) {
        el.classList.remove('selected-nav-item')
        }
    })
    if (!location_button.classList.toString().includes('selected-nav-item')) {
        location_button.classList.add('selected-nav-item')
        }
    // document.getElementsByClassName("container-menu-items2")[0].style.display = 'none'
    location_section.scrollIntoView({ 
        behavior: 'smooth' 
    });
})


const en_services = {
    property: `Our strength is in preparation of legal due diligence on the financial and legal status of companies, movable and immovable assets (ownership status and encumbrances), effect based on the property registration and cadastre, register of special pledges, commercial register, and register of state and immovable properties; review of deeds of state and municipal ownership. Verbal and written consultation in cases of sales, acquisitions, rapports in the capital of companies, divisions, mortgages, including the preparation of preliminary contracts and notary deeds.
	<br/> This experience has been acquired with many construction and developer companies as well as investment companies are our clients. One of the biggest advantages of the Senior partners in Law Office "Iotov and Co" is that for more than 7 years they are the general legal advisors to the Geodesy, Cartography, and Cadaster Agency.`,
    commercial: `We are involved in the preparation of analysis on the legal structure of commercial companies, including legal relations between the shareholders, system, and functioning of the company’s management, branch structure, participation in joint-ventures, holding companies and consortiums, legal advice, and assistance to mergers, consolidation, and division of commercial companies, as well as establishment and analysis of holding structures and investment funds, rights of stocks and shares. 
	<br/>Because we are corporate lawyers of several Bulgarian and, foreign companies, the range of support which we provide includes day-to-day service to their management, mutual meetings with their auditors, and presence, if necessary, at their general shareholder's meetings or Board meetings.
	<br/>Our lawyers are constantly engaged with the preparation of drafts of trade contracts, lease agreements, cession agreements, and memorandums of understandings. They also provide support to the Management bodies of our corporate clients by participating directly in the negotiations with third parties.
	<br/>During the years the Law Office has been the legal advisor of several Trade Banks and our lawyers have provided the Management and Supervisory bodies of those Banks with analyses of the legal status of their Debtors, as well as with day-to-day legal services as per their inquiries, attendance at management and board meetings and advising in verbal or in written form on issues, which appear on an operational legal basis.`,
    civil: `The vast majority of “Iotov and Co” professional services are for the private sector, several of which are long-term contracts of a significant nature. We provide legal analyses, legal advice, and assistance concerning civil and commercial litigation, including legal disputes related to pure commercial transactions, claims arising based on civil contracts, restitution claims, employment-related disputes, compulsory execution, extra-judicial execution, legal analyses, and assessment of chances and the opportunities that commercial companies have within civil and commercial litigation. We have serious practice in enforcement proceedings and insolvency cases, including analysis on the legal status of the debtors, structuring of the legal aspects, and leading of enforcement proceedings and insolvency cases.
	<br/>Due to the complex economic situation during the last several years and the high levels of Company indebtedness, there was a drastic increase in the amount of Commanding and Executive cases (if before there were tens of new cases annually, at the moment we are talking about hundreds). Nevertheless, taking in mind the liquid capacity of the debtors, generally speaking, the claims of our clients have been duly collected.
	<br/>We consider as one of the strong sides of the Law Office that when it comes to big and irrecoverable debts, and upon the request of our clients, we have entered into long-term negotiations with their debtors, from which have evolved preliminary termination of many cases and many collected debts. Of course, such results could be accomplished through the active participation of our Clients’ Management bodies. `,
    tax: `Legal analysis, legal advice (verbal and in written), and assistance concerning tax legislation in Bulgaria. Claims arising based on acts related to tax profit, income tax, and VAT. Legal advice on financial and accounting issues, avoidance of double taxation.`,
    financial: `We provide legal and financial advice and services to investors, lenders, borrowers, issuers, underwriters, sponsors, and venture capital firms. Our clients include International Banks, Insurance broker companies, and others.
    <br/>We provide legal advice to banks and banking clients in the following areas:
    <br/>- review and analysis of the existing legislation related to mortgage, condominium, and leasing;
    <br/>- analysis of credits being utilized to mortgage or credits based on immovable properties;
    <br/>- carrying out foreclosure procedures, based on mortgage and respective analysis and reporting;
    <br/>- review and comparative analysis of mortgage, condominium, and leasing clauses in the EU-member countries and Bulgaria with a view of cross-border transaction and financing related to real estates and relevant;`,
    intellectual: `Our experience and support are helping our clients exploit their trademarks, designs, and patents to the fullest. We have also advised several highly reputable clients on film distribution, multimedia, and broadcasting issues.
    <br/>We represent clients before the Bulgarian Patent Office, the Commission on Protection of Competition, and before all other competent State authorities.`,
    penal: `Our Law Office also provides services in the field of the Penal Law, and namely:
    <br/>-	legal protection and representation of natural persons and legal entities expressed in litigation before the competent bodies – Ministry of the Internal Affairs, the Prosecutor’s office, the Court;
    <br/>-	legal support, expressed in litigation in pre-trial proceedings and court cases, initiated against people accused of offenses, including proceedings initiated against Managers of Companies, declared in bankruptcy;
    <br/>-	appealing of the acts and decrees of the court and the prosecutor’s office before higher authorities.`,
}

let service_container = document.getElementsByClassName('services-text-text')[0]
let service_pic = document.getElementsByClassName('services-pic')[0]

let service_container_title = document.getElementsByClassName('services-text-title')[0]

let property_button = document.getElementsByClassName('property')[0]
let commercial_button = document.getElementsByClassName('commercial')[0]
let civil_button = document.getElementsByClassName('civil')[0]
let tax_button = document.getElementsByClassName('tax')[0]
let financial_button = document.getElementsByClassName('financial')[0]
let intellectual_button = document.getElementsByClassName('intellectual')[0]
let penal_button = document.getElementsByClassName('penal')[0]

let services_nav = [property_button, commercial_button, civil_button, tax_button, financial_button, intellectual_button, penal_button]

property_button.addEventListener('click',() => {
    services_nav.map(el => {
        if (el.classList.toString().includes('selected-service')) {
        el.classList.remove('selected-service')
        }
    })
    if (!property_button.classList.toString().includes('selected-service')) {
        property_button.classList.add('selected-service')
        }
   service_container.innerHTML = en_services.property
   service_container_title.innerHTML = `(PROPERTY) REAL ESTATE LAW`

   service_pic.scrollIntoView({ 
    behavior: 'smooth' 
});
})

commercial_button.addEventListener('click',() => {
    services_nav.map(el => {
        if (el.classList.toString().includes('selected-service')) {
        el.classList.remove('selected-service')
        }
    })
    if (!commercial_button.classList.toString().includes('selected-service')) {
        commercial_button.classList.add('selected-service')
        }
   service_container.innerHTML = en_services.commercial
   service_container_title.innerHTML = `COMMERCIAL AND CORPORATIVE LAW`

   service_pic.scrollIntoView({ 
    behavior: 'smooth' 
});
})

civil_button.addEventListener('click',() => {
    services_nav.map(el => {
        if (el.classList.toString().includes('selected-service')) {
        el.classList.remove('selected-service')
        }
    })
    if (!civil_button.classList.toString().includes('selected-service')) {
        civil_button.classList.add('selected-service')
        }
   service_container.innerHTML = en_services.civil
   service_container_title.innerHTML = `CIVIL AND COMMERCIAL LITIGATION`

   service_pic.scrollIntoView({ 
    behavior: 'smooth' 
});
})

tax_button.addEventListener('click',() => {
    services_nav.map(el => {
        if (el.classList.toString().includes('selected-service')) {
        el.classList.remove('selected-service')
        }
    })
    if (!tax_button.classList.toString().includes('selected-service')) {
        tax_button.classList.add('selected-service')
        }
   service_container.innerHTML = en_services.tax
   service_container_title.innerHTML = `TAX LAW`

   service_pic.scrollIntoView({ 
    behavior: 'smooth' 
});
})

financial_button.addEventListener('click',() => {
    services_nav.map(el => {
        if (el.classList.toString().includes('selected-service')) {
        el.classList.remove('selected-service')
        }
    })
    if (!financial_button.classList.toString().includes('selected-service')) {
        financial_button.classList.add('selected-service')
        }
   service_container.innerHTML = en_services.financial
   service_container_title.innerHTML = `FINANCIAL ADVICES`

   service_pic.scrollIntoView({ 
    behavior: 'smooth' 
});
})

intellectual_button.addEventListener('click',() => {
    services_nav.map(el => {
        if (el.classList.toString().includes('selected-service')) {
        el.classList.remove('selected-service')
        }
    })
    if (!intellectual_button.classList.toString().includes('selected-service')) {
        intellectual_button.classList.add('selected-service')
        }
   service_container.innerHTML = en_services.intellectual
   service_container_title.innerHTML = `INTELLECTUAL PROPERTY`

   service_pic.scrollIntoView({ 
    behavior: 'smooth' 
});
})

penal_button.addEventListener('click',() => {
    services_nav.map(el => {
        if (el.classList.toString().includes('selected-service')) {
        el.classList.remove('selected-service')
        }
    })
    if (!penal_button.classList.toString().includes('selected-service')) {
        penal_button.classList.add('selected-service')
        }
   service_container.innerHTML = en_services.penal
   service_container_title.innerHTML = `PENAL LAW`

   service_pic.scrollIntoView({ 
    behavior: 'smooth' 
});
})

let fb = document.getElementsByClassName('facebook')[0].addEventListener('click', () => {
    window.location = `https://www.facebook.com/vania.iotova`
})

let linked = document.getElementsByClassName('linked')[0].addEventListener('click', () => {
    window.location = `https://www.linkedin.com/`
})

