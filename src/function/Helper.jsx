export const AddLoadingEffect = (e, action) => {

    const formClasses = [
        "before:contents-['&nbsp']", "before:absolute", "before:top-0", "before:right-0", "before:bottom-0", "before:left-0", "before:opacity-5", "after:w-20", "after:h-20", "after:absolute", "after:top-1/2", "after:right-1/2", "after:-mr-10", "after:-mt-10", "after:rounded-full", "after:border-4", "after:border-solid", "after:border-transparent", "after:border-t-slate-200", "after:animate-spin"
    ];

    if (e.target.nodeName === "FORM") {
        // Add the loading classes
        e.target.classList.add(...formClasses);
    }

    // If you want to add a loading effect on button
    if (e.target.nodeName === "BUTTON") {
        // Add the loading classes
        e.target.firstElementChild.classList.remove('hidden');
        e.target.firstElementChild.classList.add('inline-block');
        const section = e.target.closest(`section`);
        if (section) {
            section.classList.add('pointer-events-none');
        }
    }

}

export const RemoveLoadingEffect = (e, navigate, redirect, delay = 1000) => {

    const formClasses = [
        "before:contents-['&nbsp']", "before:absolute", "before:top-0", "before:right-0", "before:bottom-0", "before:left-0", "before:opacity-5", "after:w-20", "after:h-20", "after:absolute", "after:top-1/2", "after:right-1/2", "after:-mr-10", "after:-mt-10", "after:rounded-full", "after:border-4", "after:border-solid", "after:border-transparent", "after:border-t-slate-200", "after:animate-spin"
    ];

    if (e.target.nodeName === "FORM") {

        // Remove the loading classes
        setTimeout(() => {

            e.target.classList.remove(...formClasses);

            if (redirect && navigate) {
                // <URLHandler url={redirect} />;
                navigate(redirect);
            }
        }, delay); // Simulate a 2-second delay
    }

    // If you want to add a loading effect on button
    if (e.target.nodeName === "BUTTON") {
        // Add the loading classes
        setTimeout(() => {
            e.target.firstElementChild.classList.add('hidden');
            e.target.firstElementChild.classList.remove('inline-block');
            const section = e.target.closest(`section`);
            if (section) {
                section.classList.remove('pointer-events-none');
            }
        }, delay);
    }

}
