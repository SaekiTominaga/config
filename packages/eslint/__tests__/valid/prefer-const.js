/* ignoreReadBeforeAssign: true */
let timer;

const initialize = () => {
	clearInterval(timer);
};

timer = setInterval(initialize);
