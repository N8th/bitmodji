bmod;
// The object containing clothing types, gender, and their IDs
const clothingData = {
  clothing_types: {
    outerwear: {
      gender: 1, // Gender set to 1 for outerwear
      clothing_type: 1,
      view: "outerwear",
      ids: [155, 187, 281, 303, 314, 315, 346, 347, 350, 358, 385, 386, 425],
    },
    hat: {
      gender: 2, // Gender set to 2 for hat
      clothing_type: 1,
      view: "hat",
      ids: [20, 22, 23, 24, 25, 27, 29, 30, 31, 32, 33, 34, 35],
    },
    footwear: {
      gender: 1, // Gender set to 1 for shoes
      clothing_type: 1,
      view: "footwear",
      ids: [15, 17, 36, 37, 38, 39, 40, 42, 46],
    },
  },
};

// List of parameters to search for
const paramList = [
  "gender",
  "style",
  "hair",
  "jaw",
  "brow",
  "eye",
  "eyelash",
  "pupil",
  "nose",
  "mouth",
  "ear",
  "beard",
  "face_lines",
  "cheek_details",
  "eye_details",
  "glasses",
  "hat",
  "skin_tone",
  "hair_tone",
  "pupil_tone",
  "brow_tone",
  "beard_tone",
  "blush_tone",
  "eyeshadow_tone",
  "lipstick_tone",
  "hat_tone1",
  "hat_tone2",
  "hat_tone3",
  "hat_tone4",
  "hat_tone5",
  "hat_tone6",
  "hat_tone7",
  "hat_tone8",
  "hat_tone9",
  "body",
  "breast",
  "face_proportion",
  "clothing_type",
  "top",
  "bottom",
  "footwear",
  "outerwear",
  "sock",
  "browringL_ABottom",
  "browringL_ABottom_tone1",
  "browringL_ARing",
  "browringL_ARing_tone1",
  "browringL_ATop",
  "browringL_ATop_tone1",
  "browringL_BBottom",
  "browringL_BBottom_tone1",
  "browringL_BRing",
  "browringL_BRing_tone1",
  "browringL_BTop",
  "browringL_BTop_tone1",
  "browringL_CBottom",
  "browringL_CBottom_tone1",
  "browringL_CTop",
  "browringL_CTop_tone1",
  "browringL_DTop",
  "browringL_DTop_tone1",
  "browringR_ABottom",
  "browringR_ABottom_tone1",
  "browringR_ARing",
  "browringR_ARing_tone1",
  "browringR_ATop",
  "browringR_ATop_tone1",
  "browringR_BBottom",
  "browringR_BBottom_tone1",
  "browringR_BRing",
  "browringR_BRing_tone1",
  "browringR_BTop",
  "browringR_BTop_tone1",
  "browringR_CBottom",
  "browringR_CBottom_tone1",
  "browringR_CTop",
  "browringR_CTop_tone1",
  "browringR_DTop",
  "browringR_DTop_tone1",
  "earringL_cartilage1",
  "earringL_cartilage1_tone1",
  "earringL_cartilage2",
  "earringL_cartilage2_tone1",
  "earringL_cartilage3",
  "earringL_cartilage3_tone1",
  "earringL_hearingAid",
  "earringL_hearingAid_tone3",
  "earringL_hearingAid_tone2",
  "earringL_hearingAid_tone4",
  "earringL_hearingAid_tone1",
  "earringL_industrial1",
  "earringL_industrial1_tone1",
  "earringL_lobe1",
  "earringL_lobe1_tone1",
  "earringL_lobe2",
  "earringL_lobe2_tone1",
  "earringL_tragus1",
  "earringL_tragus1_tone1",
  "earringR_cartilage1",
  "earringR_cartilage1_tone1",
  "earringR_cartilage2",
  "earringR_cartilage2_tone1",
  "earringR_cartilage3",
  "earringR_cartilage3_tone1",
  "earringR_hearingAid",
  "earringR_hearingAid_tone3",
  "earringR_hearingAid_tone2",
  "earringR_hearingAid_tone4",
  "earringR_hearingAid_tone1",
  "earringR_industrial1",
  "earringR_industrial1_tone1",
  "earringR_lobe1",
  "earringR_lobe1_tone1",
  "earringR_lobe2",
  "earringR_lobe2_tone1",
  "earringR_tragus1",
  "earringR_tragus1_tone1",
  "mouthring_bottomRing1L",
  "mouthring_bottomRing1L_tone1",
  "mouthring_bottomRing1R",
  "mouthring_bottomRing1R_tone1",
  "mouthring_bottomRing2L",
  "mouthring_bottomRing2L_tone1",
  "mouthring_bottomRing2R",
  "mouthring_bottomRing2R_tone1",
  "mouthring_bottomRingC1",
  "mouthring_bottomRingC1_tone1",
  "mouthring_bottomStudCenter",
  "mouthring_bottomStudCenter_tone1",
  "mouthring_bottomStudL",
  "mouthring_bottomStudL_tone1",
  "mouthring_bottomStudR",
  "mouthring_bottomStudR_tone1",
  "mouthring_topCenter",
  "mouthring_topCenter_tone1",
  "mouthring_topL",
  "mouthring_topL_tone1",
  "mouthring_topR",
  "mouthring_topR_tone1",
  "nosering_nostrilHighL",
  "nosering_nostrilHighL_tone1",
  "nosering_nostrilHighR",
  "nosering_nostrilHighR_tone1",
  "nosering_nostrilL",
  "nosering_nostrilL_tone1",
  "nosering_nostrilR",
  "nosering_nostrilR_tone1",
  "nosering_septum",
  "nosering_septum_tone1",
  "tonguering_mid",
  "tonguering_mid_tone1",
  "eye_spacing",
  "eye_size",
  "is_tucked",
  "bottom_tone1",
  "bottom_tone10",
  "bottom_tone2",
  "bottom_tone3",
  "bottom_tone4",
  "bottom_tone5",
  "bottom_tone6",
  "bottom_tone7",
  "bottom_tone8",
  "bottom_tone9",
  "footwear_tone1",
  "footwear_tone10",
  "footwear_tone2",
  "footwear_tone3",
  "footwear_tone4",
  "footwear_tone5",
  "footwear_tone6",
  "footwear_tone7",
  "footwear_tone8",
  "footwear_tone9",
  "outerwear_tone1",
  "outerwear_tone10",
  "outerwear_tone2",
  "outerwear_tone3",
  "outerwear_tone4",
  "outerwear_tone5",
  "outerwear_tone6",
  "outerwear_tone7",
  "outerwear_tone8",
  "outerwear_tone9",
  "sock_tone1",
  "sock_tone2",
  "sock_tone3",
  "sock_tone4",
  "top_tone1",
  "top_tone10",
  "top_tone2",
  "top_tone3",
  "top_tone4",
  "top_tone5",
  "top_tone6",
  "top_tone7",
  "top_tone8",
  "top_tone9",
  "flow_mode",
];
// Remove the current grid from the page
function clearCurrentGrid() {
  const gridDiv = document.querySelector(".clothing-grid-div");
  if (gridDiv) {
    gridDiv.remove();
  }
}
function createWhiteDiv() {
  const whiteDiv = document.createElement("div");
  whiteDiv.className = "white-div"; // You can set a class name for styling in CSS
  whiteDiv.style.position = "fixed";
  whiteDiv.style.top = "0";
  whiteDiv.style.left = "0";
  whiteDiv.style.width = "100%";
  whiteDiv.style.height = "100vh";
  whiteDiv.style.backgroundColor = "white";
  whiteDiv.style.zIndex = "8888";

  document.body.appendChild(whiteDiv);
}

