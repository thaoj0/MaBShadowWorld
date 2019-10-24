/*
#=============================================================================
# Windows for LeTBS
# LeTBSWindows.js
# By Lecode
# Version A - 1.4
#-----------------------------------------------------------------------------
# TERMS OF USE
#-----------------------------------------------------------------------------
# https://github.com/LecodeMV/leTBS/blob/master/LICENSE.txt
#-----------------------------------------------------------------------------
# Version History
#-----------------------------------------------------------------------------
# - 1.0 : Initial release
# - 1.1 : The tag sprite_name is correctly taken into account
# - 1.2 : The status window is updated
# - 1.3 : The command, skill and item windows can't be off the screen
# - 1.4 : Draws TP and move points
#=============================================================================
*/
var Lecode = Lecode || {};
if (!Lecode.S_TBS)
    throw new Error("LeTBSWindows must be below LeTBS");
Lecode.S_TBS.Windows = {};
/*:
 * @plugindesc Version A Windows for LeTBS
 * @author Lecode
 * @version 1.4
 *
 * @param Hp Text Color
 * @desc Color code of HP
 * @default 2
 *
 * @param Mp Text Color
 * @desc Color code of MP
 * @default 3
 *
 * @param -- Confirm Windows --
 * @desc [No description]
 * @default 
 *
 * @param Confirmation Text
 * @desc [No description]
 * @default Confirm
 *
 * @param Cancel Text
 * @desc [No description]
 * @default Cancel
 *
 * @param Battle Start Q
 * @desc [No description]
 * @default Begin Battle ?
 *
 * @param Start Battle Text
 * @desc [No description]
 * @default Start Battle
 *
 * @param -- Status Window --
 * @desc [No description]
 * @default 
 *
 * @param Status Window Width
 * @desc [No description]
 * @default 270
 *
 * @param Status Window Height
 * @desc [No description]
 * @default window.fittingHeight(3)
 *
 * @param Status Window X
 * @desc [No description]
 * @default 0
 *
 * @param Status Window Y
 * @desc [No description]
 * @default Graphics.height - window.height
 *
 * @param Status Sprite Box Width
 * @desc [No description]
 * @default 100
 *
 * @param Status Sprite Box Height
 * @desc [No description]
 * @default window.lineHeight(2)
 *
 * @param Max States Icon
 * @desc [No description]
 * @default 3
 *
 * @param Move Points Color Code
 * @desc [No description]
 * @default 14
 *
 * @param Status Window Show T P
 * @desc [No description]
 * @default true
 *
 * @param Status Window Show Move Points
 * @desc [No description]
 * @default true
 *
 * @param -- Skill Window --
 * @desc [No description]
 * @default 
 *
 * @param Skill Window Width
 * @desc [No description]
 * @default 450
 *
 * @param Skill Window Height
 * @desc [No description]
 * @default window.fittingHeight(4)
 *
 * @param -- Item Window --
 * @desc [No description]
 * @default 
 *
 * @param Item Window Width
 * @desc [No description]
 * @default 300
 *
 * @param Item Window Height
 * @desc [No description]
 * @default window.fittingHeight(4)
 *
 * @param -- End Window --
 * @desc [No description]
 * @default 
 *
 * @param End Window Width
 * @desc [No description]
 * @default 220
 *
 * @param End Window Visible Lines
 * @desc [No description]
 * @default 3
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin is a part of LeTBS Core centered around windows.
 * The windows definition are made in the core plugin but the content are
 * defined here.
 * The windows are very basic. It's up to your team to design them following
 * your needs.
 * 
 * ============================================================================
 * WARNING: Work In Progress
 * ============================================================================
 *
 * The plugin is in WIP state currently.
 */
//#=============================================================================


/*-------------------------------------------------------------------------
* Get Parameters
-------------------------------------------------------------------------*/
var parameters = PluginManager.parameters('LeTBSWindows');

