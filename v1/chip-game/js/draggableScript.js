$(window).load(function () {

  function OutputValue(data1, data2) {
    $("#resultstr").val(data1);
    $("#resultstr1").val(data2);
  }
  function init() {
    $(".mainContainer").before('<div class="title-toll">'+title+'</div> <div class="respondent-info">'+respondentInfo+'</div>')
    $(".mainContainer").after('<div class="output-info"><b>Output</b>:'+outputInfo+'</div>')

    $(".mainContainer").append(
      '<div class="droppbaleAre"><div class="popuopBlock"><div class="shoImgBlock"></div><div class="closeIcon"></div></div></div><div class="clearAll"></div><div class="origin"></div><div class="clearAll"></div>'
    ),
      imgWidth,
      parseInt(imageSizepercentage.split("%")[0]),
      imgHeight,
      parseInt(imageSizepercentage.split("%")[0]);
    var r = cuntr / (100 / parseInt(imageSizepercentage.split("%")[0]));
    parseInt(imageSizepercentage.split("%")[0]),
      r > 65 && (r = 70),
      $(".mainContainer").css({ width: stageWidth + "px" }),
      (_length = droppableAttr.length);
    for (var t = 0; t < droppableAttr.length; t++)
      (arrayContainer["Arr" + t] = []),
        $(".droppbaleAre").append(
          "<div datd-info='" +
            t +
            "' id='drops" +
            t +
            "' class='drops marginRight shadowGray'><div class='imgBlock'><img src='images/" +
            droppableAttr[t] +
            "' style='width:120px; height:120px;'></div></div>"
        ),
        (clickIdAttr[t] = 0);
    for (var i = 0; i < draggableAttr.length; i++)
      $(".origin").append(
        "<div id='drag" +
          i +
          "' info-data='" +
          i +
          "' class='drags marginRight'><img  src='images/coinIcon.png'></div>"
      );
  }
  function Adddrag(drag, drop) {
    for (
      var resultStr = "",
        dragId = drag.attr("id").split("g")[1],
        dropId = drop.attr("id").split("s")[1],
        i = 0;
      i < _length;
      i++
    )
      if (dropId == i) {
        eval("Arr" + i).push(dragId);
        break;
      }
    for (var j = 0; j < _length; j++)
      $("#drp" + j).attr("value", eval("Arr" + j).length);
    OutputValue();
  }
  function removedrag(ddrag) {
    for (var dragId = ddrag.attr("id").split("g")[1], z = 0; z < _length; z++) {
      for (var temp = eval("Arr" + z), i = 0; i < temp.length; i++)
        temp[i] == dragId && temp.splice(i, 1);
      $("#drp" + z).attr("value", temp.length);
    }
    Output();
  }
  function Output() {
    for (var str = "", i = 0; i < _length; i++)
      str += eval("Arr" + i).length + ",";
    var subStr = str.substr(0, 2 * _length);
    OutputValue(subStr, clickIdAttr);
  }
  var droppableAttr = droppableStr.split("|"),
    draggableAttr = draggableStr.split("|"),
    arrayContainer = window,
    clickIdAttr = [],
    cuntr = 150,
    zindx = 0;
  init(),
    $(".drags").draggable({
      refreshPositions: !0,
      containment: ".mainContainer",
      cursor: "move",
      revert: "invalid",
      greedy: !0,
      tolerance: "touch",
      drag: function (r, t) {
        $(this).css({ "z-index": ++zindx }), removedrag($(this));
      },
      revert: function (r) {
        var t = $(this);
        return (
          (hasBeenDroppedBefore = t.data("hasBeenDropped")),
          (wasJustDropped = r),
          !wasJustDropped &&
            (removedrag(t),
            !hasBeenDroppedBefore ||
              (t.animate({ top: 0, left: 0 }, "slow"), !1))
        );
      },
    }),
    $(".drops").bind({
      click: function () {
        $(".popuopBlock").show();
        var r = $(this).find("img").attr("src");
        $(".shoImgBlock").html("<img src='" + r + "'>");
        var t = $(this).attr("datd-info");
        (clickIdAttr[t] = "1"),
          Output(),
          $(this).removeClass("shadowGray"),
          $(this).addClass("shadowGreen"),
          $(this).find(".counterVal").css({ color: "#2af947" }),
          $(this).droppable({
            drop: function (r, t) {
              $(t.draggable).data("hasBeenDropped", !0),
                t.draggable.position({
                  of: $(this),
                  my: "center",
                  at: "center",
                  using: function (r) {
                    $(this).animate(r, 300, "linear");
                  },
                }),
                Adddrag(t.draggable, $(this)),
                Output();
            },
          });
      },
    }),
    $(".closeIcon").click(function () {
      $(".popuopBlock").hide();
    });

  // chipGameWidget();
});
//# sourceMappingURL=draggableScript.min.js.map
// function chipGameWidget() {
//   $("body").append(
//       ''
//   );
// }
