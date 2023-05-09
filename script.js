$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

    let currentAP = 100
    let currentHP = 100

function onReady() {
    console.log('READY TO RUN');
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

    $('.arcane-scepter').on('click', arcaneScepterBtn)
    $('.entangle').on('click', entangleBtn)
    $('.dragon-blade').on('click', dragonBtn)
    $('.star-fire').on('click', starFireBtn)

    render();
}

function render() {
    
    $('.ap-text').text(currentAP)
    console.log('Current AP: ',currentAP);
    $('.hp-text').text(currentHP)
    console.log('Current HP: ',currentHP);

    // if (currentAP === 100) {
    //     $('.freaky-fungus').addClass('jump')
    // }
    // else if ( currentAP > 0 && currentHP <= 0) {
    //     $('.freaky-fungus').addClass('dead')
    // }
}

function arcaneScepterBtn() {
     currentAP -= 12
     currentHP -= 14
     if ( currentAP < 0 && currentHP > 0) {
        $('.freaky-fungus').addClass('jump').removeClass('walk')
    }       
    else if (currentHP <= 0) {
            $('.freaky-fungus').addClass('dead')
        }
    render()
}

function entangleBtn() {
    currentAP -= 23
    currentHP -= 9
    
    if ( currentAP < 0 && currentHP > 0) {
        $('.freaky-fungus').addClass('jump').removeClass('walk')
    }       
    else if (currentHP <= 0) {
            $('.freaky-fungus').addClass('dead')
        }
    render()
}

function dragonBtn() {
    currentAP -= 38
    currentHP -= 47
    
    if ( currentAP < 0 && currentHP > 0) {
        $('.freaky-fungus').addClass('jump').removeClass('walk')
    }       
    else if (currentHP <= 0) {
            $('.freaky-fungus').addClass('dead')
        }
    render()
}

function starFireBtn() {
    currentAP -= 33
    currentHP -= 25
    
    if ( currentAP < 0 && currentHP > 0) {
        $('.freaky-fungus').addClass('jump').removeClass('walk')
    }       
    else if (currentHP <= 0) {
            $('.freaky-fungus').addClass('dead')
        }
    render() 
    }
    



console.log('PAGE IS LOADED!');