Lecode.S_TBS.Windows.hpTextColor = Number(parameters["Hp Text Color"] || 2);	//	(): Color code of HP
Lecode.S_TBS.Windows.mpTextColor = Number(parameters["Mp Text Color"] || 3);	//	(): Color code of MP
// Divider: -- Confirm Windows --
Lecode.S_TBS.Windows.confirmOkText = String(parameters["Confirmation Text"] || "Confirm");	//	(Confirmation Text): 
Lecode.S_TBS.Windows.confirmCancelText = String(parameters["Cancel Text"] || "Cancel");	//	(Cancel Text): 
Lecode.S_TBS.Windows.confirmBattleText = String(parameters["Battle Start Q"] || "Begin Battle ?");	//	(Battle Start Q): 
Lecode.S_TBS.Windows.startBattleText = String(parameters["Start Battle Text"] || "Start Battle");
// Divider: -- Status Window --
Lecode.S_TBS.Windows.statusWindowW = Number(parameters["Status Window Width"] || 270);	//	(Status Window Width): 
Lecode.S_TBS.Windows.statusWindowH = String(parameters["Status Window Height"] || "window.fittingHeight(3)");;	//	(Status Window Height): 
Lecode.S_TBS.Windows.statusWindowX = Number(parameters["Status Window X"] || 0);	//	(Status Window X): 
Lecode.S_TBS.Windows.statusWindowY = String(parameters["Status Window Y"] || "Graphics.height - window.height");	//	(Status Window Y): 
Lecode.S_TBS.Windows.statusWindowSpriteBoxW = Number(parameters["Status Sprite Box Width"] || 100);	//	(Status Sprite Box Width): 
Lecode.S_TBS.Windows.statusWindowSpriteBoxH = String(parameters["Status Sprite Box Height"] || "window.lineHeight(2)");;	//	(Status Sprite Box Height): 
Lecode.S_TBS.Windows.statusWindowMaxStates = Number(parameters["Max States Icon"] || 3);	//	(Max States Icon): 
Lecode.S_TBS.Windows.movePointsColor = Number(parameters["Move Points Color Code"] || 14);	//	(Move Points Color Code): 
Lecode.S_TBS.Windows.statusWindowShowTP = String(parameters["Status Window Show T P"] || 'true') === 'true';
Lecode.S_TBS.Windows.statusWindowShowMovePoints = String(parameters["Status Window Show Move Points"] || 'true') === 'true';
// Divider: -- Skill Window --
Lecode.S_TBS.Windows.skillWindowW = Number(parameters["Skill Window Width"] || 450);	//	(Skill Window Width): 
Lecode.S_TBS.Windows.skillWindowH = String(parameters["Skill Window Height"] || "window.fittingHeight(4)");;	//	(Skill Window Height): 
// Divider: -- Item Window --
Lecode.S_TBS.Windows.itemWindowW = Number(parameters["Item Window Width"] || 300);	//	(Item Window Width): 
Lecode.S_TBS.Windows.itemWindowH = String(parameters["Item Window Height"] || "window.fittingHeight(4)");;	//	(Item Window Height): 
// Divider: -- End Window --
Lecode.S_TBS.Windows.endCommandWindowW = Number(parameters["End Window Width"] || 220);	//	(End Window Width): 
Lecode.S_TBS.Windows.endCommandWindowVisibleLines = Number(parameters["End Window Visible Lines"] || 3);	//	(End Window Visible Lines): 


/*-------------------------------------------------------------------------
* Window_TBSConfirm
-------------------------------------------------------------------------*/
Window_TBSConfirm.prototype = Object.create(LeU_WindowConfirmation.prototype);
Window_TBSConfirm.prototype.constructor = Window_TBSConfirm;

Window_TBSConfirm.prototype.initialize = function () {
    LeU_WindowConfirmation.prototype.initialize.call(this);
    this._okText = Lecode.S_TBS.Windows.confirmOkText;
    this._cancelText = Lecode.S_TBS.Windows.confirmCancelText;
    this._headerTexts = [Lecode.S_TBS.Windows.confirmBattleText];
    this.refresh();
};


/*-------------------------------------------------------------------------
* Window_TBSPositioning
-------------------------------------------------------------------------*/
Window_TBSPositioning.prototype = Object.create(Window_Selectable.prototype);
Window_TBSPositioning.prototype.constructor = Window_TBSPositioning;

Window_TBSPositioning.prototype.initialize = function () {
    var w = this.windowWidth();
    var h = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, 0, 0, w, h);
    this._lastIndex = 0;
    this._disabled = {};
    this._fixedIndexes = [];
    this.loadFaces();
};

Window_TBSPositioning.prototype.loadFaces = function () {
    $gameParty.members().forEach(function (actor) {
        ImageManager.loadFace(actor.faceName());
    });
};

Window_TBSPositioning.prototype.actor = function () {
    return $gameParty.members()[this._index];
};

Window_TBSPositioning.prototype.selectLast = function () {
    this.select(this._lastIndex);
};

Window_TBSPositioning.prototype.windowWidth = function () {
    return this.itemFrameWidth() + this.standardPadding() * 2;
};

Window_TBSPositioning.prototype.windowHeight = function () {
    return this.fittingHeight(4 * this.visibleItems());
};