// Call the function to create the white div
createWhiteDiv();

function createButton(clothingType, params) {
  const btn = document.createElement("button");
  btn.innerText = clothingType;
  btn.style.padding = "10px 20px";
  btn.style.marginRight = "10px";
  btn.style.cursor = "pointer";
  btn.style.border = "none";
  btn.style.borderRadius = "5px";
  btn.style.backgroundColor = "#3498db";
  btn.style.color = "white";
  btn.style.fontWeight = "bold";
  btn.style.transition = "background-color 0.3s";

  btn.onmouseover = function () {
    btn.style.backgroundColor = "#2980b9"; // Fixed this line
  };
  btn.onmouseout = function () {
    btn.style.backgroundColor = "#3498db"; // Fixed this line
  };

  btn.addEventListener("click", () => {
    clearCurrentGrid();
    createClothingGrid(clothingType, params);
  });

  return btn;
}

function setupButtons(params) {
  const existingContainer = document.querySelector(".button-container");
  if (existingContainer) {
    existingContainer.remove();
  }

  const btnContainer = document.createElement("div");
  btnContainer.className = "button-container";
  btnContainer.style.display = "flex";
  btnContainer.style.position = "fixed";
  btnContainer.style.top = "0";
  btnContainer.style.left = "30%";
  btnContainer.style.zIndex = "10000";
  btnContainer.style.backgroundColor = "white";
  btnContainer.style.padding = "10px";
  btnContainer.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";

  for (const clothingType in clothingData.clothing_types) {
    const btn = createButton(clothingType, params);
    btnContainer.appendChild(btn);
  }

  document.body.appendChild(btnContainer);
}

