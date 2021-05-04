

export const use = (props = {}, ...cbmw) => {
    if (!cbmw || cbmw.length <= 0)
        return;

    let cb = [...cbmw];
    let levelf = 0;
    let updatedProps = props;
    //cb refrence...
    const nextHandler = (newProps = {}, ref = null) => {
        //cn finction is down
        if (cb.length == 0){
            console.warn("CalBack function is Empty");
            return;
        }
        //shooting ref cb to next or prev
        let shoot = null;
        //end of middle ware
        if (typeof props == "error" || props.error) {
            console.error(props);
            cb = [];
            return;
        }

        if (ref) {
            for (let i = 0; i < cb.length; i++)
                if (ref === cb[i]) {
                    console.log(ref)
                    shoot = i;
                    break;
                }
        }

        //upgrate level
        levelf = shoot ?? levelf + 1;
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