Window_TBSPositioning.prototype.itemFrameWidth = function () {
    return Window_Base._faceWidth + Window_Base._iconWidth * 5;
};

Window_TBSPositioning.prototype.visibleItems = function () {
    return 3;
};

Window_TBSPositioning.prototype.maxCols = function () {
    return 1;
};

Window_TBSPositioning.prototype.maxItems = function () {
    return $gameParty.members().length;
};

Window_TBSPositioning.prototype.spacing = function () {
    return 0;
};

Window_TBSPositioning.prototype.itemWidth = function () {
    return this.itemFrameWidth();
};

Window_TBSPositioning.prototype.itemHeight = function () {
    return this.lineHeight() * 4;
};

Window_TBSPositioning.prototype.disableSelection = function () {
    this._disabled[this._index] = true;
};

Window_TBSPositioning.prototype.enableSelection = function () {
    this._disabled[this._index] = false;
};

Window_TBSPositioning.prototype.setFixedActor = function (actor) {
    var i = 0;
    $gameParty.members().forEach(function (member) {
        if (member.actorId() === actor.actorId()) {
            this._disabled[i] = true;
            this._fixedIndexes.push(i);
        }
        i++;
    }.bind(this));
};

Window_TBSPositioning.prototype.isEnabled = function (index) {
    if (!this._disabled[index] &&
        BattleManagerTBS.allyEntities().length === BattleManagerTBS.allyStartCells().length) return false;
    return !this._fixedIndexes.contains(index);
};

Window_TBSPositioning.prototype.isCurrentItemEnabled = function () {
    return this.isEnabled(this.index());
};

Window_TBSPositioning.prototype.drawItem = function (index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    var x = rect.x;
    var y = rect.y;
    var w;
    this.changePaintOpacity(!this._disabled[index]);
    this.drawActorFace(actor, x, y, Window_Base._faceWidth, Window_Base._faceHeight);
    x += Window_Base._faceWidth;
    this.drawText(actor.name(), x, y, this.contents.height);
    w = this.itemFrameWidth() - Window_Base._faceWidth - 2;
    y += this.lineHeight();
    this.drawActorHp(actor, x, y, w);
    y += this.lineHeight();
    this.drawActorMp(actor, x, y, w);
    y += this.lineHeight();
    this.drawActorIcons(actor, x, y, Window_Base._iconWidth * 5);
};

Window_TBSPositioning.prototype.drawFace = function (faceName, faceIndex, x, y, width, height) {
    width = width || Window_Base._faceWidth;
    height = height || Window_Base._faceHeight;
    var bitmap = ImageManager.loadFace(faceName);
    var pw = Window_Base._faceWidth;
    var ph = Window_Base._faceHeight;
    var sw = Math.min(width, pw);
    var sh = Math.min(height, ph);
    var dx = Math.floor(x + Math.max(width - pw, 0) / 2);
    var dy = Math.floor(y + Math.max(height - ph, 0) / 2);
    var sx = faceIndex % 4 * pw + (pw - sw) / 2;
    var sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
    bitmap.smooth = true;
    this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy);
};

Window_TBSPositioning.prototype._updateCursor = function () {
    var blinkCount = this._animationCount % 40;
    var cursorOpacity = 255;
    if (this.active) {
        if (blinkCount < 20) {
            cursorOpacity -= blinkCount * 8;
        } else {
            cursorOpacity -= (40 - blinkCount) * 8;
        }
    }
    this._windowCursorSprite.alpha = cursorOpacity / 255;
    this._windowCursorSprite.visible = this.isOpen();
};

Window_TBSPositioning.prototype.cursorUp = function (wrap) {
    Window_Selectable.prototype.cursorUp.call(this, wrap);
    if (this.index() === this.maxItems() - 1)
        this.callHandler("exit_up");
};

Window_TBSPositioning.prototype.processOk = function () {
    this._lastIndex = this.index();
    Window_Selectable.prototype.processOk.call(this);
};


/*-------------------------------------------------------------------------
* Window_TBSPositioningConfirm
-------------------------------------------------------------------------*/
Window_TBSPositioningConfirm.prototype = Object.create(Window_Command.prototype);
Window_TBSPositioningConfirm.prototype.constructor = Window_TBSPositioningConfirm;

Window_TBSPositioningConfirm.prototype.initialize = function (w) {
    this._goalWidth = w;
    Window_Command.prototype.initialize.call(this, 0, 0);
    this._enabled = false;
    this.deselect();
};

