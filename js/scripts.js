var str=1;
var con=1;
var per=1;
var dex=1;
var int=1;
var cha=1;
var wil=1;
var lck=1;

var hp = ((str * .5) + con) * 3;
$("#hp").text(hp);
var stn = (wil * .5) + con;
var mv = dex * 1.5;
var ac = (con * 10 / 12) + 5;
var dr = (con + wil) + str * .5 +5;
var pr = (con + wil) + str * .5 +5;
var mb = str * .25;
var hc = per * .25 +10;
var cc = lck * .25 +10;
var ap = dex * 1.25;

function add (number) {
  if (number < 12) {
    return number + 1;
  }
  else {
    return number;
  }
}

function subtract (number) {
  if (number > 1) {
  return number - 1;
}
else {
  return number;
  }
}

function calcHP() {
  return Math.ceil(((str * .5) + con) * 3);
}

function calcSTN() {
  return Math.ceil((wil * .5) + con);
}

function calcMV() {
  return Math.ceil(dex * 1.5);
}

function calcAC() {
  return Math.ceil((con * 10 / 12) + 5);
}

function calcDR() {
  return Math.ceil((con + wil) + str * .5 +5);
}

function calcPR() {
  return Math.ceil((con + wil) + str * .5 +5);
}

function calcMB() {
  return Math.ceil(str * .25);
}

function calcHC() {
  return Math.ceil(per * .25 +10);
}

function calcCC() {
  return Math.ceil(lck * .25 +10);
}

function calcAP() {
  return Math.ceil(dex * 1.25)
}

$(document).ready(function() {

  $(".strup").click(function() {
    str = add(str);
    hp = calcHP();
    dr = calcDR();
    pr = calcPR();
    mb = calcMB();
    $("#str").text(str);
    $("#hp").text(hp);
    $("#dr").text(dr);
    $("#pr").text(pr);
    $("#mb").text(mb)
  });

  $(".strdn").click(function() {
    str = subtract(str);
    hp = calcHP();
    dr = calcDR();
    pr = calcPR();
    mb = calcMB();
    $("#str").text(str);
    $("#hp").text(hp);
    $("#dr").text(dr);
    $("#pr").text(pr);
    $("#mb").text(mb);
  });

  $(".conup").click(function() {
    con = add(con);
    hp = calcHP();
    ac = calcAC();
    stn = calcSTN();
    dr = calcDR();
    pr = calcPR();
    $("#con").text(con);
    $("#hp").text(hp);
    $("#stn").text(stn);
    $("#ac").text(ac);
    $("#dr").text(dr);
    $("#pr").text(pr);
  });

  $(".condn").click(function() {
    con = subtract(con);
    hp = calcHP();
    ac = calcAC();
    stn = calcSTN();
    dr = calcDR();
    pr = calcPR();
    $("#con").text(con);
    $("#hp").text(hp);
    $("#stn").text(stn);
    $("#ac").text(ac);
    $("#dr").text(dr);
    $("#pr").text(pr);
  });

  $(".perup").click(function() {
    per = add(per);
    console.log(per);
    hc = calcHC();
    $("#per").text(per);
    $("#hc").text(hc);
  });

  $(".perdn").click(function() {
    per = subtract(per);
    console.log(per);
    hc = calcHC();
    $("#per").text(per);
    $("#hc").text(hc);
  });

  $(".dexup").click(function() {
    dex = add(dex);
    mv = calcMV();
    ap = calcAP();
    $("#dex").text(dex);
    $("#mv").text(mv);
    $("#ap").text(ap)
  });

  $(".dexdn").click(function() {
    dex = subtract(dex);
    mv = calcMV();
    ap = calcAP
    $("#dex").text(dex);
    $("#mv").text(mv);
    $("#ap").text(ap)
  });

  $(".intup").click(function() {
    int = add(int);
    console.log(int);
    $("#int").text(int);
  });

  $(".intdn").click(function() {
    int = subtract(int);
    console.log(int);
    $("#int").text(int);
  })

  $(".chaup").click(function() {
    cha = add(cha);
    console.log(cha);
    $("#cha").text(cha);
  })

  $(".chadn").click(function() {
    cha = subtract(cha);
    console.log(cha);
    $("#cha").text(cha);
  })

  $(".wilup").click(function() {
    wil = add(wil);
    console.log(wil);
    stn = calcSTN();
    dr = calcDR();
    pr = calcPR();
    $("#wil").text(wil);
    $("#stn").text(stn);
    $("#dr").text(dr);
    $("#pr").text(dr);
  })

  $(".wildn").click(function() {
    wil = subtract(wil);
    console.log(wil);
    stn = calcSTN();
    dr = calcDR();
    pr = caclPR();
    $("#wil").text(wil);
    $("#stn").text(stn);
    $("#dr").text(dr);
    $("#pr").text(dr);
  })

  $(".lckup").click(function() {
    lck = add(lck);
    console.log(lck);
    cc = calcCC();
    $("#lck").text(lck);
    $("#cc").text(cc);
  })

  $(".lckdn").click(function() {
    lck = subtract(lck);
    console.log(lck);
    cc = calcCC();
    $("#lck").text(lck);
    $("#cc").text(cc)
  })
});
