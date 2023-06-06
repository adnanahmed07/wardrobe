let button = document.querySelector("#Wardrobe");

$(".range").hide();
$(".wardrobe_select").hide();
$(".cabinet-color").hide();
$(".edge-option").hide();
$(".finishing").hide();
$(".handles").hide();
$(".add_to_cart").hide();
$(".sa_text").hide();
$(".door-style").hide();
$(".door-color").hide();

let selectedValue = "";

$('input[name="Style"]').on("change", function () {
  $("button").attr("data-item-custom1-value", $(this).val());
  $(".wardrobe_option_image").removeClass("active");
  $(this).siblings(".wardrobe_option_image").addClass("active");

  $(".sa_text").show();
  $(".range").show();

  $('input[name="Range"]').on("change", function () {
    selectedValue = $(this).val();

    $("button").attr("data-item-custom2-value", $(this).val());

    $(".door-color").show();
    $('input[name="door-color"]').on("change", function () {
      $("button").attr("data-item-custom12-name", "Door Colour");
      $("button").attr("data-item-custom12-type", "readonly");
      $("button").attr("data-item-custom12-value", $(this).val());
      doorColorValue = $(this).val();
      $(".door-style").hide();
      // Show the corresponding door based on doorColorValue
      if (doorColorValue === "White") {
        $(".white_door").show();
        $('input[name="white_door"]').on("change", function () {
          $("button").attr("data-item-custom13-name", "Door Style");
          $("button").attr("data-item-custom13-type", "readonly");
          $("button").attr("data-item-custom13-value", $(this).val());
          $(".door_text").removeClass("active");
          $(this).siblings(".door_text").addClass("active");
          $(".wardrobe_select").show();
        });
      } else if (doorColorValue === "Grey") {
        $(".grey_door").show();
        $('input[name="grey_door"]').on("change", function () {
          $("button").attr("data-item-custom13-name", "Door Style");
          $("button").attr("data-item-custom13-type", "readonly");
          $("button").attr("data-item-custom13-value", $(this).val());
          $(".door_text").removeClass("active");
          $(this).siblings(".door_text").addClass("active");
          $(".wardrobe_select").show();
        });
      } else if (doorColorValue === "Urban Oak") {
        $(".urbanoak_door").show();
        $('input[name="urbanoak_door"]').on("change", function () {
          $("button").attr("data-item-custom13-name", "Door Style");
          $("button").attr("data-item-custom13-type", "readonly");
          $("button").attr("data-item-custom13-value", $(this).val());
          $(".door_text").removeClass("active");
          $(this).siblings(".door_text").addClass("active");
          $(".wardrobe_select").show();
        });
      }

      // end IF
    });

    $('select[name="wardrobe_select"]').change(function () {
      if ($(this).val() == "") {
        $(".singles").hide();
        $(".doubles").hide();
        $(".options_wrapper").hide();
      } else if ($(this).val() == "Single") {
        $('input[type="radio"].doubles').prop("checked", false);
        $(".singles").show();
        $(".doubles").hide();

        $('input[name="width-of-wardrobe"]').on("change", function () {
          $("button").attr("data-item-custom3-name", "Width of Wardrobe");
          $("button").attr("data-item-custom3-type", "readonly");
          $("button").attr("data-item-custom3-value", $(this).val());
        });

        $('input[name="internals-single"]').on("change", function () {
          $("button").attr("data-item-custom4-name", "Internals");
          $("button").attr("data-item-custom4-type", "readonly");
          $("button").attr("data-item-custom4-value", $(this).val());
          $(".internal_text").removeClass("active");
          $(this).siblings(".internal_text").addClass("active");
        });

        // Uncheck the radio buttons within the 'Single' option
        $(
          'select[name="wardrobe_select"] option[value="Single"]             input[type="radio"]'
        ).prop("checked", false);

        // If the selected option is 'Double'
      } else {
        $('input[type="radio"].singles').prop("checked", false);
        $(".doubles").show();
        $(".singles").hide();

        $('input[name="width-of-wardrobes-double"]').on("change", function () {
          $("button").attr("data-item-custom5-name", "Width of Wardrobe");
          $("button").attr("data-item-custom5-type", "readonly");
          $("button").attr("data-item-custom5-value", $(this).val());
        });

        $('input[name="Internals-double"]').on("change", function () {
          $("button").attr("data-item-custom6-name", "Internals");
          $("button").attr("data-item-custom6-type", "readonly");
          $("button").attr("data-item-custom6-value", $(this).val());
          $(".internal_text").removeClass("active");
          $(this).siblings(".internal_text").addClass("active");
        });

        // Uncheck the radio buttons within the 'Double' option
        $(
          'select[name="wardrobe_select"] option[value="Double"] input[type="radio"]'
        ).prop("checked", false);
      }

      // Remove the attributes when the option changes
      $("button").removeAttr(
        "data-item-custom3-name data-item-custom3-type data-   item-custom3-value"
      );
      $("button").removeAttr(
        "data-item-custom4-name data-item-custom4-type data-item-custom4-value"
      );
      $("button").removeAttr(
        "data-item-custom5-name data-item-custom5-type data-item-custom5-value"
      );
      $("button").removeAttr(
        "data-item-custom6-name data-item-custom6-type data-item-custom6-value"
      );

      if ($(".doubles").is(":visible") || $(".singles").is(":visible")) {
        $(".cabinet-color").show();
        $('input[name="cabinet-colour"]').on("change", function () {
          $("button").attr("data-item-custom7-name", "Cabinet Colour");
          $("button").attr("data-item-custom7-type", "readonly");
          $("button").attr("data-item-custom7-value", $(this).val());
          $(".cc_radio_button").removeClass("active");
          $(this).parent(".cc_radio_button").addClass("active");

          updateEdgeOptionVisibility();
          if ($(".edge-option").is(":hidden")) {
            $(".handles").show();
            $('input[name="handles"]').on("change", function () {
              const handlePrice = Number($(this).data("option-price"));
              $("button").attr("data-item-custom10-name", "Handles");
              $("button").attr("data-item-custom10-type", "readonly");
              $("button").attr(
                "data-item-custom10-options",
                $(this).val() + "[" + handlePrice + "]"
              );
              $("button").attr("data-item-custom10-value", $(this).val());

              $(".finishing").show();
              $('input[name="finishing-touches"]').on("change", function () {
                $("button").attr("data-item-custom9-name", "Finishing touches");
                $("button").attr("data-item-custom9-type", "readonly");
                $("button").attr("data-item-custom9-value", $(this).val());
                $(".add_to_cart").show();
              });
            });
          } else {
            $('input[name="edge-option"]').on("change", function () {
              $("button").attr("data-item-custom8-name", "Edge Option");
              $("button").attr("data-item-custom8-type", "readonly");
              $("button").attr("data-item-custom8-value", $(this).val());
              $(".edge_radio_button").removeClass("active");
              $(this).parent(".edge_radio_button").addClass("active");

              $(".handles").show();
              $('input[name="handles"]').on("change", function () {
                const handlePrice = Number($(this).data("option-price"));
                $("button").attr("data-item-custom10-name", "Handles");
                $("button").attr("data-item-custom10-type", "readonly");
                $("button").attr(
                  "data-item-custom10-options",
                  $(this).val() + "[" + handlePrice + "]"
                );
                $("button").attr("data-item-custom10-value", $(this).val());
                $(".handle_text").removeClass("active");
                $(this).siblings(".handle_text").addClass("active");

                $(".finishing").show();
                $('input[name="finishing-touches"]').on("change", function () {
                  $("button").attr(
                    "data-item-custom9-name",
                    "Finishing touches"
                  );
                  $("button").attr("data-item-custom9-type", "readonly");
                  $("button").attr("data-item-custom9-value", $(this).val());
                  $(".add_to_cart").show();
                });
              });
            });
          }
        });
      }
    });
  });
});
function updateEdgeOptionVisibility() {
  if (selectedValue === "Bella (££)") {
    $(".edge-option").hide();
  } else {
    $(".edge-option").show();
  }
}

$(document).ready(function () {
  $(".wardrobe_radio").hover(
    function () {
      $(this)
        .siblings(".wardrobe_option_image")
        .find(".overlay")
        .fadeIn("fast");
    },
    function () {
      $(this)
        .siblings(".wardrobe_option_image")
        .find(".overlay")
        .fadeOut("fast");
    }
  );
});
