$(window).load(function () {
  const widgetData = { client_key: client_key };
  var keyNotValid =
    "Key Expired|Your key is not valid please put your valid key.";
  var popupText =
    " Could not run the widget as the subscribed limit has exceeded. You may need to <span>upgrade your subscription</span> to extend the limit.";
  var trialVersion = "Free Trial Version";

  $.ajax({
    url: baseURl + "/subscription/validate/",
    type: "POST",
    dataType: "json",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(widgetData),
    success: function (response) {
      var errorMessage = "Somthing went wrong";
      if (response.data[0].is_paused) {
        var errorMessage = "Subscription Paused ";
      } else if (!response.data[0].is_widget_active) {
        var errorMessage = "Subscription expired ";
      } else {
        var errorMessage = "Somthing went wrong ";
      }

      if (response?.status && response.data[0].HasSuccess) {
        wedgitData();
        if (!response?.data[0].is_widget_purchase) {
          $(".droppbaleAre").before(
            '<div class="trial-version">\
                <div class="trial-version-text"><span>E2E</span>Research Pvt. Ltd</div>\
              </div>'
          );
        }
      } else if (response?.status && !response.data[0]?.HasSuccess) {
        $("body").addClass("popup");
        $("body").append(
          '<div class="popup-model"><div class="popup-outer">   \
                       <div class="popup-iner"><div class="popup-header"><h5>' +
            errorMessage +
            '</h5>\
                   </div>          \
                   <div class="popup-body"><div class="exclamation"><svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47">\
                   <g id="esclamination-mark" transform="translate(-1.1 -0.6)">\
                     <circle id="exclamation" data-name="Ellipse 2" cx="23.5" cy="23.5" r="23.5" transform="translate(1.1 0.6)" fill="#ffbf00"/>\
                     <path id="exclamation" d="M21.6,33.1a3,3,0,1,1,3,3A2.946,2.946,0,0,1,21.6,33.1Zm.3-18a2.717,2.717,0,0,1,5.4-.6v.6L26.2,25.6a1.669,1.669,0,0,1-1.8,1.5,1.7,1.7,0,0,1-1.5-1.5Z" fill="#fff"/>\
                   </g>\
                 </svg> </div>\
                   <div class="popup-text"> ' +
            response?.data[0]?.responseText +
            "\
                    </div> </div>\
                   </div>"
        );
      } else {
        $("body").addClass("popup");
        $("body").append(
          '<div class="popup-model"><div class="popup-outer">   \
                       <div class="popup-iner"><div class="popup-header"><h5>Subscription expired</h5>\
                   </div>          \
                   <div class="popup-body"><div class="exclamation"><svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47">\
                   <g id="esclamination-mark" transform="translate(-1.1 -0.6)">\
                     <circle id="exclamation" data-name="Ellipse 2" cx="23.5" cy="23.5" r="23.5" transform="translate(1.1 0.6)" fill="#ffbf00"/>\
                     <path id="exclamation" d="M21.6,33.1a3,3,0,1,1,3,3A2.946,2.946,0,0,1,21.6,33.1Zm.3-18a2.717,2.717,0,0,1,5.4-.6v.6L26.2,25.6a1.669,1.669,0,0,1-1.8,1.5,1.7,1.7,0,0,1-1.5-1.5Z" fill="#fff"/>\
                   </g>\
                 </svg> </div>\
                   <div class="popup-text"> ' +
            response.detail.message +
            "\
                    </div> </div>\
                   </div>"
        );
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      if (errorThrown) {
        $("body").addClass("popup");
        $("body").append(
          '<div class="popup-model"><div class="popup-outer">   \
                         <div class="popup-iner"><div class="popup-header"><h5>' +
            keyNotValid.split("|")[0] +
            '</h5>\
                     </div>          \
                     <div class="popup-body"><div class="exclamation"><svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47">\
                     <g id="esclamination-mark" transform="translate(-1.1 -0.6)">\
                       <circle id="exclamation" data-name="Ellipse 2" cx="23.5" cy="23.5" r="23.5" transform="translate(1.1 0.6)" fill="#ffbf00"/>\
                       <path id="exclamation" d="M21.6,33.1a3,3,0,1,1,3,3A2.946,2.946,0,0,1,21.6,33.1Zm.3-18a2.717,2.717,0,0,1,5.4-.6v.6L26.2,25.6a1.669,1.669,0,0,1-1.8,1.5,1.7,1.7,0,0,1-1.5-1.5Z" fill="#fff"/>\
                     </g>\
                   </svg> </div>\
                     <div class="popup-text"> ' +
            keyNotValid.split("|")[1] +
            "\
                      </div> </div>\
                     </div>"
        );
      }
    },
  });

  function wedgitData() {
    function OutputValue(data1, data2) {
      $("#resultstr").val(data1);
      $("#resultstr1").val(data2);
    }
    function init() {
      $(".mainContainer").before(
        '<div class="title-toll">' +
          title +
          '</div> <div class="respondent-info">' +
          respondentInfo +
          "</div>"
      );
      $(".mainContainer").after(
        '<div class="output-info"><b>Output</b>:' + outputInfo + "</div>"
      );

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
              "' class='drops marginRight shadowGray'><div class='imgBlock'><img src='src/images/" +
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
            "' class='drags marginRight'><img  src='src/images/coinIcon.png'></div>"
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
      for (
        var dragId = ddrag.attr("id").split("g")[1], z = 0;
        z < _length;
        z++
      ) {
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
      });
    var hitcount = 0;
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

        if (hitcount == 0) {
          hitcount = 1;
          $.ajax({
            url: baseURl + "/subscription/validate/hitcount/",
            type: "POST",
            dataType: "json",
            headers: {
              "Content-Type": "application/json",
            },
            data: JSON.stringify(widgetData),
            success: function (response) {
              // console.log(response);
            },
          });
        }
      },
    }),
      $(".closeIcon").click(function () {
        $(".popuopBlock").hide();
      });
  }
});
