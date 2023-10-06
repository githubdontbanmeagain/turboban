function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

function animateCursor() {
    const cursorElement = document.getElementById('cursor');
    const targetElement1 = document.getElementById('target1');

    setTimeout(() => {
        const targetRect1 = targetElement1.getBoundingClientRect();
        const cursorRect1 = cursorElement.getBoundingClientRect();
        const offsetX1 = targetRect1.left - cursorRect1.left + 16;
        const offsetY1 = targetRect1.top - cursorRect1.top;

        cursorElement.style.transform = `translate(${offsetX1}px, ${offsetY1}px)`;
        setTimeout(() => {

            setTimeout(() => {
                const switchElement = document.getElementById('switch1');
                switchElement.style.marginRight = "0px";
                switchElement.style.marginLeft = "20px";
                switchElement.style.background = "linear-gradient(50deg, #00ff00 0%, #00ffb3 70%)"

                setTimeout(() => {
                    const targetElement2 = document.getElementById('target2');

                    const targetRect2 = targetElement2.getBoundingClientRect();
                    const offsetX2 = targetRect2.left - cursorRect1.left + 16;
                    const offsetY2 = targetRect2.top - cursorRect1.top;

                    cursorElement.style.transform = `translate(${offsetX2}px, ${offsetY2}px)`;

                    setTimeout(() => {
                        const switchElement = document.getElementById('switch2');
                        switchElement.style.marginRight = "20px";
                        switchElement.style.marginLeft = "0px";
                        switchElement.style.background = "linear-gradient(-50deg, #ff1616 0%, #ff6d99 100%)"

                        setTimeout(() => {
                            cursorElement.style.opacity = 0;
                            cursorElement.style.transform = `translate(${offsetX2 + 100}px, ${offsetY2 + 30}px)`;
                        }, 1000);
                    }, 1100);
                }, 700);
            }, 600);
        }, 500);

    }, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
    const heroHeader = "Quit dealing with bad actors. We'll do it for you."
    const targetElement = document.getElementById("bubble-hover");

    heroHeader.split("").map((char, idx) => {
        const charSpan = document.createElement('span');

        charSpan.innerText = char;
        charSpan.setAttribute("data-index", idx.toString());
        charSpan.classList.add("hover-text");

        targetElement.appendChild(charSpan);
    });

    const hoverChars = [...document.getElementsByClassName("hover-text")]

    const removeClasses = () => {
        hoverChars.map((char) => {
            char.classList.remove("hover-text-hovered-1");
            char.classList.remove("hover-text-hovered-2");
            char.classList.remove("hover-text-hovered-3");
        });
    };

    hoverChars.map((char) => {
        char.addEventListener("mouseover", (e) => {
            removeClasses();

            const currentElement = e.target;
            const currentIndex = parseInt(currentElement.getAttribute("data-index"), 10);

            const previousIndex1 = currentIndex === 0 ? 0 : currentIndex - 1;
            const previousIndex2 = previousIndex1 === 0 ? 0 : previousIndex1 - 1;
            const nextIndex1 = currentIndex === heroHeader.length - 1 ? 0 : currentIndex + 1;
            const nextIndex2 = nextIndex1 === heroHeader.length - 1 ? 0 : nextIndex1 + 1;

            const previousElement1 =
                previousIndex1 !== 0 && document.querySelector(`[data-index="${previousIndex1}"]`);
            const previousElement2 =
                previousIndex2 !== 0 && document.querySelector(`[data-index="${previousIndex2}"]`);
            const nextElement1 = nextIndex1 !== 0 && document.querySelector(`[data-index="${nextIndex1}"]`);
            const nextElement2 = nextIndex2 !== 0 && document.querySelector(`[data-index="${nextIndex2}"]`);


            e.target.classList.add("hover-text-hovered-1");
            previousElement1 && previousElement1.classList.add("hover-text-hovered-2");
            previousElement2 && previousElement2.classList.add("hover-text-hovered-3");
            nextElement1 && nextElement1.classList.add("hover-text-hovered-2");
            nextElement2 && nextElement2.classList.add("hover-text-hovered-3");

        });

        char.addEventListener("mouseleave", removeClasses);
    });

    animateCursor();

});
