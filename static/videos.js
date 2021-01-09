function handleVideosLink(resp) {
	vids = resp.data.vids;
	let count = determineCount(vids);
	let imgPercent = 100 / count;
	const takenRowsCols = {};
	createInitialGrid(count, takenRowsCols, imgPercent);
	randomFillGrid(vids, count, takenRowsCols);
	animate(count);
}

function determineCount(vids) {
	if (vids.length == 1) {
		count = 1;
	} else if (vids.length <= 4) {
		count = 3;
	} else if (vids.length <= 8) {
		count = 5;
	} else {
		count = 6;
	}
	return count;
}

function createInitialGrid(count, takenRowsCols, imgPercent) {
	$("#img-container").append(`
		<div id="vid-col" class="d-flex align-items-center flex-column mt-3 invisible"></div>
	`);
	for (let i = 0; i < count; i++) {
		createRow(i, takenRowsCols, imgPercent);
		for (let y = 0; y < count; y++) {
			createColumn(i, y, imgPercent, count);
		}
	}
}

function createRow(i, takenRowsCols, imgPercent) {
	takenRowsCols[i] = [];
	$("#vid-col").append(`
		<div id="row-${i}" class="row my-auto justify-content-between" style="height: ${imgPercent}%;"></div>
	`);
}

function createColumn(i, y, imgPercent, count) {
	$(`#row-${i}`).append(`
				<div id="column-${i}-${y}" class="col" style="width: ${imgPercent}%;"></div>
			`);
	if (count !== 1) {
		$(`#row-${i}`).addClass("collapsed-nobs collapsed-row");
		$(`#column-${i}-${y}`).addClass("collapsed-nobs collapsed-col");
	}
}

function randomFillGrid(vids, count, takenRowsCols) {
	for (vid of vids) {
		const { randRow, randCol } = determineRandRowCol(count, takenRowsCols);
		console.log(vid.folder);
		if (!vid.folder.includes("water")) {
			$(`#column-${randRow}-${randCol}`).prepend(
				generateHeaderHTML(vid.header)
			);
		}
		if (vid["embed"]) {
			$(`#column-${randRow}-${randCol}`).append(
				generateYoutubeHTML(vid, count)
			);
		} else {
			$(`#column-${randRow}-${randCol}`).append(
				generateVidFileHTML(vid, count)
			);
		}
		if (!vid.folder.includes("water")) {
			if (vid.folder.includes("beauty")) {
				$(`#column-${randRow}-${randCol}`).append(
					generateFooterLinkHTML(vid.footer)
				);
			} else {
				$(`#column-${randRow}-${randCol}`).append(
					generateFooterHTML(vid.footer)
				);
			}
		}
		takenRowsCols[randRow].push(randCol);
		rrow = randRow;
		rcol = randCol;
	}
}

function determineRandRowCol(count, takenRowsCols) {
	let randRow = Math.floor(Math.random() * count);
	let randCol = Math.floor(Math.random() * count);
	while (takenRowsCols[randRow].includes(randCol)) {
		randRow = Math.floor(Math.random() * count);
		randCol = Math.floor(Math.random() * count);
	}
	return { randRow, randCol };
}

function animate(count) {
	setTimeout(() => {
		$(`#vid-col`).removeClass("invisible");
		$(`.vid-header`).removeClass("invisible");
		$(`.vid-footer`).removeClass("invisible");
		for (let i = 0; i < count; i++) {
			$(`#row-${i}`).css("top", `${(i * 100) / count}%`);
			$(`#row-${i}`).css("left", "0%");
			$(`#row-${i}`).addClass("uncollapsed");
			for (let y = 0; y < count; y++) {
				$(`#column-${i}-${y}`).css("left", `${(y * 100) / count}%`);
				$(`#column-${i}-${y}`).addClass("uncollapsed");
			}
		}
	}, 10);
}

function generateHeaderHTML(text) {
	return `<h1 class="vid-header invisible" >${text}</h1>`;
}

function generateFooterHTML(text) {
	return `<h1 class="vid-footer invisible" >${text}</h1>`;
}
function generateFooterLinkHTML(text) {
	return `<h1 class="vid-footer invisible"><a href="${text}">${text}</a></h1>`;
}

function generateYoutubeHTML(vid, count) {
	if (count === 1) {
		return `
        <div class="video i-only" id="${vid.filename}">
			${vid.embed}
        </div>
    `;
	}
	return `
        <div class="video i${count} col" id="${vid.filename}">
			${vid.embed}
        </div>
    `;
}

function generateVidFileHTML(vid, count) {
	if (count === 1) {
		return `
		<div class="video i-only" id="${vid.filename}">
			<video autoplay controls muted loop class="video i${count}" id="${vid.filename}">
				<source src="../static/videos/${vid.folder}/${vid.filename}" type="video/${vid.extension}">
			</video>
        </div>
    `;
	}
	return `
		<div class="video i${count}" id="${vid.filename}">
			<video autoplay controls muted loop class="video i${count}" id="${vid.filename}">
				<source src="../static/videos/${vid.folder}/${vid.filename}" type="video/${vid.extension}">
			</video>
        </div>
    `;
}