Window_TBSPositioningConfirm.prototype.setEnabled = function (bool) {
    this._enabled = !!bool;
};

Window_TBSPositioningConfirm.prototype.makeCommandList = function () {
    this.addCommand(this.text(), 'ok', this._enabled);
};

Window_TBSPositioningConfirm.prototype.text = function () {
    return Lecode.S_TBS.Windows.startBattleText;
};

Window_TBSPositioningConfirm.prototype.windowWidth = function () {
    return this._goalWidth;
};

Window_TBSPositioningConfirm.prototype.windowHeight = function () {
    return this.fittingHeight(1);
};

Window_TBSPositioningConfirm.prototype.numVisibleRows = function () {
    return 1;
};

Window_TBSPositioningConfirm.prototype.drawItem = function (index) {
    var w = this.textWidth(this.text()) + Window_Base._iconWidth + 2;
    var x = this.contentsWidth() / 2 - w / 2;
    this.changePaintOpacity(this._enabled);
    this.drawIcon(77, x, 0);
    x += Window_Base._iconWidth + 2;
    this.leU_drawText(this.text(), x, 0);
};

Window_TBSPositioningConfirm.prototype.cursorDown = function (wrap) {
    Window_Command.prototype.cursorDown.call(this, wrap);
    this.callHandler("cursor_down");
};

Window_TBSPositioningConfirm.prototype.isCursorMovable = function () {
    return this.active;
};


/*-------------------------------------------------------------------------
* Window_TBSStatus
-------------------------------------------------------------------------*/
Window_TBSStatus.prototype = Object.create(Window_Base.prototype);
Window_TBSStatus.prototype.constructor = Window_TBSStatus;

Window_TBSStatus.prototype.initialize = function () {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, 0, 0, width, height);
    var window = this;
    var x = eval(Lecode.S_TBS.Windows.statusWindowX);
    var y = eval(Lecode.S_TBS.Windows.statusWindowY);
    this.x = x;
    this.y = y;
    this._entity = null;
    this._sliding = false;
    this._slidingRight = false;
    this.refresh();
};

Window_TBSStatus.prototype.windowWidth = function () {
    var window = this;
    return eval(Lecode.S_TBS.Windows.statusWindowW);
};

Window_TBSStatus.prototype.windowHeight = function () {
    var window = this;
    return eval(Lecode.S_TBS.Windows.statusWindowH);
};

Window_TBSStatus.prototype.slide = function () {
    this._sliding = true;
    // Sliding is back on but start at mid
    this.x = -this.width/2;
};
Window_TBSStatus.prototype.slideRight = function () {
    this._slidingRight = true;
    // Sliding is back on but start at mid
    this.x = Graphics.width - this.width/2;
};
Window_TBSStatus.prototype.update = function () {
    Window_Base.prototype.update.call(this);
    var speed = 8;
    var destX = eval(Lecode.S_TBS.Windows.statusWindowX);
    if (this._sliding) {
        this.x += speed;
        if (this.x >= destX) {
            this._sliding = false;
            this.x = destX;
        }
    }
    destX = Graphics.width - this.width;
    if (this._slidingRight) {
        this.x -= speed;
        if (this.x <= destX) {
            this._slidingRight = false;
            this.x = destX;
        }
    }
};
Window_TBSStatus.prototype.hpGaugeColor1 = function() {
    return this.textColor(18);
};

Window_TBSStatus.prototype.hpGaugeColor2 = function() {
    return this.textColor(20);
};
Window_TBSStatus.prototype.tpGaugeColor1 = function() {
    return this.textColor(23);
};