function createClothingGrid(clothingType, params) {
  const gridDiv = document.createElement("div");
  gridDiv.style.width = "70%";
  gridDiv.style.height = "100vh";
  gridDiv.style.position = "fixed";
  gridDiv.style.top = "0";
  gridDiv.style.left = "30%";
  gridDiv.style.zIndex = "9999";
  gridDiv.style.display = "flex";
  gridDiv.style.flexWrap = "wrap";
  gridDiv.style.backgroundColor = "white";

  const maxCellWidth = 20;
  const maxImageWidth = "100%";
  const btnContainerHeight =
    document.querySelector(".button-container").offsetHeight;
  gridDiv.style.top = `${btnContainerHeight}px`; // Starting below the button container

  const mainImg = document.getElementById("main-preview-img"); // Get the main image by its ID

  const updateIframeAndMainImg = (clothingId) => {
    // Update the iframe parameters
    params[clothingType] = clothingId;

    // Create a query string from the updated parameters
    const paramStr = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    // Update the iframe source with the updated parameters
    resetIframe(params);

    // Update the main image source with all iframe parameters
    mainImg.src = `https://preview.bitmoji.com/bm-preview/v3/avatar/body?${paramStr}&scale=4`;
  };

  const clothingTypeInfo = clothingData.clothing_types[clothingType];

  clothingTypeInfo.ids.forEach((clothingId) => {
    const clothingImgUrl = `https://preview.bitmoji.com/bm-preview/v3/avatar/${clothingTypeInfo.view}?scale=4&gender=${params.gender}&style=${params.style}&clothing_type=${clothingTypeInfo.clothing_type}&${clothingType}=${clothingId}`;

    const clothingImg = document.createElement("img");
    clothingImg.src = clothingImgUrl;
    clothingImg.style.maxWidth = maxImageWidth;
    clothingImg.style.maxHeight = maxImageWidth;
    clothingImg.style.objectFit = "contain";

    const textDiv = document.createElement("div");
    textDiv.textContent = clothingId;
    textDiv.style.textAlign = "center";
    textDiv.style.fontWeight = "bold";
    textDiv.style.marginTop = "4px";

    const gridCell = document.createElement("div");
    gridCell.style.flex = `0 0 ${maxCellWidth}%`;
    gridCell.style.height = `calc(${maxCellWidth}% + 20px)`;
    gridCell.style.boxSizing = "border-box";
    gridCell.style.border = "4px solid black";
    gridCell.style.borderRadius = "8px";
    gridCell.style.padding = "8px";

    // Add a click event listener to the grid cell
    gridCell.addEventListener("click", () => {
      updateIframeAndMainImg(clothingId);
    });

    gridCell.appendChild(clothingImg);
    gridCell.appendChild(textDiv);
    gridDiv.appendChild(gridCell);
  });

  document.body.appendChild(gridDiv);
}

// Function to create the main image
function createMainImage(params) {
  const mainImg = document.getElementById("main-preview-img");

  const paramStr = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const newSrc = `https://preview.bitmoji.com/bm-preview/v3/avatar/body?${paramStr}&scale=4`;

  if (mainImg) {
    // Set the source in a setTimeout to ensure it updates
    setTimeout(() => {
      mainImg.src = newSrc;
    }, 0);
  } else {
    const mainImgDiv = document.createElement("div");
    mainImgDiv.style.width = "30%";
    mainImgDiv.style.height = "100vh";
    mainImgDiv.style.position = "fixed";
    mainImgDiv.style.top = "0";
    mainImgDiv.style.left = "0";
    mainImgDiv.style.zIndex = "9999";

    const mainImg = document.createElement("img");
    mainImg.id = "main-preview-img";
    mainImg.src = newSrc; // Set the source
    mainImg.style.width = "100%";
    mainImg.style.height = "100%";
    mainImg.style.objectFit = "contain";
    mainImgDiv.appendChild(mainImg);

    document.body.appendChild(mainImgDiv);
  }
}

// Function to reset the iframe
function resetIframe(params) {
  const iframe = document.querySelector("#root > iframe");

  if (iframe) {
    const iframeSrc = iframe.getAttribute("src");
    const urlParams = new URL(iframeSrc).searchParams;

    paramList.forEach((param) => {
      if (params[param]) {
        urlParams.set(param, params[param]); // Update the parameter value
      }
    });

    iframe.setAttribute(
      "src",
      iframeSrc.split("?")[0] + "?" + urlParams.toString()
    );
  }
}

// Function to handle parameter updates
function handleParameterUpdate(param, value) {
  const params = {};
  params[param] = value;

  // Create the main image with the updated parameter
  createMainImage(params);

  // Reset the iframe with the updated parameters
  resetIframe(params);
}

// Function to extract parameters from the iframe URL
function extractParamsFromIframe() {
  const iframe = document.querySelector("#root > iframe");

  if (iframe) {
    const iframeSrc = iframe.getAttribute("src");
    const urlParams = new URL(iframeSrc).searchParams;
    const params = {};

    paramList.forEach((param) => {
      const paramValue = urlParams.get(param);
      if (paramValue) {
        params[param] = paramValue;
      }
    });

    return params;
  }

  return {};
}

// Create a div for the grid of additional images
function createClothingGrids(params) {
  for (const clothingType in clothingData.clothing_types) {
    createClothingGrid(clothingType, params);
  }
}

// Initial execution to create the main image based on existing parameters
const initialParams = extractParamsFromIframe();
initialParams.topOffset = 10; // Starting offset from the top
createMainImage(initialParams);
setupButtons(initialParams);

paramList.forEach((param) => {
  const inputElement = document.getElementById(param);
  if (inputElement) {
    inputElement.addEventListener("change", (event) => {
      handleParameterUpdate(param, event.target.value);
    });
  }
});
