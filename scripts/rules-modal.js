const rulesBtn = document.querySelector(".rules-btn");
const rulesModal = document.querySelector(".rules.modal");

rulesBtn.addEventListener("click", makeVisible.bind(this, rulesModal));

//

const currentCardRules = cardRules.map(rule => rule);
const currentCardRulesEl = document.querySelector(".rules");

for (let i = 0; i < currentCardRules.length; i++) {
    currentCardRules[i].number = cardValues[i]
}

currentCardRules.forEach( el => {
    let cardRuleNameEl = document.createElement("input");
    let cardRuleContentEl = document.createElement("input");

    cardRuleNameEl.classList.add("rule-name");
    cardRuleContentEl.classList.add("rule-content");
    cardRuleNameEl.value = el.ruleName;
    cardRuleContentEl.value = el.ruleContent;

    currentCardRulesEl.appendChild(cardRuleNameEl);
    currentCardRulesEl.appendChild(cardRuleContentEl);
})

let ruleNameInputs = document.querySelectorAll(".rule-name");

const changeRuleName = (ev) => {

    for (i = 0; i < ruleNameInputs.length; i++) {
        if (ev.target === ruleNameInputs[i]) {
            currentCardRules[i].ruleName = ev.target.value;
        }
    }

    for (j = 0; j < currentDeck.length; j++) {
        for (const currentCardRule of currentCardRules) {
            if (currentDeck[j].number === ev.target.number) {
                currentDeck[j].rule.ruleName = ev.target.value;
            }
        }
    }
}

ruleNameInputs.forEach(el => {
    el.addEventListener("change", changeRuleName);
})

let ruleContentInputs = document.querySelectorAll(".rule-content");

const changeRuleContent = (ev) => {

    for (i = 0; i < ruleContentInputs.length; i++) {
        if (ev.target === ruleContentInputs[i]) {
            currentCardRules[i].ruleContent = ev.target.value;
        }
    }

    for (j = 0; j < currentDeck.length; j++) {
        for (const currentCardRule of currentCardRules) {
            if (currentDeck[j].number === ev.target.number) {
                currentDeck[j].rule.ruleContent = ev.target.value;
            }
        }
    }
}

ruleContentInputs.forEach(el => {
    el.addEventListener("change", changeRuleContent);
})