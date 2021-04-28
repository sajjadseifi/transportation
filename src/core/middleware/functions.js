

export const use = (props = {}, ...cb) => {
    if (!cb || cb.length <= 0)
        return;

    let levelf = 0;
    let updatedProps = props;
    const nextHandler = (newProps = {}) => {
        //end of middle ware
        if (typeof props == "error")
            return;

        levelf++;
        //update props
        updatedProps = Object.assign(updatedProps, newProps);
        //nextLevel
        runCurrent(updatedProps, levelf);
    };

    const runCurrent = (props, level = undefined) => {
        //if bad data for fnction...
        if (typeof level !== "number" || level >= cb.length)
            return;

        //get current 
        const current = cb[level];

        //if last function becus not function exist
        if (level == cb.length - 1)
            current(props);
        else
            current(props, nextHandler);

    };
    //initial 
    runCurrent(props, levelf);
};
