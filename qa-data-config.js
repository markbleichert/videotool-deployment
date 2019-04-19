export default {
    containerId: 'mycontainer',
    root: '1',
    nodes: [{
        id: '1',
        type: 'question',
        template: 'tmpl-qa-links',
        question: 'Wat is de reden voor de aanvraag van een nieuwe bankpas ?',
        options: [{
            id: 'verloren',
            text: 'Ik ben mijn pas kwijt geraakt'
        }, {
            id: 'gestolen',
            text: 'Mijn pas is gestolen.'
        }, {
            id: 'kapot',
            text: 'Mijn pas werkt niet meer.'
        }, {
            id: 'anders',
            text: 'Ik wil een andere pas'
        }]
    }, {
        id: '2',
        type: 'question',
        template: 'tmpl-qa-links',
        question: 'Als je je pas kwijt bent kun je de volgende stappen ondernemen',
        options: [{
            id: 'blokkeren',
            text: 'Ik wil mijn pas tijdelijk blokkeren'
        }, {
            id: 'aanvragen',
            text: 'Ik wil meteen een nieuwe pas aanvragen'
        }]
    }, {
        id: '3',
        type: 'question',
        template: 'tmpl-qa-links',
        question: 'Als je pas gestolen is kun je het beste meteen kontakt met ons opnemen.',
        options: [{
            id: 'blokkeren',
            text: 'Ik wil meteen mijn pas blokkeren'
        }, {
            id: 'aanvragen',
            text: 'Ik wil een nieuwe pas aanvragen'
        }, {
            id: 'medewerker',
            text: 'Ik wil graag met een medewerker spreken'
        }]
    }, {
        id: '4',
        type: 'question',
        template: 'tmpl-qa-links',
        question: 'Als je pas kapot is kun je meteen een nieuwe pas bij ons aanvragen',
        options: [{
            id: 'aanvragen',
            text: 'Ik wil meteen een nieuwe pas aanvragen'
        }, {
            id: 'medewerker',
            text: 'Ik wil eerst een medewerker spreken'
        }]
    }, {
        id: '5',
        type: 'question',
        template: 'tmpl-qa-buttons',
        question: `Je kunt nu online meteen je nieuwe pas aanvragen of je beslissen dit op een later
                    moment te doen. Wil je nu een aanvraag starten?`,
        options: [{
            id: 'ja',
            text: 'ja'
        }, {
            id: 'nee',
            text: 'nee'
        }]
    }, {
        id: '6',
        type: 'question',
        template: 'tmpl-qa-images',
        question: 'Welke pas wil je aanvragen. Kies een van de onderstaande passen.',
        options: [{
            id: 'keycard',
            text: 'Online keycard',
            url: '/images/pas4.jpeg'
        }, {
            id: 'wereldpas',
            text: 'Wereldpas',
            url: '/images/pas5.jpeg'
        }, {
            id: 'anders',
            text: 'Andere bank',
            url: '/images/pas6.jpeg'
        }]
    }, {
        id: '7',
        type: 'question',
        template: 'tmpl-qa-links',
        question: 'Wil je extra kaart aanvragen of wil een nieuwe pas',
        options: [{
            id: 'aanvragen',
            text: 'Ik wil een extra kaart aanvragen'
        }, {
            id: 'nieuw',
            text: 'Ik mijn oude pas behouden en een nieuwe pas aanvragen'
        }]
    }, {
        id: '30',
        type: 'question',
        template: 'tmpl-qa-images',
        question: 'Welke pas wil je aanvragen. Kies een van de onderstaande passen.',
        options: [{
            id: 'rabocard',
            text: 'RaboCard',
            url: '/images/credit1.jpeg'
        }, {
            id: 'rabogold',
            text: 'RaboCard Gold',
            url: '/images/credit2.jpeg'
        }, {
            id: 'zakelijk',
            text: 'RaboCard zakelijk',
            url: '/images/credit3.jpeg'
        }]
    }, {
        id: '8',
        type: 'endpoint',
        template: 'tmpl-simple-redirect',
        content: {
            header: 'Blokkeren bankpas',
            body: `Je bankpas kun je blokkeren door in te loggen op mijn Rabobank.nl. Hier kun je 
                   zelf je pas blokkeren. Je pas wordt dan per direkt gedeactiveerd.<br/><br/>
                   Je kun ook kontakt opnemen met een van onze medewerkers. Volg de onderstaande link
                   als je kontakt wilt opnemen met een van onze mederwkers`,
            url: 'https://www.rabobank.nl/particulieren/contact/telefoonnummers/'
        }
    }, {
        id: '9',
        type: 'endpoint',
        template: 'tmpl-simple-redirect',
        content: {
            header: 'Contact opnemen',
            body: 'Volg de onderstaande link als je nu meteen kontakt wilt opnemen met een van onze medewerkers',
            url: 'https://www.rabobank.nl/particulieren/contact/stel-een-vraag/'
        }
    }, {
        id: '10',
        type: 'endpoint',
        template: 'tmpl-simple-content',
        content: {
            header: 'Gefeliciteerd met je nieuwe bankpas',
            body: 'De door jou gekozen bank pas word binnen 3 werkdagen naar u toegestuurd.',
            url: '/images/pas4.jpeg'
        }
    }, {
        id: '11',
        type: 'endpoint',
        template: 'tmpl-simple-content',
        content: {
            header: 'Gefeliciteerd met je nieuwe bankpas',
            body: 'De door jou gekozen bank pas word binnen 3 werkdagen naar u toegestuurd.',
            url: '/images/pas5.jpeg'
        }
    }, {
        id: '13',
        type: 'endpoint',
        template: 'tmpl-simple-content',
        content: {
            header: 'Wellicht is een ander bank een beter optie',
            body: `De pas die u graag wilt hebben kunnen wij niet aan u verstrekken. 
                    Wij denken dat een andere bank een betere keuze zou zijn. <br/><br/>
                    <em><strong>Tip:</strong> Mocht u toch een bankpas van de Rabobank willen zult u toch echt een
                    andere keuze moeten maken.</em>`,
            url: '/images/pas6.jpeg'
        }
    }, {
        id: '31',
        type: 'endpoint',
        template: 'tmpl-simple-content',
        content: {
            header: 'Gefeliciteerd met je nieuwe creditcard',
            body: `De creditcard die je hebt aangevraag wordt binnen 3 werkdagen per post naar je. 
                    Verstuurd. De pincode ontvang je in een apparte brief.`,
            url: '/images/credit.jpeg'
        }
    }],

    connectors: [{
        id: '8',
        type: 'connector',
        source: {
            id: '1',
            port: 'verloren'
        },
        target: {
            id: '2'
        }
    }, {
        id: '9',
        type: 'connector',
        source: {
            id: '1',
            port: 'gestolen'
        },
        target: {
            id: '3'
        }
    }, {
        id: '10',
        type: 'connector',
        source: {
            id: '1',
            port: 'kapot'
        },
        target: {
            id: '4'
        }
    }, {
        id: '30',
        type: 'connector',
        source: {
            id: '1',
            port: 'anders'
        },
        target: {
            id: '7'
        }
    }, {
        id: '11',
        type: 'connector',
        source: {
            id: '2',
            port: 'blokkeren'
        },
        target: {
            id: '8'
        }
    }, {
        id: '12',
        type: 'connector',
        source: {
            id: '2',
            port: 'aanvragen'
        },
        target: {
            id: '5'
        }
    }, {
        id: '13',
        type: 'connector',
        source: {
            id: '3',
            port: 'blokkeren'
        },
        target: {
            id: '8'
        }
    }, {
        id: '14',
        type: 'connector',
        source: {
            id: '3',
            port: 'aanvragen'
        },
        target: {
            id: '5'
        }
    }, {
        id: '15',
        type: 'connector',
        source: {
            id: '3',
            port: 'medewerker'
        },
        target: {
            id: '9'
        }
    }, {
        id: '16',
        type: 'connector',
        source: {
            id: '3',
            port: 'aanvragen'
        },
        target: {
            id: '5'
        }
    }, {
        id: '17',
        type: 'connector',
        source: {
            id: '4',
            port: 'medewerker'
        },
        target: {
            id: '9'
        }
    }, {
        id: '18',
        type: 'connector',
        source: {
            id: '5',
            port: 'ja'
        },
        target: {
            id: '6'
        }
    }, {
        id: '19',
        type: 'connector',
        source: {
            id: '5',
            port: 'nee'
        },
        target: {
            id: '9'
        }
    }, {
        id: '20',
        type: 'connector',
        source: {
            id: '6',
            port: 'keycard'
        },
        target: {
            id: '10'
        }
    }, {
        id: '21',
        type: 'connector',
        source: {
            id: '6',
            port: 'wereldpas'
        },
        target: {
            id: '11'
        }
    }, {
        id: '22',
        type: 'connector',
        source: {
            id: '6',
            port: 'anders'
        },
        target: {
            id: '13'
        }
    }, {
        id: '22',
        type: 'connector',
        source: {
            id: '7',
            port: 'aanvragen'
        },
        target: {
            id: '6'
        }
    }, {
        id: '22',
        type: 'connector',
        source: {
            id: '7',
            port: 'nieuw'
        },
        target: {
            id: '30'
        }
    }, {
        id: '23',
        type: 'connector',
        source: {
            id: '30',
            port: 'rabocard'
        },
        target: {
            id: '31'
        }
    }, {
        id: '24',
        type: 'connector',
        source: {
            id: '30',
            port: 'rabogold'
        },
        target: {
            id: '31'
        }
    }, {
        id: '25',
        type: 'connector',
        source: {
            id: '30',
            port: 'zakelijk'
        },
        target: {
            id: '31'
        }
    }]
};