Window_TBSStatus.prototype.tpGaugeColor2 = function() {
    return this.textColor(29);
};
Window_TBSStatus.prototype.refresh = function () {
    this.contents.clear();
    this._gaugeHeight = null;
    this.resetFontSettings();
    if (!this._entity) return;
    var x, y, w, h;
    var actor = this._entity.battler();
    //- Face
    this.drawSprite();
    //- Name
    x = Lecode.S_TBS.Windows.statusWindowSpriteBoxW;
    y = 12;//-4;
    this.contents.fontSize += 2;
    this.changeTextColor(this.systemColor());
    this.leU_drawText(actor.name(), "center", -8);
    this.contents.fontSize -= 4;
    this._gaugeHeight = 6; // This shrinks the bars
    //- HP Gauge
                //y += this.lineHeight() - 8;
    this.drawActorHp(actor, x, y, 124); // 100 ->124
    //- MP Gauge
    //y += this.lineHeight() - 8;
    //this.drawActorMp(actor, x, y, 100);
    //- TP Gauge
    if (Lecode.S_TBS.Windows.statusWindowShowTP) {
        y += this.lineHeight(); //- 8;// / 4 + 4;
        //this._gaugeHeight = 6;
        this.drawActorTp(actor, x, y, 124);
    }
    y += this.lineHeight() - 8;
    //- Move Points
    if (Lecode.S_TBS.Windows.statusWindowShowMovePoints) {
        y += this.lineHeight() + 4;
        var mp = this._entity.getMovePoints();
        var gw = (130 - mp * 4) / mp; //14
        x++;
        for (var i = 0; i < mp; i++) {
            this.contents.fillRect(x, y, gw, 2, this.textColor(Lecode.S_TBS.Windows.movePointsColor));
            x += gw + 4;
        }
    }
    // - States
    x = Lecode.S_TBS.Windows.statusWindowSpriteBoxW;
    //x = 2;
    var max = Lecode.S_TBS.Windows.statusWindowMaxStates;
    //this.drawActorIcons(actor, x, y, Window_Base._iconWidth * max);
    //y += this.lineHeight() - 8;
    
    this.S_TBSdrawActorIcons(actor, 0, y + this.lineHeight(), Window_Base._iconWidth * max);
    this.drawActorIconsTurns(actor, 0, y + this.lineHeight(), Window_Base._iconWidth * max);
    
    //y += this.lineHeight() - 8;
    //y += this.lineHeight() - 8;
    //stats
    x += 12;
    var x0 = x + 76;
    var x1 = x0 + 76;
    var x2 = x1 + 76;
    
    y = 14;
    var shift = 38;
    var y0 = y + 38;
    
    if (this._page === 0){
        var sign = actor.hrg < 0 ? "" : "+";
        this.drawTextEx(sign+(Math.round(actor.hrg*1e3)/1e1), x0 + shift, y);
        
        sign = actor.trg < 0 ? "" : "+";
        this.drawTextEx(sign+(Math.round(actor.trg*1e3)/1e1), x0 + shift, y0);
   
        this.drawTextEx("\\i[39]", x1, y); // armor
        this.drawTextEx(this._entity.battler().mp.toString(), x1 + shift, y);
        
        
        this.drawTextEx("\\i[9]", x1, y0); // Move Cost
        this.drawTextEx(this._entity.battler().luk.toString(), x1 + shift, y0);
        
        
        this.drawTextEx("\\i[10]", x2, y); // Hit
        this.drawTextEx((Math.round(actor.hit*1e3)/1e1)+"%", x2 + shift, y);
    
        
        this.drawTextEx("\\i[11]", x2, y0); // Evade
        this.drawTextEx((Math.round(actor.eva*1e3)/1e1)+"%", x2 + shift, y0);
    } 
    if (this._page === 1){ 
        var passiveCollection = actor.states().filter(function(state){ 
            return state.category.contains("ATTACHMENT");
        }).map(function(state){
            return state.id;
        });
        for (var i = 0; i < passiveCollection.length; i++){
            this.drawTextEx("\\it["+passiveCollection[i]+"]", x1, y); // atk
            y += 24;
        }
    }
    /*
    if (this._page === 1){  
        this.drawTextEx("\\i[7]", x1, y); // atk
        this.drawTextEx(this._entity.battler().atk.toString(), x1 + 32, y);
    
        
        this.drawTextEx("\\i[8]", x1, y0); // def
        this.drawTextEx(this._entity.battler().def.toString(), x1 + 32, y0);
    }*/
    /*
    if (this._page === 0){
        y0 = 4;
        var sign = actor.hrg < 0 ? "" : "+";
        this.drawTextEx(sign+(Math.round(actor.hrg*1e3)/1e1), x0 + 32, y0);
    
        y0 += 32;
        sign = actor.mrg < 0 ? "" : "+";
        this.drawTextEx(sign+(Math.round(actor.mrg*1e3)/1e1), x0 + 32, y0);
    
        y0 += 32;
        sign = actor.trg < 0 ? "" : "+";
        this.drawTextEx(sign+(Math.round(actor.trg*1e3)/1e1), x0 + 32, y0);
   
        y1 = 4;
        this.drawTextEx("\\i[1056]", x1, y1); // Hit
        this.drawTextEx((Math.round(actor.hit*1e3)/1e1)+"%", x1 + 32, y1);
    
        y1 += 32;
        this.drawTextEx("\\i[1058]", x1, y1); // Evade
        this.drawTextEx((Math.round(actor.eva*1e3)/1e1)+"%", x1 + 32, y1);
    
        y1 += 32;
        this.drawTextEx("\\i[62]", x1, y1); // Move Cost
        this.drawTextEx(this._entity.battler().luk.toString(), x1 + 32, y1);
    } 
    if (this._page === 1){  
        y1 = 4;
        this.drawTextEx("\\i[57]", x1, y1); // atk
        this.drawTextEx(this._entity.battler().atk.toString(), x1 + 32, y1);
    
        y1 += 32;
        this.drawTextEx("\\i[58]", x1, y1); // def
        this.drawTextEx(this._entity.battler().def.toString(), x1 + 32, y1);
    
        y1 += 32;
        this.drawTextEx("\\i[59]", x1, y1); // mat
        this.drawTextEx(this._entity.battler().mat.toString(), x1 + 32, y1);
    }*/
};
//------------------------------------MAB Edits--------------------------------
Window_Base.prototype.S_TBSdrawActorIcons = function(actor, x, y, width) {
    width = width || 144;
    var icons = actor.allIcons().slice(0, Math.floor(width / Window_Base._iconWidth));
    for (var i = 0; i < icons.length; i++) {
        this.drawIcon(icons[i], x + Window_Base._iconWidth * (i % 16), y);
    }
};

