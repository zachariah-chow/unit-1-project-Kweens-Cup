const rulesBtn = document.querySelector(".rules-btn");
const rulesModal = document.querySelector(".rules.modal");

rulesBtn.addEventListener("click", makeVisible.bind(this, rulesModal));

//

const currentCardRules = cardRules.map(rule => rule);
const currentCardRulesEl = document.querySelector(".rules-list");

for (let i = 0; i < currentCardRules.length; i++) {
    currentCardRules[i].number = cardValues[i]
}

currentCardRules.forEach( el => {
    let cardRuleNameEl = document.createElement("p");
    let cardRuleContentEl = document.createElement("p");
    let cardValueEl = document.createElement("p");

    cardRuleNameEl.classList.add("rule-name");
    cardRuleContentEl.classList.add("rule-content");
    cardValueEl.classList.add("rule-card-number");
    cardRuleNameEl.innerText = el.ruleName;
    cardRuleContentEl.innerText = el.ruleContent;
    cardValueEl.innerText = el.number;

    cardRuleNameEl.setAttribute("contenteditable", "true");
    cardRuleContentEl.setAttribute("contenteditable", "true");

    currentCardRulesEl.appendChild(cardValueEl);
    currentCardRulesEl.appendChild(cardRuleNameEl);
    currentCardRulesEl.appendChild(cardRuleContentEl);
})

let ruleNameInputs = document.querySelectorAll(".rule-name");

const changeRuleName = (ev) => {

    for (i = 0; i < ruleNameInputs.length; i++) {
        if (ev.target === ruleNameInputs[i]) {
            currentCardRules[i].ruleName = ev.target.innerText;
        }
    }

    for (j = 0; j < currentDeck.length; j++) {
        for (const currentCardRule of currentCardRules) {
            if (currentDeck[j].number === ev.target.number) {
                currentDeck[j].rule.ruleName = ev.target.innerText;
            }
        }
    }
}

ruleNameInputs.forEach(el => {
    el.addEventListener("input", changeRuleName);
})

let ruleContentInputs = document.querySelectorAll(".rule-content");

const changeRuleContent = (ev) => {

    for (i = 0; i < ruleContentInputs.length; i++) {
        if (ev.target === ruleContentInputs[i]) {
            currentCardRules[i].ruleContent = ev.target.innerText;
        }
    }

    for (j = 0; j < currentDeck.length; j++) {
        for (const currentCardRule of currentCardRules) {
            if (currentDeck[j].number === ev.target.number) {
                currentDeck[j].rule.ruleContent = ev.target.innerText;
            }
        }
    }
}

ruleContentInputs.forEach(el => {
    el.addEventListener("input", changeRuleContent);
})