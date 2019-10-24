/*
#=============================================================================
# Balanced Damage Formula
# LeDamageFormula.js
# By Lecode
# Version 1.0
#-----------------------------------------------------------------------------
# TERMS OF USE
#-----------------------------------------------------------------------------
# - Credits to Lecode
#-----------------------------------------------------------------------------
# Version History
#-----------------------------------------------------------------------------
# - 1.0 : Initial release
#=============================================================================
*/
var Imported = Imported || {};
Imported.LeDamageFormula = true;

var Lecode = Lecode || {};
Lecode.S_DamageFormula = {};
/*:
 * @plugindesc Adds balanced damage formula
 * @author Lecode
 * @version 1.0
 *
 * @help
 * ============================================================================
 * What is this ?
 * ============================================================================
 *
 * This plugin is just a tool to setup damage formula more easily.
 * If your formula is too long or too elaborated you can simply put it bellow.
 */
//#=============================================================================


/*-------------------------------------------------------------------------
* Get Parameters
-------------------------------------------------------------------------*/
var parameters = PluginManager.parameters('LeDamageFormula');


/*-------------------------------------------------------------------------
* Game_Action
-------------------------------------------------------------------------*/
Lecode.S_DamageFormula.oldGameAction_evalDamageFormula = Game_Action.prototype.evalDamageFormula;
Game_Action.prototype.evalDamageFormula = function (target) {
    var a = this.subject();
    var b = target;
    this.phyDmg = function (rate) {
        //var rawDmg = (a.atk * 4 - b.def * 2) * rate * 0.01;
        var rawDmg = a.atk * 2 * rate * 0.01;
        var reduction = b.def / (b.def + 2 * rawDmg);
        return Math.floor(rawDmg - reduction * rawDmg);
    };
    this.magDmg = function (rate) {
        //var rawDmg = (a.mat * 4 - b.mdf * 2) * rate * 0.01;
        var rawDmg = a.mat * 2 * rate * 0.01;
        var reduction = b.mdf / (b.mdf + 2 * rawDmg);
        return Math.floor(rawDmg - reduction * rawDmg);
    };
    this.copyState = function(host, target, buff, debuff, num) {
        for(var i = 0; i < host._states.length;i++){
            var stateId = host._states[i];
            if ((buff && $dataStates[stateId].category.contains('BUFF')) || 
                (debuff && $dataStates[stateId].category.contains('DEBUFF'))
               ) {
                target.addState(stateId);
                num--;
                if (!num){
                    break;
                }
            }
        }
    };
    this.applyState = function(stateId, chance){
        chance *= target.stateRate(stateId);
        //chance *= this.subject().attackStatesRate(stateId);
        chance *= this.lukEffectRate(target);
        if (Math.random() < chance) {
            target.addState(stateId);
            this.makeSuccess(target);
        }
    }
    return Lecode.S_DamageFormula.oldGameAction_evalDamageFormula.call(this, target);
};
var ADV = ADV || {};
ADV.shuffle = function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

TBSSequenceManager.prototype.commandItemsteal = function (param) {
    var target1 = this.readTargets(param[0])[0];
    var target2 = this.readTargets(param[1])[0];
    var steal = param[2]||'';
    
    if (target1 && target2){
        var a = target1.battler();
        var b = target2.battler();
        var itemToState = ADV.data.linkItemState;
        ADV.shuffle(itemToState);
        var accessory = [];
        var item = null;
        // Destroy
        if(b.isActor()){
            accessory = b.actorBag();
            for(var i = 0; i < accessory.length; i++){ // check all item bags on actor
                if(item) break;
                ItemManager.checkAugmentSlots(accessory[i]);
                for(var j = 0; j < itemToState.length; j++){ // checks for all listed items
                    var slotId = accessory[i].augmentSlotItems.indexOf('item '+itemToState[j][0]);
                    if (slotId>=0){ 
                        //ItemManager.installAugmentToSlot(accessory[i], null, slotId);
                        //ItemManager.augmentRefreshParty(accessory[i]);
                        item = $dataItems[itemToState[j][0]];
                        ItemManager.applyAugmentEffects(accessory[i], null, slotId);
                        break;
                    }
                }
            }
        }else{ // check non-actors for item state. If found remove it.
            for(var i = 0; i < itemToState.length; i++){ 
                if(b.isStateAffected(itemToState[i][1])){ 
                    //b.removeState(itemToState[i][1]);
                    b.setStateCounter(itemToState[i][1],b.getStateCounter(itemToState[i][1])-1);
                    item = $dataItems[itemToState[i][0]];
                    break;
                }
            }
        }
        // Steal
        console.log(steal!='steal' +','+ !item);
        if(steal!='steal' || !item) return {};
        a.getEntity().addTextIconPopup("+",0,item.iconIndex);
        if(a.isActor()){ // actor user gain item while non-actor gain state
            $gameParty.gainItem(item, 1);
        }else{
            for(var i = 0; i < itemToState.length; i++){
                if(item == $dataItems[itemToState[i][0]]){
                    a.addState(itemToState[i][1]);
                    a.setStateCounter(itemToState[i][1],a.getStateCounter(itemToState[i][1])+1);
                }
            }
        }
        
        // Equip
        if(!a.isActor()) return {};
        accessory = a.actorBag();
        for (var i = 0; i < accessory.length; i++){
            ItemManager.checkAugmentSlots(accessory[i]);
            if(accessory[i].augmentSlotItems.indexOf('none') == -1) continue;
            var slot = accessory[i].augmentSlotItems.indexOf('none');
        
            ItemManager.applyAugmentEffects(accessory[i], item, slot);
            $gameParty.loseItem(item, 1);
            return {};
        }
    }

    return {};
};