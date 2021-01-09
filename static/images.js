function handleImagesLink(resp) {
	imgs = resp.data.imgs;
	const firstImgHTML = generateImgHTML(
		imgs[currentImgIndex].filename,
		currentPage
	);
	const leftIndexListHTML = renderLeftIndexList();
	const middleIndexListHTML = renderMiddleIndexList();
	const rightIndexListHTML = renderRightIndexList();

	$("#img-container").append(firstImgHTML);
	$("#index-list-left").append(leftIndexListHTML);
	$("#index-list-middle").append(middleIndexListHTML);
	$("#index-list-right").append(rightIndexListHTML);
	createIndexLinkListeners();
}

function generateImgHTML(filename, folder) {
	return `<img id="main-img" src="../static/images/${folder}/${filename}" />`;
}

function getNextOrPrevImg() {
	const soughtImgHTML = generateImgHTML(
		imgs[currentImgIndex].filename,
		currentPage
	);
	fadeImg(soughtImgHTML);
}

function fadeImg(imgHTML) {
	$("#img-container").fadeOut(250);
	setTimeout(() => {
		$("#img-container").empty();
		$("#img-container").append(imgHTML);
	}, 250);
	$("#img-container").fadeIn(250);
}

$("#fwd-btn").on("click", () => {
	if (currentImgIndex === imgs.length - 1) {
		currentImgIndex = 0;
	} else {
		currentImgIndex++;
	}
	getNextOrPrevImg();
});

$("#back-btn").on("click", () => {
	if (currentImgIndex === 0) {
		currentImgIndex = imgs.length - 1;
	} else {
		currentImgIndex--;
	}
	getNextOrPrevImg();
});