Window_Base.prototype.drawBasicInfo = function(actor, x, y) {
    var lineHeight = this.lineHeight();
    this.drawActorIcons(actor, x, y + lineHeight * 1);
    this.drawActorHp(actor, x, y + lineHeight * 2);
    this.drawActorMp(actor, x, y + lineHeight * 3);
};

Window_Base.prototype.drawGaugeBars = function(x, y, width, rate, color1, color2) {
    this._gaugeHeight = 24;
    for(var i = 0; i < 5; i++){
        if ( i < rate * 10){
            this.drawGauge(x + i * 6, y, width, 1, color1, color1); 
        }else{
            this.drawGauge(x + i * 6, y, width, 1, color2, color2);     
        }
    }
};
//----------------------------------------------------------------------------
Window_TBSStatus.prototype.drawSprite = function () {
    var bitmap = ImageManager.loadLeTBSStatus(this._entity.filenameID());
    var window = this;
    bitmap.addLoadListener(function () {
        var dx = eval(Lecode.S_TBS.Windows.statusWindowSpriteBoxW) / 2 - bitmap.width / 2;
        var dy = 20 + eval(Lecode.S_TBS.Windows.statusWindowSpriteBoxH) / 2 - bitmap.height / 2;
        this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, dx, dy-12);
        //this.leU_drawText(this._entity.battler().name(), 0, -12);
    }.bind(this));
};

Window_TBSStatus.prototype.drawActorTp = function (actor, x, y, width) {
    //width = width || 96;
    //var color1 = this.tpGaugeColor1();
    //var color2 = this.tpGaugeColor2();
    //this.drawGauge(x, y, width, actor.tpRate(), color1, color2);
    
    width = width || 96;
    var color1 = this.tpGaugeColor1();
    var color2 = this.tpGaugeColor2();
    this.drawGauge(x, y, width, actor.tpRate(), color1, color2);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.tpA, x, y, 44);
    this.drawCurrentAndMax((actor.tp).toFixed(0), actor.maxTp(), x, y, width,
                           this.tpColor(actor), this.normalColor());
};

Window_TBSStatus.prototype.gaugeHeight = function () {
    return this._gaugeHeight || Yanfly.Param.GaugeHeight;
};


/*-------------------------------------------------------------------------
* Window_TBSSkillList
-------------------------------------------------------------------------*/
function Window_TBSSkillList() {
    this.initialize.apply(this, arguments);
}
Window_TBSSkillList.prototype = Object.create(Window_BattleSkill.prototype);
Window_TBSSkillList.prototype.constructor = Window_TBSSkillList;

Window_TBSSkillList.prototype.initialize = function () {
    var w = this.windowWidth();
    var h = this.windowHeight();
    Window_BattleSkill.prototype.initialize.call(this, 0, 0, w, h);
    this._entity = null;
};

Window_TBSSkillList.prototype.windowWidth = function () {
    var window = this;
    return eval(Lecode.S_TBS.Windows.skillWindowW);
};

Window_TBSSkillList.prototype.windowHeight = function () {
    var window = this;
    return eval(Lecode.S_TBS.Windows.skillWindowH);
};

Window_TBSSkillList.prototype.maxCols = function () {
    return 1;
};

