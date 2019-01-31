var str=1;
var con=1;
var per=1;
var dex=1;
var int=1;
var cha=1;
var wil=1;
var lck=1;
var hp= function(str, con) {
  return (str / 2) + (con * 3);
}

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

$(document).ready(function() {

  $(".strup").click(function() {
    str = add(str);
    console.log(str);
    hp()
    $("#str").text(str);
  });

  $(".strdn").click(function() {
    str = subtract(str);
    console.log(str);
    hp()
    $("#str").text(str);
  });

  $(".conup").click(function() {
    con = add(con);
    console.log(con);
    hp()
    $("#con").text(con);
  });

  $(".condn").click(function() {
    con = subtract(con);
    console.log(con);
    hp()
    $("#con").text(con);
  });

  $(".perup").click(function() {
    per = add(per);
    console.log(per);
    $("#per").text(per);
  });

  $(".perdn").click(function() {
    per = subtract(per);
    console.log(per);
    $("#per").text(per);
  });

  $(".dexup").click(function() {
    dex = add(dex);
    console.log(dex);
    $("#dex").text(dex);
  });

  $(".dexdn").click(function() {
    dex = subtract(dex);
    console.log(dex);
    $("#dex").text(dex);
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
    $("#wil").text(wil);
  })

  $(".wildn").click(function() {
    wil = subtract(wil);
    console.log(wil);
    $("#wil").text(wil);
  })

  $(".lckup").click(function() {
    lck = add(lck);
    console.log(lck);
    $("#lck").text(lck);
  })

  $(".lckdn").click(function() {
    lck = subtract(lck);
    console.log(lck);
    $("#lck").text(lck);
  })
});
