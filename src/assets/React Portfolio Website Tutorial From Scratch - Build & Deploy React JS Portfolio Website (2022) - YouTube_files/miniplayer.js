(function(g){var window=this;'use strict';var H3=function(a){g.V.call(this,{F:"div",L:"ytp-miniplayer-ui"});this.Ve=!1;this.player=a;this.P(a,"minimized",this.ah);this.P(a,"onStateChange",this.zJ)},I3=function(a){g.fJ.call(this,a);
this.j=new H3(this.player);this.j.hide();g.SI(this.player,this.j.element,4);a.Af()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(H3,g.V);g.k=H3.prototype;
g.k.dH=function(){this.tooltip=new g.sN(this.player,this);g.I(this,this.tooltip);g.SI(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Cc=new g.nK(this.player);g.I(this,this.Cc);this.Fh=new g.V({F:"div",L:"ytp-miniplayer-scrim"});g.I(this,this.Fh);this.Fh.xa(this.element);this.P(this.Fh.element,"click",this.FC);var a=new g.V({F:"button",Ba:["ytp-miniplayer-close-button","ytp-button"],T:{"aria-label":"Close"},R:[g.tG()]});g.I(this,a);a.xa(this.Fh.element);this.P(a.element,"click",this.Nj);
a=new g.PZ(this.player,this);g.I(this,a);a.xa(this.Fh.element);this.rr=new g.V({F:"div",L:"ytp-miniplayer-controls"});g.I(this,this.rr);this.rr.xa(this.Fh.element);this.P(this.rr.element,"click",this.FC);var b=new g.V({F:"div",L:"ytp-miniplayer-button-container"});g.I(this,b);b.xa(this.rr.element);a=new g.V({F:"div",L:"ytp-miniplayer-play-button-container"});g.I(this,a);a.xa(this.rr.element);var c=new g.V({F:"div",L:"ytp-miniplayer-button-container"});g.I(this,c);c.xa(this.rr.element);this.zQ=new g.QL(this.player,
this,!1);g.I(this,this.zQ);this.zQ.xa(b.element);b=new g.OL(this.player,this);g.I(this,b);b.xa(a.element);this.nextButton=new g.QL(this.player,this,!0);g.I(this,this.nextButton);this.nextButton.xa(c.element);this.Ih=new g.eN(this.player,this);g.I(this,this.Ih);this.Ih.xa(this.Fh.element);this.vc=new g.aM(this.player,this);g.I(this,this.vc);g.SI(this.player,this.vc.element,4);this.vC=new g.V({F:"div",L:"ytp-miniplayer-buttons"});g.I(this,this.vC);g.SI(this.player,this.vC.element,4);a=new g.V({F:"button",
Ba:["ytp-miniplayer-close-button","ytp-button"],T:{"aria-label":"Close"},R:[g.tG()]});g.I(this,a);a.xa(this.vC.element);this.P(a.element,"click",this.Nj);a=new g.V({F:"button",Ba:["ytp-miniplayer-replay-button","ytp-button"],T:{"aria-label":"Close"},R:[g.zG()]});g.I(this,a);a.xa(this.vC.element);this.P(a.element,"click",this.WZ);this.P(this.player,"presentingplayerstatechange",this.Wc);this.P(this.player,"appresize",this.vb);this.P(this.player,"fullscreentoggled",this.vb);this.vb()};
g.k.show=function(){this.re=new g.Go(this.qs,null,this);this.re.start();this.Ve||(this.dH(),this.Ve=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.vc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.re&&(this.re.dispose(),this.re=void 0);g.V.prototype.hide.call(this);this.player.Af()||(this.Ve&&this.vc.hide(),this.player.loadModule("annotations_module"))};
g.k.ea=function(){this.re&&(this.re.dispose(),this.re=void 0);g.V.prototype.ea.call(this)};
g.k.Nj=function(){this.player.stopVideo();this.player.Ma("onCloseMiniplayer")};
g.k.WZ=function(){this.player.playVideo()};
g.k.FC=function(a){if(a.target===this.Fh.element||a.target===this.rr.element)this.player.S().K("kevlar_miniplayer_play_pause_on_scrim")?g.vF(this.player.wb())?this.player.pauseVideo():this.player.playVideo():this.player.Ma("onExpandMiniplayer")};
g.k.ah=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Af())};
g.k.Qd=function(){this.vc.Qb();this.Ih.Qb()};
g.k.qs=function(){this.Qd();this.re&&this.re.start()};
g.k.Wc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.vb=function(){g.qM(this.vc,0,this.player.Wa().getPlayerSize().width,!1);g.dM(this.vc)};
g.k.zJ=function(a){this.player.Af()&&(0===a?this.hide():this.show())};
g.k.jc=function(){return this.tooltip};
g.k.Hf=function(){return!1};
g.k.hg=function(){return!1};
g.k.Fj=function(){return!1};
g.k.Ez=function(){};
g.k.ap=function(){};
g.k.wu=function(){};
g.k.yp=function(){return null};
g.k.by=function(){return null};
g.k.Dj=function(){return new g.Fl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Bs=function(a,b,c,d,e){var f=0,h=d=0,l=g.$l(a);if(b){c=g.Oo(b,"ytp-prev-button")||g.Oo(b,"ytp-next-button");var m=g.Oo(b,"ytp-play-button"),n=g.Oo(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Yl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Oo(b,"ytp-miniplayer-button-top-left"),f=g.Yl(b,this.element),b=g.$l(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Wa().getPlayerSize().width;e=f+(e||0);l=g.Jg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Km=function(){};
g.k.Yl=function(){return!1};g.w(I3,g.fJ);I3.prototype.create=function(){};
I3.prototype.cj=function(){return!1};
I3.prototype.load=function(){this.player.hideControls();this.j.show()};
I3.prototype.unload=function(){this.player.showControls();this.j.hide()};g.eJ("miniplayer",I3);})(_yt_player);