Window_TBSSkillList.prototype.update = function () {
    Window_BattleSkill.prototype.update.call(this);
    if (this._entity) {
        this._entity.attachWindow(this);
    }
};


/*-------------------------------------------------------------------------
* Window_TBSItemList
-------------------------------------------------------------------------*/
function Window_TBSItemList() {
    this.initialize.apply(this, arguments);
}
Window_TBSItemList.prototype = Object.create(Window_BattleItem.prototype);
Window_TBSItemList.prototype.constructor = Window_TBSItemList;

Window_TBSItemList.prototype.initialize = function () {
    var w = this.windowWidth();
    var h = this.windowHeight();
    Window_BattleItem.prototype.initialize.call(this, 0, 0, w, h);
    this._entity = null;
};

Window_TBSItemList.prototype.windowWidth = function () {
    var window = this;
    return eval(Lecode.S_TBS.Windows.itemWindowW);
};

Window_TBSItemList.prototype.windowHeight = function () {
    var window = this;
    return eval(Lecode.S_TBS.Windows.itemWindowH);
};

Window_TBSItemList.prototype.maxCols = function () {
    return 1;
};

Window_TBSItemList.prototype.update = function () {
    Window_ItemList.prototype.update.call(this);
    if (this._entity) {
        this._entity.attachWindow(this);
    }
};


/*-------------------------------------------------------------------------
* Window_TBSEndCommand
-------------------------------------------------------------------------*/
Window_TBSEndCommand.prototype = Object.create(Window_Command.prototype);
Window_TBSEndCommand.prototype.constructor = Window_TBSEndCommand;

Window_TBSEndCommand.prototype.initialize = function () {
    var x = Graphics.width / 2 - this.windowWidth() / 2;
    var y = Graphics.height / 2 - this.windowHeight() / 2;
    Window_Command.prototype.initialize.call(this, x, y);
    this.openness = 0;
    this.deactivate();
};

Window_TBSEndCommand.prototype.windowWidth = function () {
    var window = this;
    return eval(Lecode.S_TBS.Windows.endCommandWindowW);
};

Window_TBSEndCommand.prototype.numVisibleRows = function () {
    var window = this;
    return eval(Lecode.S_TBS.Windows.endCommandWindowVisibleLines);
};

// This deletes "option" from the tbs battle option menu
Window_TBSEndCommand.prototype.makeCommandList = function () {
    //this.addCommand("Options", "options", false);
    this.addCommand("Escape", "escape", BattleManager.canEscape());
};
/** END OF FILE
-----------------------------------------------------------------------------*/
/** This deletes "command remember" option from the option menu
-----------------------------------------------------------------------------*/
Window_Options.prototype.addGeneralOptions = function() {
    this.addCommand(TextManager.alwaysDash, 'alwaysDash');
    //this.addCommand(TextManager.commandRemember, 'commandRemember');
};

/** Controls the Main Menu
-----------------------------------------------------------------------------*/
Scene_Menu.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    //this.drawBackground();
    this.createCommandWindow();
    this.createGoldWindow();
    this.createStatusWindow();
};
/*
Scene_Menu.prototype.drawBackground = function() {   
    this._backgroundWindow = new Window_Base();
    Window_Base.prototype.initialize.call(this._backgroundWindow, 0, 0, 640, 640);
    
    var createsprite = new Sprite('');
    createsprite = new Sprite(ImageManager.loadPicture('background')); 
    createsprite.visible = true;
    this._backgroundWindow.addChild(createsprite);
    this.addWindow(this._backgroundWindow);
};
Scene_MenuBase.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
    this._backgroundPic = new Sprite(ImageManager.loadPicture('background')); 
    this._backgroundSprite.bitmap = SceneManager.backgroundBitmap();
    this.addChild(this._backgroundSprite);
    this.addChild(this._backgroundPic);
};
*/
Scene_Menu.prototype.createStatusWindow = function() {
    this._statusWindow = new Window_MenuStatus(this._commandWindow.width, 0);
    this._statusWindow.reserveFaceImages();
    this.addWindow(this._statusWindow);
    this._statusWindow.hide();
    this._goldWindow.hide();
};
Window_MenuCommand.prototype.standardBackOpacity = function() {
    return 0;
};
Window_Gold.prototype.standardBackOpacity = function() {
    return 0;
};
Window_MenuStatus.prototype.standardBackOpacity = function() {
    return 0;
};

Window_MenuStatus.prototype.numVisibleRows = function() {
    return 0;//8;
};

Window_MenuStatus.prototype.windowWidth = function() {
    return Graphics.boxWidth - 640;
};
// This controls what appears on the main menu
Window_MenuStatus.prototype.drawItem = function(index) {
    //this.drawItemBackground(index);
    this.drawItemImage(index);
    //this.drawItemStatus(index);
};

// This controls width and height of the main menu
Window_MenuStatus.prototype.initialize = function(x, y) {
    var width = this.windowWidth() / 4 + 12;
    var height = this.windowHeight();
    var xl = Graphics.boxWidth - 176;
    var yl = y;
    Window_Selectable.prototype.initialize.call(this, xl, yl, width, height);
    this._formationMode = false;
    this._pendingIndex = -1;
    this.refresh();
};

// This moves the main menu command window
Window_MenuCommand.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    //var align = this.itemTextAlign();
    //this.resetTextColor();
    //this.changePaintOpacity(this.isCommandEnabled(index));
    //this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
    var icon_index = [34,35,36,37];
    this.drawTextEx("\\i["+icon_index[index]+"]", rect.x, rect.y);
};
// This decrease the width of the command menu
Window_MenuCommand.prototype.windowWidth = function() {
    return (Window_Base._iconWidth + (this.standardPadding() * 2)) * this.maxItems() ;//280;//return 140;
};
// This controls main menu rows and columns
Window_MenuCommand.prototype.maxCols = function () {
    return this.maxItems();
};
// Disable party min requirement to open formation
Window_MenuCommand.prototype.isFormationEnabled = function() {
    return $gameSystem.isFormationEnabled();//$gameParty.size() >= 2 && $gameSystem.isFormationEnabled();
};
Window_MenuCommand.prototype.numVisibleRows = function() {
    return 1;
};
Window_MenuCommand.prototype.refresh = function() {
    this.x = $gamePlayer.screenX() - this.width/2;// - 44;
    this.y = $gamePlayer.screenY() - this.height - 48;
    this.clearCommandList();
    this.makeCommandList();
    this.createContents();
    Window_Selectable.prototype.refresh.call(this);
};
Window_MenuCommand.prototype.select = function(index) {
    this._index = index;
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
    //this.indexSlot(index);
};
Window_MenuCommand.prototype.indexSlot = function(index) {
    var originalX = $gamePlayer.screenX() - 44;
    this.x = originalX - (((this.windowWidth()/4)-6) * index);
};
/** Actor's Simple Status - Removed HP and MP bar on menu
----------------------------------------------------------------------------------------*/
Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 180;
    var width2 = Math.min(200, width - 180 - this.textPadding());
    this.drawActorName(actor, x, y);
    //this.drawActorLevel(actor, x, y + lineHeight * 1);
    //this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.S_TBSdrawActorIcons(actor, x, y + this.lineHeight() * 2, Window_Base._iconWidth * 14);
    this.drawActorClass(actor, x2, y);
    //this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
    //this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
};
/* Lower the width of the active skill menu
--------------------------------------------------------------------*/
Window_SkillType.prototype.windowWidth = function() {
    return 140;
};

/** Sort Skills by Skill.speed in the skill menu
--------------------------------------------------------------------*/
Window_SkillList.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    var skill = this._data;
    skill.sort(function(a, b) {
        return a.speed - b.speed;
    });
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

/** Gives the status window pages
--------------------------------------------------------------------*/
var addPage_Window_TBSStatus_prototype_initialize = Window_TBSStatus.prototype.initialize;
Window_TBSStatus.prototype.initialize = function () {
    this._page = 0;
    addPage_Window_TBSStatus_prototype_initialize.call(this);
};
Window_TBSStatus.prototype.maxPage = function() {
    return 2;
};

Window_TBSStatus.prototype.cursorPagedown = function() {
    this._page = (this._page + 1) % this.maxPage();
    this.refresh();
};

Window_TBSStatus.prototype.cursorPageup = function() {
    this._page = (this._page + this.maxPage() - 1) % this.maxPage();
    this.refresh();
};

/** Title Screen Command Menu
--------------------------------------------------------------------------*/
Window_TitleCommand.prototype.maxCols = function () {
    return 4;
};

Window_TitleCommand.prototype.numVisibleRows = function () {
    return 1;
};

Window_TitleCommand.prototype.windowWidth = function () {
    return 600;
};

/** Pushes the help text box from 2 to 3 lines
--------------------------------------------------------------------------*/
Window_Help.prototype.initialize = function(numLines) {
    var width = Graphics.boxWidth;
    var height = this.fittingHeight(numLines || 3);
    Window_Base.prototype.initialize.call(this, 0, 0, width, height);
    this._text = '';
};